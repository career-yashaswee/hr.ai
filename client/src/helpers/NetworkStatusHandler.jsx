import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useNetworkStatusContext } from "@/context/NetworkStatusContext";

const NetworkStatusHandler = () => {
	const isOnline = useNetworkStatusContext();
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (!isOnline) {
			toast.error("No internet connection");
		} else {
			toast.success("Internet Connected");
			// setTimeout(() => {
			// 	// window.location.reload();
			// }, 3000); // Adjust the delay as needed
		}
	}, [isOnline]);

	return null;
};

export default NetworkStatusHandler;
