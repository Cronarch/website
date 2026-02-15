import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
	return (
		<img
			src="/cronarch-black-transparent-long.svg"
			alt="Cronarch"
			className={cn("h-8 w-auto", className)}
		/>
	);
};

export const LogoIcon = ({ className }: { className?: string }) => {
	return (
		<img
			src="/cronarch-badge-black.svg"
			alt="Cronarch"
			className={cn("h-8 w-auto", className)}
		/>
	);
};
