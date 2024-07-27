const BASE_URL = import.meta.env.VITE_BACKEND_URI;

export const AUTH_API_URI = {
	REGISTER_USER: `${BASE_URL}/auth/register`,
	CHECK_USERNAME: (username) => `${BASE_URL}/auth/user/${username}`,
	VERIFY_OTP: `${BASE_URL}/auth/verify`,
	VALIDATE_TOKEN: `${BASE_URL}/auth/validate`,
};

export const SCENARIO_API_URI = {
	LIST_BY_ID: (userId) => `${BASE_URL}/scenario?userId=${userId}`,
	CREATE: `${BASE_URL}/scenario`,
	UPDATE_BY_ID: (userID) => `${BASE_URL}/scenario/${userID}`,
	DELETE_BY_ID: (userID) => `${BASE_URL}/scenario/${userID}`,
};

export const RESUME_API_URI = {
	UPLOAD: `${BASE_URL}/resume`,
	LIST: (userId) => `${BASE_URL}/resume/${userId}`,
	DOWNLOAD: (fileName) => `${BASE_URL}/resume/download?fileName=${fileName}`,
};
