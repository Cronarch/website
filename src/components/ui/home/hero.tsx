import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";

export default function HeroSection() {
	return (
		<>
			<HeroHeader />
			<main className="overflow-hidden">
				<section className="bg-background">
					<div className="relative py-32">
						<div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% aspect-2/3 lg:aspect-9/4 absolute inset-0 md:aspect-square dark:opacity-5">
							<img
								src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="hero background"
								width={2268}
								height={1740}
								className="h-full w-full object-cover object-top"
							/>
						</div>
						<div className="relative z-10 mx-auto w-full max-w-5xl px-6">
							<div
								aria-hidden
								className="perspective-near mask-radial-at-left mask-radial-from-65% mask-radial-to-90% mask-radial-[75%_100%] min-w-2xl mb-6 ml-auto max-w-3xl scale-90 py-12 pl-6 sm:mb-12 md:pl-12 lg:mb-20"
							>
								<div className="mask-radial-from-35% aspect-3/2 mask-radial-to-75% pointer-events-none relative mx-auto max-w-xl opacity-75 mix-blend-darken">
									<div className="bg-background absolute inset-0 mix-blend-overlay"></div>
									<img
										src="https://images.unsplash.com/photo-1634595947394-87012e7b12ba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="watch in dark"
										className="not-dark:invert dark:mix-blend-lighten"
										width={1340}
										height={560}
									/>
								</div>
							</div>
							<div className="mx-auto max-w-md text-center">
								<h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
									Need a website?
								</h1>
								<p className="text-muted-foreground mt-4 text-balance whitespace-nowrap">
									We've got your back. <br /> We'll build a website for you, and
									you'll love it.
								</p>

								<Button asChild className="mt-6 pr-1.5">
									<a href="mailto:caleb@cronarch.com">
										<span className="text-nowrap">Contact Us</span>
										<ChevronRight className="opacity-50" />
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
