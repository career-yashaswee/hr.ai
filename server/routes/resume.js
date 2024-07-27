const express = require("express");
const {
	uploadResume,
	downloadResume,
	listResume,
} = require("../controllers/resume");
const router = express.Router();
const multer = require("multer");
const { authenticate } = require("../middlewares/auth");

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", authenticate, upload.single("file"), uploadResume);
router.get("/download", authenticate, downloadResume);
router.get("/:_id", authenticate, listResume);

module.exports = router;
