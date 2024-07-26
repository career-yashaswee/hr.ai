import axios from "axios";
import { RESUME_API_URI } from "@/routes/route-api";

export const uploadResume = async (file) => {
	try {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("userId", localStorage.getItem("_id"));
		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: RESUME_API_URI.UPLOAD,
			headers: {
				"Content-Type": "multipart/form-data",
			},
			data: formData,
		};
		const response = axios.request(config);
		return response;
	} catch (error) {
		return error;
	}
};

export const listResume = async (_id) => {
	try {
		let config = {
			method: "get",
			maxBodyLength: Infinity,
			url: RESUME_API_URI.LIST(_id),
			headers: {},
		};
		const response = axios.request(config);
		return response;
	} catch (error) {
		return error;
	}
};
