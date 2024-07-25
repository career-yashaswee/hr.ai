const { Storage } = require("@google-cloud/storage");
require("dotenv").config();
const projectId = process.env.GOOGLE_PROJECT_ID;
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const storage = new Storage({ projectId, keyFilename });

const bucketName = "intervue-resume";
const bucket = storage.bucket(bucketName);

const uploadResume = async (req, res, next) => {
	try {
		console.log(req);
		const file = req.file;
		const { userId } = req.body;
		if (!file) {
			res.status(400).json("No File Uploaded");
		}

		const fileName = `${userId}/${Date.now()}-${file.originalname}`;
		const blob = bucket.file(fileName);
		const blobStream = blob.createWriteStream({
			metadata: {
				contentType: file.mimetype,
			},
		});
		blobStream.on("error", (err) => {
			res.status(500).send(err).json({ status: "failed" });
		});
		blobStream.on("finish", () => {
			res.status(200).json({ status: "successful" });
		});

		blobStream.end(file.buffer);
	} catch (error) {}
};

const downloadResume = async (req, res, next) => {};

module.exports = {
	uploadResume,
	downloadResume,
};
