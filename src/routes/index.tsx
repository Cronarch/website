import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/ui/home/hero";
import Team from "@/components/ui/home/team";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<HeroSection />
			<section className="bg-background @container pt-32">
				<div className="mx-auto">
					<Team />
				</div>
			</section>
		</div>
	);
}
