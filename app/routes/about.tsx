import {
	ArrowRight,
	BookOpen,
	Code2,
	ExternalLink,
	GraduationCap,
	Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { generateMetaTags, SITE_URL } from "~/lib/seo";
import type { Route } from "./+types/about";

export function meta(_args: Route.MetaArgs) {
	return generateMetaTags({
		title: "About Tsirimaholy | Full-Stack Developer",
		description:
			"Read how curiosity, self-teaching, and resilience led Tsirimaholy from discovering code at 13 to building web and mobile products professionally.",
		url: `${SITE_URL}/about`,
		image: `${SITE_URL}/og-image.jpg`,
		imageAlt: "Tsirimaholy Harison Razanapanala, Full-Stack Developer",
	});
}

const chapters = [
	{
		icon: Code2,
		period: "2015",
		title: "The moment technology became more than devices",
		paragraphs: [
			{
				id: "discovering-technology",
				content:
					"At 13, I thought working in technology mostly meant fixing phones and rebooting Wi-Fi. Then someone introduced me to cybersecurity, artificial intelligence, and Android development. For the first time, I understood that technology was a way to create, not just repair.",
			},
			{
				id: "first-programs",
				content:
					"I asked to learn how Android apps were made. That simple question began a much longer journey. Every step, from my first “Hello, World!” to my first command-line application, felt like discovering a new place.",
			},
			{
				id: "online-teachers",
				content:
					"Online teachers such as Code with Mosh later showed me that software could be more than functional. It could also be clean, maintainable, and built thoughtfully for the people who would work with it next.",
			},
		],
	},
	{
		icon: GraduationCap,
		period: "2021–2024",
		title: "Finding another route to university",
		paragraphs: [
			{
				id: "university-setback",
				content:
					"After high school, I passed the entrance exam for an IT-focused university, but my family could not afford the tuition at the time. I was disappointed, but I kept learning independently and explored freelancing and indie product development.",
			},
			{
				id: "joining-hei",
				content: (
					<>
						About six months later, I discovered{" "}
						<a
							href="https://hei.school/"
							target="_blank"
							rel="noreferrer"
							className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
						>
							HEI (Haute École d’Informatique)
							<ExternalLink
								className="ml-1 inline size-4"
								aria-label="Official HEI university website"
							/>
						</a>
						, a university in Madagascar. I applied, was accepted, and found
						the environment where I could strengthen my full-stack skills.
						Within nine months, I landed my first professional role as a React
						Native developer.
					</>
				),
			},
			{
				id: "lessons-from-the-journey",
				content:
					"That part of my journey taught me that progress does not always follow the route you planned. It gave me resilience, humility, and gratitude, qualities that still shape how I approach difficult engineering problems and collaborative work.",
			},
		],
	},
	{
		icon: Sparkles,
		period: "Today",
		title: "Turning ideas into dependable products",
		paragraphs: [
			{
				id: "building-products",
				content:
					"Today, I work across frontend, backend, mobile, and cloud technologies. I enjoy taking an idea from an early conversation to a product people can rely on, whether that means launching an MVP, improving performance, or making an existing system easier to maintain.",
			},
			{
				id: "lasting-curiosity",
				content:
					"I am still driven by the same curiosity that made me ask how an Android app was built. The tools have changed, and the problems are larger, but learning and building remain the most rewarding parts of the work.",
			},
		],
	},
];

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-white pt-28 text-gray-900">
			<section className="px-4 pb-16 pt-10">
				<div className="container mx-auto max-w-4xl text-center">
					<div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10">
						<BookOpen className="size-6 text-primary" aria-hidden="true" />
					</div>
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
						My story
					</p>
					<h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight font-shadow-into-light md:text-6xl">
						A long way into the ocean of coding
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
						My path into software was not a straight line. It was built through
						curiosity, unexpected setbacks, generous teachers, and the decision
						to keep learning.
					</p>
					<img
						src="/path-to-there.svg"
						alt=""
						width="850"
						height="482"
						className="mx-auto mt-10 w-full max-w-2xl rounded-xl border-2 shadow-lg"
					/>
				</div>
			</section>

			<section aria-label="My journey" className="bg-gray-50 px-4 py-20">
				<div className="container mx-auto max-w-3xl">
					<div className="space-y-16">
						{chapters.map((chapter) => {
							const Icon = chapter.icon;
							return (
								<article
									key={chapter.period}
									className="relative border-l-2 border-primary/20 pl-8 md:pl-12"
								>
									<div className="absolute -left-6 top-0 flex size-12 items-center justify-center rounded-full border-4 border-gray-50 bg-primary text-white">
										<Icon className="size-5" aria-hidden="true" />
									</div>
									<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
										{chapter.period}
									</p>
									<h2 className="mb-6 text-2xl font-bold font-shadow-into-light md:text-3xl">
										{chapter.title}
									</h2>
									<div className="space-y-5 text-lg leading-8 text-gray-700">
										{chapter.paragraphs.map((paragraph) => (
											<p key={paragraph.id}>{paragraph.content}</p>
										))}
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="px-4 py-20 text-center">
				<div className="container mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold font-shadow-into-light">
						Let’s build something useful together
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Have a product idea, an engineering challenge, or a team that needs
						an experienced full-stack developer?
					</p>
					<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link to="/#contact">
								Start a project
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link to="/#projects">See my projects</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
