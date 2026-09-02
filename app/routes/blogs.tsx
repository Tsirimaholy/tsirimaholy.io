import { ArrowRight, BookOpen, Gauge } from "lucide-react";
import { Link } from "react-router";
import { blogPosts } from "~/content/blog-posts";
import { generateMetaTags, SITE_URL } from "~/lib/seo";
import type { Route } from "./+types/blogs";

export function meta(_args: Route.MetaArgs) {
	return generateMetaTags({
		title: "Blog | Tsirimaholy Harison Razanapanala",
		description:
			"Practical engineering notes about Django performance, full-stack development, and shipping reliable products.",
		url: `${SITE_URL}/blog`,
		image: `${SITE_URL}/og-image.jpg`,
		imageAlt: "Tsirimaholy Harison Razanapanala, Full-Stack Developer",
		noIndex: false,
	});
}

export default function Blog() {
	return (
		<main className="min-h-screen bg-white pt-28 text-gray-900">
			<section className="px-4 pb-14 pt-10">
				<div className="container mx-auto max-w-5xl">
					<div className="max-w-3xl">
						<div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10">
							<BookOpen className="size-6 text-primary" aria-hidden="true" />
						</div>
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
							Engineering notes
						</p>
						<h1 className="text-4xl font-bold leading-tight font-shadow-into-light md:text-6xl">
							Lessons learned while building
						</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
							Practical explanations of performance problems, product decisions,
							and the fixes that held up in real applications.
						</p>
					</div>
				</div>
			</section>

			<section aria-label="Articles" className="bg-gray-50 px-4 py-16">
				<div className="container mx-auto max-w-5xl">
					<div className="grid gap-6">
						{blogPosts.map((post) => (
							<article
								key={post.slug}
								className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
							>
								<Link
									to={`/blog/${post.slug}`}
									viewTransition
									className="grid md:grid-cols-[14rem_1fr]"
								>
									<div className="min-h-48 overflow-hidden bg-gray-950">
										<img
											src={post.image}
											alt="Django N+1 query count reduced from 21 to 2"
											width="1200"
											height="630"
											className="h-full min-h-48 w-full object-cover transition duration-500 group-hover:scale-[1.025]"
										/>
									</div>
									<div className="flex flex-col justify-center p-7 md:p-9">
										<div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
											<span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
												{post.category}
											</span>
											<span className="flex items-center gap-1.5 text-gray-500">
												<Gauge className="size-4" aria-hidden="true" />
												{post.readTime}
											</span>
										</div>
										<h2 className="text-2xl font-bold leading-snug transition group-hover:text-primary md:text-3xl">
											{post.title}
										</h2>
										<p className="mt-3 max-w-2xl leading-7 text-gray-600">
											{post.excerpt}
										</p>
										<span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
											Read the article
											<ArrowRight
												className="size-4 transition-transform group-hover:translate-x-1"
												aria-hidden="true"
											/>
										</span>
									</div>
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
