const Resend = require("resend");
require("dotenv").config();

const resend = new Resend.Resend(process.env.RESEND_API_KEY);

module.exports = resend;
