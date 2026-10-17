import { Hash } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

export function HeadingSection({ title, to }: { title: string; to: string }) {
	return (
		<h2 className="group w-fit text-3xl font-bold text-gray-950 font-shadow-into-light">
			<Link to={to} className="no-underline">
				{title}{" "}
				<span
					className={cn(
						"group/hash underline text-gray-500 invisible opacity-0 transition-[opacity,visibility,color] duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:opacity-100 hover:text-gray-950",
					)}
				>
					<Hash className="inline-block transition-[stroke-width] group-hover/hash:stroke-[3]" />
				</span>
			</Link>
		</h2>
	);
}
