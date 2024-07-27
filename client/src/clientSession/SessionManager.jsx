// sessionManager.js
import axios from "axios";
import { useState, useEffect } from "react";
const useSessionManager = () => {
	const [isSessionExpired, setIsSessionExpired] = useState(false);
	const [isUnauthorizedAccess, setIsUnauthorizedAccess] = useState(false);

	useEffect(() => {
		const interceptor = axios.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response.status === 401) {
					const { code } = error.response.data;
					if (code === "AUTH_REQ") {
						const a = 5;
					} else if (code === "TOKEN_EXPIRED") {
						setIsSessionExpired(true);
					} else {
						setIsUnauthorizedAccess(true);
					}
				}
				console.log(isSessionExpired);
				console.log(isUnauthorizedAccess);
				return Promise.reject(error);
			}
		);

		return () => {
			axios.interceptors.response.eject(interceptor);
		};
	}, [isSessionExpired, isUnauthorizedAccess]);

	return {
		isSessionExpired,
		setIsSessionExpired,
		isUnauthorizedAccess,
		setIsUnauthorizedAccess,
	};
};

export default useSessionManager;
