const express = require("express");
const {
	register,
	login,
	verifyEmail,
	googleLogin,
} = require("../controllers/auth");
const {
	registerSchema,
	loginSchema,
	verifyEmailSchema,
	googleLoginSchema,
} = require("../schemas/authSchema");

const { validate } = require("../middlewares/validateSchema");
const router = express.Router();
	
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/verify", validate(verifyEmailSchema), verifyEmail);
router.post("/google", validate(googleLoginSchema), googleLogin);
module.exports = router;
