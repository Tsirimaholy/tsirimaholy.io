import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

const tones = {
	amber: {
		base: "bg-amber-50 text-amber-950",
		border: "border-amber-200",
		accent: "border-amber-400",
	},
	blue: {
		base: "bg-blue-50 text-blue-950",
		border: "border-blue-200",
		accent: "border-primary",
	},
};

export function Callout({
	tone,
	variant = "border",
	icon: Icon,
	className,
	children,
}: {
	tone: keyof typeof tones;
	variant?: "border" | "accent";
	icon?: LucideIcon;
	className?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				"my-8 p-5",
				tones[tone].base,
				variant === "accent" ? "border-l-4" : "border",
				tones[tone][variant],
				Icon && "flex gap-4",
				className,
			)}
		>
			{Icon ? <Icon className="mt-1 size-5 shrink-0" aria-hidden="true" /> : null}
			{children}
		</div>
	);
}
