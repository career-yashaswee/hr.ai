const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
	{
		googleId: { type: String, unique: true },
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		avatar: { type: String },
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

/**
 * Pre-save hook to hash the password before saving it to the database.
 * This hook only runs if the password field is modified.
 */
userSchema.pre("save", async function (next) {
	const user = this;
	if (!user.isModified("password")) return next();

	try {
		const salt = 10; // Number of salt rounds
		user.password = await bcrypt.hash(user.password, salt);
		next();
	} catch (error) {
		return next(error);
	}
});

/**
 * Method to compare a given password with the hashed password stored in the database.
 * @param {string} password - The plain text password to compare.
 * @returns {Promise<boolean>} - Returns true if the passwords match, false otherwise.
 */
userSchema.methods.comparePassword = async function (password) {
	try {
		return await bcrypt.compare(password, this.password);
	} catch (error) {
		throw new Error("Error comparing passwords");
	}
};

/**
 * Method to generate a 6-digit verification code and store it in the document.
 * @returns {string} - The generated verification code.
 */
userSchema.methods.generateCode = function () {
	try {
		const code = Math.floor(100000 + Math.random() * 900000).toString();
		this.code = code;
		return code;
	} catch (error) {
		throw new Error("Error generating verification code");
	}
};

/**
 * Method to generate a unique username based on the user's name and email address.
 * The username will have no special characters, only English alphabet letters,
 * and will ensure it is a minimum of 6 characters, related to the user's info.
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 * @returns {Promise<string>} - Returns a unique username.
 */
userSchema.statics.generateUsername = async function (name, email) {
	try {
		const baseUsername =
			name.split(" ").join("").toLowerCase() +
			email.split("@")[0].toLowerCase();
		let username = baseUsername.replace(/[^a-zA-Z]/g, "").slice(0, 6);

		if (username.length < 6) {
			username = (baseUsername.replace(/[^a-zA-Z]/g, "") + "user").slice(0, 6);
		}

		let uniqueUsername = username;
		let userExists = await this.findOne({ username: uniqueUsername });
		let suffix = 1;

		while (userExists) {
			uniqueUsername = username + suffix;
			userExists = await this.findOne({ username: uniqueUsername });
			suffix += 1;
		}

		return uniqueUsername;
	} catch (error) {
		throw new Error("Error generating username");
	}
};

/**
 * Method to generate a strong password of 16 characters with a full range of symbols.
 * The password will have a minimum of one special character, one uppercase letter, and one lowercase letter.
 * @returns {string} - The generated strong password.
 */
userSchema.statics.generatePassword = function () {
	try {
		const length = 16;
		const charset =
			"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
		let password = "";

		const getRandomChar = (characters) =>
			characters[Math.floor(Math.random() * characters.length)];

		password += getRandomChar("abcdefghijklmnopqrstuvwxyz"); // lowercase
		password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); // uppercase
		password += getRandomChar("!@#$%^&*()_+~`|}{[]:;?><,./-="); // special character

		for (let i = password.length; i < length; i++) {
			password += getRandomChar(charset);
		}

		return password
			.split("")
			.sort(() => 0.5 - Math.random())
			.join(""); // shuffle password
	} catch (error) {
		throw new Error("Error generating password");
	}
};

const User = mongoose.model("User", userSchema);

module.exports = User;
