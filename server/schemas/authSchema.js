const { z } = require("zod");

const registerSchema = z.object({
	body: z.object({
		username: z.string().min(3),
		email: z.string().email(),
		password: z.string().min(6),
	}),
});

const loginSchema = z.object({
	body: z.object({
		username: z.string().min(3),
		password: z.string().min(6),
	}),
});

const googleLoginSchema = z.object({
	body: z.object({
		token: z.string().min(1, "Google OAuth token is required"),
	}),
});

const verifyEmailSchema = z.object({
	body: z.object({
		email: z.string().email(),
		code: z.string().length(6, "Verification code must be 6 digits"),
	}),
});

module.exports = {
	registerSchema,
	loginSchema,
	verifyEmailSchema,
	googleLoginSchema,
};
