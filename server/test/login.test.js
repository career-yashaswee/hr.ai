const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");
require("dotenv").config({ path: "../.env.test" });

describe("POST /auth/login", () => {
	beforeAll(async () => {
		await mongoose.connect(process.env.MONGODB_URI, {});
	});

	afterAll((done) => {
		// Closing the DB connection allows Jest to exit successfully.
		mongoose.connection.close();
		done();
	});

	it("should return 200 for valid credentials", async () => {
		const username = faker.internet.userName();
		const password = faker.internet.password();
		const email = faker.internet.email();
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		// Create a user with the generated credentials
		await User.create({
			username,
			password,
			email,
			firstName,
			lastName,
			isVerified: true,
		});

		const response = await request(app)
			.post("/auth/login")
			.send({ username, password });

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("token");
	});

	it("should return 401 for incorrect password", async () => {
		const username = faker.internet.userName();
		const password = faker.internet.password();
		const email = faker.internet.email();
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		// Create a user with the generated credentials
		await User.create({
			username,
			password,
			email,
			firstName,
			lastName,
			isVerified: true,
		});

		const response = await request(app)
			.post("/auth/login")
			.send({ username, password: "wrongPassword" });

		expect(response.statusCode).toBe(401);
		expect(response.body).toHaveProperty("code", "PWD_INVALID");
	});

	it("should return 404 for non-existent user", async () => {
		const username = faker.internet.userName();
		const password = faker.internet.password();

		const response = await request(app)
			.post("/auth/login")
			.send({ username, password });

		expect(response.statusCode).toBe(404);
		expect(response.body).toHaveProperty("code", "USR_NOT_FOUND");
	});

	it("should return 403 for unverified user", async () => {
		const username = faker.internet.userName();
		const password = faker.internet.password();
		const email = faker.internet.email();
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		// Create a user with the generated credentials
		await User.create({
			username,
			password,
			email,
			firstName,
			lastName,
			isVerified: false,
		});

		const response = await request(app)
			.post("/auth/login")
			.send({ username, password });

		expect(response.statusCode).toBe(403);
		expect(response.body).toHaveProperty("code", "USR_NOT_VERIFY");
	});

	it("should return 500 for server errors", async () => {
		jest.spyOn(User, "findOne").mockImplementationOnce(() => {
			throw new Error("Database error");
		});

		const username = faker.internet.userName();
		const password = faker.internet.password();

		const response = await request(app)
			.post("/auth/login")
			.send({ username, password });

		expect(response.statusCode).toBe(500);
	});
});
