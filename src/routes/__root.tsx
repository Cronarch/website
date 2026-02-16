import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import appCss from "../styles.css?url";

// Critical CSS inlined to prevent FOUC - ensures base styles apply before external CSS loads
const criticalCss = `:root{--background:oklch(1 0 0);--foreground:oklch(0.141 0.005 285.823);--muted:oklch(0.967 0.001 286.375);--muted-foreground:oklch(0.552 0.016 285.938);--primary:oklch(0.21 0.006 285.885);--primary-foreground:oklch(0.985 0 0);--border:oklch(0.92 0.004 286.32);--radius:0.625rem}html{scroll-behavior:smooth}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:var(--background);color:var(--foreground)}`;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Cronarch LLC",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon-96x96.png",
				sizes: "96x96",
			},
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "shortcut icon", href: "/favicon.ico" },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{ rel: "manifest", href: "/site.webmanifest" },
		],
		styles: [{ children: criticalCss }],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
