import { Card, CardContent } from "@/components/ui/card";

export default function ReportComponent() {
	return (
		<div className="bg-background text-foreground min-h-[100dvh] flex flex-col">
			<header className="bg-muted py-4 px-6 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<UserIcon className="w-8 h-8" />
					<div>
						<h1 className="text-xl font-bold">Interview Summary</h1>
						<p className="text-sm text-muted-foreground">Candidate: John Doe</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<div className="text-sm text-muted-foreground">
						<div>Date</div>
						<div>July 28, 2024</div>
					</div>
					<div className="text-sm text-muted-foreground">
						<div>Time</div>
						<div>2:00 PM</div>
					</div>
				</div>
			</header>
			<main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
				<section>
					<h2 className="text-lg font-bold mb-4">Feedback</h2>
					<div className="grid gap-6">
						<Card>
							<CardContent className="flex items-center gap-4">
								<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
									<FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
								</div>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<h3 className="text-base font-medium">Question 1</h3>
											<div className="bg-primary rounded-md px-2 py-1 text-xs text-primary-foreground">
												JavaScript
											</div>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<StarIcon className="w-4 h-4" />
											<span>4.5</span>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<p className="text-sm text-muted-foreground">
											The candidate provided a thorough and well-structured
											response, demonstrating a strong understanding of the
											topic.
										</p>
										<button className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground">
											<VolumeIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex items-center gap-4">
								<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
									<FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
								</div>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<h3 className="text-base font-medium">Question 2</h3>
											<div className="bg-secondary rounded-md px-2 py-1 text-xs text-secondary-foreground">
												React
											</div>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<StarIcon className="w-4 h-4" />
											<span>3.8</span>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<p className="text-sm text-muted-foreground">
											The candidate&apos;s response was somewhat lacking in
											depth and could have been more comprehensive.
										</p>
										<button className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground">
											<VolumeIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex items-center gap-4">
								<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
									<FileQuestionIcon className="w-5 h-5 text-muted-foreground" />
								</div>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<h3 className="text-base font-medium">Question 3</h3>
											<div className="bg-muted rounded-md px-2 py-1 text-xs text-muted-foreground">
												CSS
											</div>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<StarIcon className="w-4 h-4" />
											<span>4.2</span>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<p className="text-sm text-muted-foreground">
											The candidate&apos;s response was clear and concise,
											addressing the key points of the question.
										</p>
										<button className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground">
											<VolumeIcon className="w-4 h-4" />
										</button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
				<section>
					<h2 className="text-lg font-bold mb-4">Session Statistics</h2>
					<div className="grid gap-6">
						<div className="flex items-center gap-4">
							<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
								<ClockIcon className="w-5 h-5 text-muted-foreground" />
							</div>
							<div className="flex-1">
								<h3 className="text-base font-medium">Duration</h3>
								<p className="text-sm text-muted-foreground">45 minutes</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
								<ListIcon className="w-5 h-5 text-muted-foreground" />
							</div>
							<div className="flex-1">
								<h3 className="text-base font-medium">Questions</h3>
								<p className="text-sm text-muted-foreground">12 questions</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
								<GaugeIcon className="w-5 h-5 text-muted-foreground" />
							</div>
							<div className="flex-1">
								<h3 className="text-base font-medium">Average Rating</h3>
								<p className="text-sm text-muted-foreground">4.1</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

function ClockIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function FileQuestionIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 17h.01" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
		</svg>
	);
}

function GaugeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m12 14 4-4" />
			<path d="M3.34 19a10 10 0 1 1 17.32 0" />
		</svg>
	);
}

function ListIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="8" x2="21" y1="6" y2="6" />
			<line x1="8" x2="21" y1="12" y2="12" />
			<line x1="8" x2="21" y1="18" y2="18" />
			<line x1="3" x2="3.01" y1="6" y2="6" />
			<line x1="3" x2="3.01" y1="12" y2="12" />
			<line x1="3" x2="3.01" y1="18" y2="18" />
		</svg>
	);
}

function StarIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}

function UserIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function VolumeIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		</svg>
	);
}
