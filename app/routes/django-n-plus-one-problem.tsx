import {
	ArrowLeft,
	ArrowRight,
	Check,
	CircleAlert,
	Database,
	Gauge,
	Lightbulb,
} from "lucide-react";
import { Link } from "react-router";
import { blogPosts } from "~/content/blog-posts";
import {
	generateArticleStructuredData,
	generateBreadcrumbStructuredData,
	generateMetaTags,
	SITE_URL,
} from "~/lib/seo";
import type { Route } from "./+types/django-n-plus-one-problem";

const post = blogPosts[0];
const articleUrl = `${SITE_URL}/blog/${post.slug}`;

export function meta(_args: Route.MetaArgs) {
	return [
		...generateMetaTags({
			title: `${post.title} | Tsirimaholy`,
			description: post.excerpt,
			url: articleUrl,
			image: `${SITE_URL}/og-image.jpg`,
			imageAlt: "Django N+1 queries reduced from 21 to 2",
			type: "article",
			author: "Tsirimaholy Harison Razanapanala",
			keywords: [
				"Django N+1 problem",
				"select_related",
				"prefetch_related",
				"Django ORM performance",
				"database optimization",
			],
		}),
		generateArticleStructuredData({
			headline: post.title,
			description: post.excerpt,
			image: `${SITE_URL}/og-image.jpg`,
			datePublished: "2026-08-31",
			author: {
				"@type": "Person",
				name: "Tsirimaholy Harison Razanapanala",
				url: SITE_URL,
			},
			publisher: {
				"@type": "Organization",
				name: "Tsirimaholy",
			},
			url: articleUrl,
		}),
		generateBreadcrumbStructuredData([
			{ name: "Home", url: SITE_URL },
			{ name: "Blog", url: `${SITE_URL}/blog` },
			{ name: post.title, url: articleUrl },
		]),
	];
}

function CodeBlock({ label, children }: { label: string; children: string }) {
	return (
		<div className="my-7 overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-lg">
			<div className="border-b border-gray-800 px-5 py-3 font-mono text-xs text-gray-400">
				{label}
			</div>
			<pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-100">
				<code>{children}</code>
			</pre>
		</div>
	);
}

export default function DjangoNPlusOneArticle() {
	return (
		<main className="min-h-screen bg-white pt-24 text-gray-900">
			<article>
				<header className="border-b border-gray-200 px-4 pb-14 pt-14">
					<div className="container mx-auto max-w-4xl">
						<Link
							to="/blog"
							className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-primary"
						>
							<ArrowLeft className="size-4" aria-hidden="true" />
							All articles
						</Link>
						<div className="flex flex-wrap items-center gap-3 text-sm">
							<span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
								{post.category}
							</span>
							<span className="flex items-center gap-1.5 text-gray-500">
								<Gauge className="size-4" aria-hidden="true" />
								{post.readTime}
							</span>
							<span className="text-gray-300" aria-hidden="true">
								•
							</span>
							<span className="text-gray-500">Real-world case study</span>
						</div>
						<h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight font-shadow-into-light md:text-6xl">
							The Django N+1 Problem: From 21 Queries to 2
						</h1>
						<p className="mt-6 max-w-3xl text-xl leading-8 text-gray-600">
							An innocent loop can quietly turn one database query into
							hundreds. Here is how to recognize that pattern, fix it with
							Django’s ORM, and keep it from returning.
						</p>
						<div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
							<div className="flex size-11 items-center justify-center rounded-full bg-gray-950 font-bold text-white">
								TR
							</div>
							<div>
								<p className="font-semibold">
									Tsirimaholy Harison Razanapanala
								</p>
								<p className="text-sm text-gray-500">Full-Stack Developer</p>
							</div>
						</div>
					</div>
				</header>

				<div className="px-4 py-14">
					<div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[14rem_minmax(0,48rem)] lg:justify-center">
						<aside className="hidden lg:block">
							<nav
								aria-label="Table of contents"
								className="sticky top-28 border-l-2 border-gray-200 pl-5"
							>
								<p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
									In this article
								</p>
								<ul className="space-y-3 text-sm text-gray-600">
									<li>
										<a
											className="hover:text-primary"
											href="#what-is-n-plus-one"
										>
											What N+1 means
										</a>
									</li>
									<li>
										<a className="hover:text-primary" href="#real-example">
											The 21-query example
										</a>
									</li>
									<li>
										<a className="hover:text-primary" href="#the-fix">
											The two-query fix
										</a>
									</li>
									<li>
										<a className="hover:text-primary" href="#choose-the-tool">
											Which tool to choose
										</a>
									</li>
									<li>
										<a
											className="hover:text-primary"
											href="#detect-and-prevent"
										>
											Detect and prevent it
										</a>
									</li>
								</ul>
							</nav>
						</aside>

						<div className="min-w-0 text-lg leading-8 text-gray-700">
							<section id="what-is-n-plus-one" className="scroll-mt-28">
								<p className="text-xl leading-9 text-gray-800">
									The N+1 problem happens when an application runs one query to
									load a collection, then runs another query for every item in
									that collection to load related data.
								</p>
								<div className="my-8 rounded-xl border-l-4 border-primary bg-blue-50 p-5 text-blue-950">
									<p className="font-semibold">The context</p>
									<p className="mt-2 text-base leading-7">
										Imagine a{" "}
										<code className="rounded bg-white px-1.5 py-0.5 text-sm">
											GET /api/users
										</code>{" "}
										endpoint that returns a directory. Each row needs the user’s
										name, profile details, and assigned roles. Django first
										loads the users, but the serializer then discovers that it
										also needs two relationships for every row.
									</p>
								</div>

								<div className="my-10 grid gap-4 sm:grid-cols-3">
									<div className="rounded-xl border border-gray-200 p-5">
										<p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
											Initial query
										</p>
										<p className="mt-2 text-4xl font-bold text-gray-950">1</p>
										<p className="mt-1 text-sm text-gray-500">Load all users</p>
									</div>
									<div className="rounded-xl border border-red-200 bg-red-50 p-5">
										<p className="text-sm font-semibold uppercase tracking-wider text-red-700">
											Related queries
										</p>
										<p className="mt-2 text-4xl font-bold text-red-900">
											N × 2
										</p>
										<p className="mt-1 text-sm text-red-700">
											Profile and roles per user
										</p>
									</div>
									<div className="rounded-xl border border-gray-900 bg-gray-950 p-5 text-white">
										<p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
											For 10 users
										</p>
										<p className="mt-2 text-4xl font-bold text-yellow-300">
											21
										</p>
										<p className="mt-1 text-sm text-gray-400">Total queries</p>
									</div>
								</div>

								<p>
									Django relationships are lazy by default. This is useful: the
									ORM does not fetch data that you may never use. The surprise
									comes when a template, serializer, or loop accesses a related
									field and triggers hidden database work for every object.
								</p>
							</section>

							<section id="real-example" className="scroll-mt-28 pt-12">
								<h2 className="text-3xl font-bold text-gray-950 font-shadow-into-light">
									A real example: users, profiles, and roles
								</h2>
								<p className="mt-5">
									In a user-management API, each user had one profile and could
									have multiple roles. This was the relationship being loaded:
								</p>
								<figure
									aria-labelledby="relationship-schema-caption"
									className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-8"
								>
									<figcaption
										id="relationship-schema-caption"
										className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-500"
									>
										Simplified data model
									</figcaption>
									<div className="mx-auto max-w-lg">
										<div className="mx-auto w-48 rounded-xl border-2 border-gray-950 bg-gray-950 p-4 text-center text-white shadow-md">
											<Database
												className="mx-auto mb-2 size-5 text-blue-400"
												aria-hidden="true"
											/>
											<p className="font-mono text-base font-bold">User</p>
											<p className="mt-1 text-xs text-gray-400">
												id · name · email
											</p>
										</div>
										<div
											className="mx-auto h-7 w-px bg-gray-400"
											aria-hidden="true"
										/>
										<div
											className="mx-auto h-px w-1/2 bg-gray-400"
											aria-hidden="true"
										/>
										<div className="grid grid-cols-2 gap-4">
											<div className="relative pt-7">
												<div
													className="absolute left-1/2 top-0 h-7 w-px bg-gray-400"
													aria-hidden="true"
												/>
												<div className="h-full rounded-xl border-2 border-blue-200 bg-white p-4 text-center">
													<span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
														1 : 1
													</span>
													<p className="mt-2 font-mono text-sm font-bold text-gray-950 md:text-base">
														UserProfile
													</p>
													<p className="mt-1 text-xs text-gray-500">
														phone · address
													</p>
												</div>
											</div>
											<div className="relative pt-7">
												<div
													className="absolute left-1/2 top-0 h-7 w-px bg-gray-400"
													aria-hidden="true"
												/>
												<div className="h-full rounded-xl border-2 border-amber-200 bg-white p-4 text-center">
													<span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
														1 : many
													</span>
													<p className="mt-2 font-mono text-sm font-bold text-gray-950 md:text-base">
														Role
													</p>
													<p className="mt-1 text-xs text-gray-500">
														name · permissions
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="mt-7 flex flex-wrap items-center justify-center gap-2 border-t border-gray-200 pt-5 font-mono text-xs text-gray-600 md:text-sm">
										<span className="rounded bg-white px-2 py-1 shadow-sm">
											1 query: users
										</span>
										<span aria-hidden="true">+</span>
										<span className="rounded bg-red-50 px-2 py-1 text-red-700 shadow-sm">
											N queries: profiles
										</span>
										<span aria-hidden="true">+</span>
										<span className="rounded bg-red-50 px-2 py-1 text-red-700 shadow-sm">
											N queries: roles
										</span>
									</div>
								</figure>
								<p>The straightforward code looked harmless:</p>
								<CodeBlock label="views.py — before optimization">{`users = User.objects.all()

for user in users:
    profile = user.userprofile
    roles = user.role_set.all()`}</CodeBlock>
								<p>
									The first line executes one query for the users. Accessing{" "}
									<code className="rounded bg-gray-100 px-1.5 py-0.5 text-base text-gray-900">
										user.userprofile
									</code>{" "}
									adds one query per user, and calling{" "}
									<code className="rounded bg-gray-100 px-1.5 py-0.5 text-base text-gray-900">
										user.role_set.all()
									</code>{" "}
									adds another.
								</p>
								<CodeBlock label="SQL — repeated for every user">{`SELECT * FROM auth_user;

SELECT * FROM userprofile
WHERE userprofile.user_id = <user_id>;

SELECT * FROM role
WHERE role.user_id = <user_id>;`}</CodeBlock>
								<div className="my-8 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
									<CircleAlert
										className="mt-1 size-5 shrink-0"
										aria-hidden="true"
									/>
									<p>
										The query count grows with the result size. Ten users
										produce 21 queries; 100 users produce 201. This is why the
										endpoint can look fast in development and degrade sharply
										with production data.
									</p>
								</div>
							</section>

							<section id="the-fix" className="scroll-mt-28 pt-12">
								<h2 className="text-3xl font-bold text-gray-950 font-shadow-into-light">
									The fix: load the data intentionally
								</h2>
								<p className="mt-5">
									The solution is eager loading, but each relationship needs the
									right strategy:
								</p>
								<CodeBlock label="views.py — optimized queryset">{`users = (
    User.objects
    .select_related("userprofile")
    .prefetch_related("role_set")
)

for user in users:
    profile = user.userprofile
    roles = user.role_set.all()`}</CodeBlock>
								<div className="my-10 overflow-hidden rounded-2xl bg-gray-950 p-7 text-white md:p-9">
									<div className="flex items-center gap-3">
										<Database
											className="size-7 text-blue-400"
											aria-hidden="true"
										/>
										<p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
											Result
										</p>
									</div>
									<div className="mt-6 flex items-end gap-5">
										<span className="text-5xl font-bold text-gray-500 line-through decoration-red-400">
											21
										</span>
										<ArrowRight
											className="mb-2 size-7 text-gray-500"
											aria-hidden="true"
										/>
										<span className="text-7xl font-bold text-yellow-300">
											2
										</span>
										<span className="mb-2 text-gray-400">queries</span>
									</div>
									<p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
										One joined query loads users and profiles. One additional
										query loads every role needed for those users, and Django
										joins the results in Python.
									</p>
								</div>
							</section>

							<section id="choose-the-tool" className="scroll-mt-28 pt-12">
								<h2 className="text-3xl font-bold text-gray-950 font-shadow-into-light">
									`select_related` or `prefetch_related`?
								</h2>
								<div className="mt-7 overflow-x-auto rounded-xl border border-gray-200">
									<table className="w-full min-w-[38rem] text-left text-base">
										<thead className="bg-gray-50 text-gray-950">
											<tr>
												<th className="p-4 font-semibold">Method</th>
												<th className="p-4 font-semibold">Best for</th>
												<th className="p-4 font-semibold">How it works</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200">
											<tr>
												<td className="p-4 font-mono text-sm text-blue-700">
													select_related
												</td>
												<td className="p-4">ForeignKey and OneToOneField</td>
												<td className="p-4">A SQL JOIN in one query</td>
											</tr>
											<tr>
												<td className="p-4 font-mono text-sm text-blue-700">
													prefetch_related
												</td>
												<td className="p-4">
													ManyToMany and reverse relationships
												</td>
												<td className="p-4">
													A second query, combined in Python
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<p className="mt-6">
									More eager loading is not automatically better. Large joins
									can duplicate rows, and prefetching unused relationships costs
									memory and network bandwidth. Start from what the endpoint
									actually reads, then fetch that graph deliberately.
								</p>
								<div className="my-8 flex gap-4 rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
									<Lightbulb
										className="mt-1 size-5 shrink-0"
										aria-hidden="true"
									/>
									<p>
										GraphQL does not remove N+1 by itself. A GraphQL resolver
										can create the same pattern unless the server batches and
										caches loads with a tool such as DataLoader.
									</p>
								</div>
							</section>

							<section id="detect-and-prevent" className="scroll-mt-28 pt-12">
								<h2 className="text-3xl font-bold text-gray-950 font-shadow-into-light">
									How to detect it before production
								</h2>
								<ul className="mt-7 space-y-4">
									{[
										"Inspect requests with Django Debug Toolbar during development.",
										"Look for the same SQL statement repeated with only an ID changing.",
										"Use assertNumQueries in tests so query count does not grow with fixture size.",
										"Measure with realistic data; five local rows can hide a scaling problem.",
										"Review serializers and templates, where relationship access is easy to overlook.",
									].map((item) => (
										<li key={item} className="flex gap-3">
											<span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
												<Check className="size-3.5" aria-hidden="true" />
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
								<CodeBlock label="tests.py — protect the query budget">{`def test_user_list_query_count(self):
    UserFactory.create_batch(10)

    with self.assertNumQueries(2):
        response = self.client.get("/api/users/")

    self.assertEqual(response.status_code, 200)`}</CodeBlock>
							</section>

							<section className="mt-14 rounded-2xl border-2 border-gray-900 p-7 shadow-[5px_5px_0_#111827] md:p-9">
								<p className="text-sm font-bold uppercase tracking-widest text-primary">
									The takeaway
								</p>
								<h2 className="mt-3 text-3xl font-bold text-gray-950 font-shadow-into-light">
									Query count should follow the shape of the request, not the
									number of rows.
								</h2>
								<p className="mt-5">
									The ORM is not the enemy; invisible I/O is. Once you make the
									data-loading plan explicit and protect it with a query-count
									test, Django gives you both readable code and predictable
									performance.
								</p>
							</section>

							<div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
								<Link
									to="/blog"
									className="inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-primary"
								>
									<ArrowLeft className="size-4" aria-hidden="true" />
									Back to all articles
								</Link>
								<Link
									to="/#contact"
									className="inline-flex items-center gap-2 font-semibold text-primary"
								>
									Discuss a performance problem
									<ArrowRight className="size-4" aria-hidden="true" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</article>
		</main>
	);
}
