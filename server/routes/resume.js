const express = require("express");
const {
	uploadResume,
	downloadResume,
	listResume,
} = require("../controllers/resume");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", upload.single("file"), uploadResume);
router.get("/:_id", listResume);

module.exports = router;
