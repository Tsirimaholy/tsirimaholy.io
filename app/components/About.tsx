import {
	ArrowRight,
	BriefcaseBusiness,
	Code2,
	ExternalLink,
	GraduationCap,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const milestones = [
	{
		icon: Code2,
		title: "A curious beginning",
		description:
			"I started exploring code at 13, when a glimpse of cybersecurity, AI, and Android development changed how I saw technology.",
	},
	{
		icon: GraduationCap,
		title: "Learning through adversity",
		description: (
			<>
				After a difficult path to higher education, I enrolled at{" "}
				<a
					href="https://hei.school/"
					target="_blank"
					rel="noreferrer"
					className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
				>
					HEI
					<ExternalLink
						className="ml-1 inline size-3.5"
						aria-label="Official HEI university website"
					/>
				</a>
				, a university where I turned years of self-teaching into strong
				full-stack foundations.
			</>
		),
	},
	{
		icon: BriefcaseBusiness,
		title: "Building for real people",
		description:
			"Today, I build dependable web and mobile products with React, Django, Spring Boot, and cloud technologies.",
	},
];

export function About() {
	return (
		<section id="about" className="relative bg-white py-24">
			<div className="container mx-auto max-w-5xl px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
						About me
					</p>
					<h2 className="mb-5 text-3xl font-bold text-gray-900 font-shadow-into-light md:text-4xl">
						Curiosity started the journey. Resilience shaped it.
					</h2>
					<p className="text-lg leading-relaxed text-gray-600">
						I’m Tsirimaholy, a full-stack developer from Madagascar. I help
						startups turn ideas into scalable products using React on the
						frontend and Django or Spring Boot on the backend.
					</p>
				</motion.div>

				<motion.img
					src="/path-to-there.svg"
					alt=""
					loading="lazy"
					decoding="async"
					width="850"
					height="482"
					className="mx-auto my-10 w-full max-w-xl rounded-lg border-2 shadow-lg"
					initial={{ opacity: 0, y: 40, rotate: -3, scale: 0.9 }}
					whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{ type: "spring", damping: 12, stiffness: 90 }}
				/>

				<div className="grid gap-5 md:grid-cols-3">
					{milestones.map((milestone, index) => {
						const Icon = milestone.icon;
						return (
							<motion.article
								key={milestone.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="rounded-xl border border-gray-200 bg-gray-50 p-6"
							>
								<div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10">
									<Icon className="size-5 text-primary" aria-hidden="true" />
								</div>
								<h3 className="mb-2 text-lg font-semibold text-gray-900">
									{milestone.title}
								</h3>
								<p className="leading-relaxed text-gray-600">
									{milestone.description}
								</p>
							</motion.article>
						);
					})}
				</div>

				<div className="mt-10 text-center">
					<Button asChild size="lg">
						<Link to="/about" viewTransition>
							Read my full story
							<ArrowRight className="size-4" aria-hidden="true" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
