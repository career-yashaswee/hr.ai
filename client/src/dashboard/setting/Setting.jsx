import { useEffect, useState } from "react";

import {
	BadgeIndianRupee,
	BrainCircuit,
	LifeBuoy,
	Loader2,
	Settings,
} from "lucide-react";
import { General } from "./General";
import { Ai } from "./ArtificialIntelligence";
export function Setting() {
	const [selectedSection, setSelectedSection] = useState("General");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Simulate loading state
		setIsLoading(true);
		setIsLoading(false);
	}, [selectedSection]);

	const renderSection = () => {
		if (isLoading) {
			return (
				<div className="flex justify-center items-center h-full">
					<Loader2 className="h-8 w-8 animate-spin" />
				</div>
			);
		}

		switch (selectedSection) {
			case "General":
				return <General></General>;
			case "Ai":
				return <Ai></Ai>;
			case "Subscription":
				return <General></General>;
			default:
				return <General></General>;
		}
	};
	return (
		<main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
			<div className="mx-auto grid w-full max-w-6xl gap-2">
				<h1 className="text-3xl font-semibold gradient-text">Settings</h1>
			</div>
			<div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
				<nav className="grid text-sm text-muted-foreground">
					<button
						onClick={() => setSelectedSection("General")}
						className={`flex items-center gap-3  px-3 py-2 transition-all ${
							selectedSection === "General"
								? "bg-primary text-muted"
								: "bg-muted text-primary hover:text-primary"
						} rounded-tl-[12px] rounded-tr-[12px]`}
					>
						<Settings className="h-4 w-4" />
						General
					</button>

					<button
						onClick={() => setSelectedSection("Ai")}
						className={`flex items-center gap-3  px-3 py-2 transition-all ${
							selectedSection === "Ai"
								? "bg-primary text-muted"
								: "bg-muted text-primary hover:text-primary"
						}`}
					>
						<BrainCircuit className="h-4 w-4" />
						Artificial Intelligence
					</button>

					<button
						onClick={() => setSelectedSection("Subscription")}
						className={`flex items-center gap-3  px-3 py-2 transition-all ${
							selectedSection === "Subscription"
								? "bg-primary text-muted"
								: "bg-muted text-primary hover:text-primary"
						}`}
					>
						<BadgeIndianRupee className="h-4 w-4" />
						Subscription
					</button>

					<button
						onClick={() => setSelectedSection("Support")}
						className={`flex items-center gap-3  px-3 py-2 transition-all ${
							selectedSection === "Support"
								? "bg-primary text-muted"
								: "bg-muted text-primary hover:text-primary"
						} rounded-bl-[12px] rounded-br-[12px]`}
					>
						<LifeBuoy className="h-4 w-4" />
						Support
					</button>
				</nav>
				<div className="grid gap-6">{renderSection()}</div>
			</div>
		</main>
	);
}
