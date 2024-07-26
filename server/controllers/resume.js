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

const listResume = async (req, res, next) => {
	const { _id } = req.params;
	try {
		const [files] = await storage.bucket(bucketName).getFiles({
			prefix: _id,
		});
		let obj = {};
		if (files.length == 0) {
			res.status(404).json({ array: 0 });
			return;
		}
		obj = files.map((file) => ({
			name: file.metadata.name,
			size: file.metadata.size,
			timeCreated: file.metadata.timeCreated,
		}));
		res.status(200).json({ array: obj });
	} catch (err) {
		res.status(400).json({ error: err });
		console.error("Error listing files:", err);
	}
};

const downloadResume = async (req, res, next) => {};

module.exports = {
	uploadResume,
	listResume,
	downloadResume,
};
