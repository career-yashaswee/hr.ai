const express = require("express");
const { validate } = require("../middlewares/validateSchema");
const { createJobScenario } = require("../controllers/scenario");
const router = express.Router();

//TODO: Integrate Authentication for these routes and next them to api routes

const { newJobScenarioSchema } = require("../schemas/jobSchema");

router.post("/create", validate(newJobScenarioSchema), createJobScenario);

module.exports = router;
