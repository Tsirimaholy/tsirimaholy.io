import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

/**
 * Where a section counts as "current", measured from the top of the viewport.
 * Matches the `scroll-mt-28` offset the headings anchor to, plus a little slack
 * so the highlight lands as soon as the heading settles below the site header.
 */
const READING_LINE_PX = 150;

export function TableOfContents({
	items,
}: {
	items: readonly { id: string; title: string }[];
}) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const sections = items
			.map(({ id }) => document.getElementById(id))
			.filter((section) => section !== null);

		if (sections.length === 0) return;

		let frame = 0;
		const updateActiveSection = () => {
			frame = 0;
			// The current section is the last one whose heading has crossed the
			// reading line; before the first one does, nothing is highlighted.
			let current: string | null = null;
			for (const section of sections) {
				if (section.getBoundingClientRect().top <= READING_LINE_PX) {
					current = section.id;
				}
			}
			setActiveId(current);
		};
		const scheduleUpdate = () => {
			if (frame === 0) frame = requestAnimationFrame(updateActiveSection);
		};

		updateActiveSection();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate);
		return () => {
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
			if (frame !== 0) cancelAnimationFrame(frame);
		};
	}, [items]);

	return (
		<aside className="hidden lg:block">
			<nav
				aria-label="Table of contents"
				className="sticky top-28 pl-5 pt-5 border-1 border-gray-200 pb-5 bg-white"
			>
				<p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
					In this article
				</p>
				<ul className="space-y-3 text-sm text-gray-600">
					{items.map(({ id, title }) => {
						const isActive = id === activeId;
						return (
							<li key={id} className="relative">
								{isActive && (
									<span
										aria-hidden="true"
										className="absolute -left-5 top-1/2 h-3 w-1 -translate-y-1/2 bg-primary"
									/>
								)}
								<a
									href={`#${id}`}
									aria-current={isActive ? "location" : undefined}
									className={cn(
										"article-link transition-colors hover:text-primary",
										isActive &&
											"font-semibold text-primary decoration-2 underline-offset-4",
									)}
								>
									{title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
