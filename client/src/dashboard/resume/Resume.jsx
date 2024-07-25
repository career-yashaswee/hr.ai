import { useDropzone } from "react-dropzone";

function Resume() {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			"application/pdf": [".pdf"],
		},
	});

	const files = acceptedFiles.map((file) => console.log(file.path));

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div className="flex items-center">
				<h1 className="text-lg font-bold md:text-2xl">Resume</h1>
			</div>

			<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm gap-1 text-center pb-8 pt-8">
				<div {...getRootProps({ className: "dropzone" })}>
					<input {...getInputProps()} />
					<p className="text-sm text-muted-foreground">
						Click or Drag here your resume to upload{" "}
					</p>
				</div>
			</div>
		</main>
	);
}

export default Resume;
