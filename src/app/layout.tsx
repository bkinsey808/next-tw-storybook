import "@/styles/globals.css";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html data-theme="light">
			<head>
				<title>next-daisy-experiment</title>
			</head>
			<body>{children}</body>
		</html>
	);
}
