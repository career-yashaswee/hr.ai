import { GoogleLogin } from "@react-oauth/google";

function SignIn() {
	const handleSuccess = async (credentialResponse) => {
		try {
			const response = await fetch("http://localhost:3000/api/auth/google", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token: credentialResponse.credential }),
			});
			const data = await response.json();
			console.log("Registration successful:", data);
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	const handleError = () => {
		console.error("Login Failed");
	};

	return (
		<GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />
	);
}

export default SignIn;
