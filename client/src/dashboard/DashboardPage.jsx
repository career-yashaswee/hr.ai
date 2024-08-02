"use client";

import { getHours } from "date-fns";

// import {
// 	Card,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card";

export function DashboardPage() {
	const hey = localStorage.getItem("user@first");
	const currentHour = getHours(new Date());

	const getGreeting = (hour) => {
		if (hour < 12) return "Morning";
		if (hour < 18) return "Afternoon";
		if (hour < 21) return "Evening";
		return "Night";
	};
	const greeting = getGreeting(currentHour);

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-baseline">
				<h1 className="text-2xl font-semibold md:text-2xl">
					{`Good ${greeting},`}&nbsp;
				</h1>

				<p className="text-4xl font-bold gradient-text">
					{hey === "undefined" ? "Cloudy" : hey}
				</p>
			</div>
		</main>
	);
}
