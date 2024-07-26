import { useDropzone } from "react-dropzone";
import { uploadResume, listResume } from "@/helpers/resumeAPI";
import { toast } from "sonner";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
// import * as z from "zod";
// import { Info } from "lucide-react";

function Resume() {
	const [objects, setObjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const onDrop = useCallback((acceptedFiles) => {
		handleUpload(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			"application/pdf": [".pdf"],
		},
		onDrop,
	});

	let userId = localStorage.getItem("_id");
	useEffect(() => {
		const fetchObjects = async () => {
			setLoading(true);
			try {
				const response = await listResume(userId);
				setObjects(response.data.array);
			} catch (err) {
				if (err.response && err.response.status === 404) {
					setObjects([]);
				} else {
					setError(err.message);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchObjects();
	}, []);

	if (loading) {
		return <ProgressBar />;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	const handleUpload = async (acceptedFiles) => {
		const file = acceptedFiles[0];
		if (file) {
			try {
				await uploadResume(file)
					.then(() => {
						toast.success("File Uploaded Successfully");
					})
					.catch((error) => {
						console.log(error);
						toast.error("Something went Wrong");
					});
			} catch (error) {
				console.log(error);
				toast.error("Something went Wrong");
			}
		}
	};

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-bold md:text-2xl">Resume</h1>
			</div>
			{objects.length === 0 ? (
				<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm gap-1 text-center pb-8 pt-8">
					<div {...getRootProps({ className: "dropzone" })}>
						<input {...getInputProps()} name="file" />
						<p className="text-sm text-muted-foreground">
							Click or Drag here your resume to upload{" "}
						</p>
					</div>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{objects.map((object) => (
						<Card key={object._id} className="flex flex-col">
							<CardHeader>
								<CardTitle>{object.name}</CardTitle>
								<p>{object.size}</p>
							</CardHeader>
							<CardContent>
								<p>{object.timeCreated}</p>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="hover" size="sm">
									Download
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			)}
		</main>
	);
}

export default Resume;
