import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
	{ label: "About", href: "#" },
	{ label: "Contact", href: "#" },
];

const social = [
	{ icon: Github, href: "https://github.com/cronarch", label: "GitHub" },
	{ icon: Linkedin, href: "https://www.linkedin.com/company/cronarch", label: "LinkedIn" },
];

export default function Footer() {
	return (
		<footer className="bg-background @container border-t py-12">
			<div className="mx-auto max-w-2xl px-6">
				<div className="flex flex-col items-center text-center">
					<div className="flex w-full justify-center">
						<Link to="/" href="/" className="flex items-center gap-2">
							<Logo className="h-5" />
						</Link>
					</div>
					<nav className="mt-8 flex w-full flex-wrap justify-center gap-x-6 gap-y-2">
						{links.map((link) => (
							<Link
								to={link.href}
								key={link.label}
								href={link.href}
								className="text-muted-foreground hover:text-foreground text-sm transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="mt-8 flex w-full justify-center gap-4">
						{social.map((item) => (
							<Link
								to={item.href}
								key={item.label}
								href={item.href}
								className="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center rounded-full transition-colors"
								aria-label={item.label}
							>
								<item.icon className="size-4" />
							</Link>
						))}
					</div>
					<p className="text-muted-foreground mt-8 w-full text-center text-sm">
						&copy; {2026} Cronarch.
					</p>
				</div>
			</div>
		</footer>
	);
}
