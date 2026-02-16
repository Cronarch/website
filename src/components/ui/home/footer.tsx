import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
	{ label: "About", href: "#" },
	{ label: "Contact", href: "mailto:caleb@cronarch.com", mailto: true },
];

const social = [
	{ icon: Github, href: "https://github.com/cronarch", label: "GitHub" },
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/company/cronarch",
		label: "LinkedIn",
	},
];

export default function Footer() {
	return (
		<footer className="bg-background border-t py-12">
			<div className="mx-auto max-w-2xl px-6">
				<div className="flex flex-col items-center gap-8 text-center">
					<div className="flex w-full justify-center">
						<Link to="/" href="/" className="inline-flex items-center gap-2">
							<Logo className="h-6" />
						</Link>
					</div>
					<nav className="flex w-full flex-wrap justify-center gap-x-8 gap-y-2">
						{links.map((link) =>
							link.mailto ? (
								<a
									key={link.label}
									href={link.href}
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
								>
									{link.label}
								</a>
							) : (
								<Link
									to={link.href}
									key={link.label}
									href={link.href}
									className="text-muted-foreground hover:text-foreground text-sm transition-colors"
								>
									{link.label}
								</Link>
							),
						)}
					</nav>
					<div className="flex w-full justify-center gap-6">
						{social.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground flex size-10 shrink-0 items-center justify-center rounded-full transition-colors"
								aria-label={item.label}
							>
								<item.icon className="size-5 shrink-0" />
							</a>
						))}
					</div>
					<p className="text-muted-foreground w-full text-sm">
						&copy; {2026} Cronarch.
					</p>
				</div>
			</div>
		</footer>
	);
}
