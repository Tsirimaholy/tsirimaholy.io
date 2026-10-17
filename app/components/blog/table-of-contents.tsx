export function TableOfContents({
	items,
}: {
	items: readonly { id: string; title: string }[];
}) {
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
					{items.map(({ id, title }) => (
						<li key={id}>
							<a className="article-link hover:text-primary" href={`#${id}`}>
								{title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
