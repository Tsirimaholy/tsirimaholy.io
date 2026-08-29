import {
	BrainCircuit,
	Cloud,
	Layers,
	MonitorSmartphone,
	Server,
} from "lucide-react";
import { motion } from "motion/react";

const categories = [
	{
		number: "01",
		title: "Frontend",
		description: "Interfaces that stay fast and clear on web and mobile.",
		icon: MonitorSmartphone,
		accent: "bg-blue-500",
		iconStyle: "bg-blue-50 text-blue-600 ring-blue-100",
		skills: [
			"React",
			"React Native",
			"TypeScript",
			"Next.js",
			"React Router v7",
			"Tailwind CSS",
			"JavaScript",
		],
	},
	{
		number: "02",
		title: "Backend & Data",
		description:
			"APIs, business logic, queues, and databases built for real workloads.",
		icon: Server,
		accent: "bg-green-500",
		iconStyle: "bg-green-50 text-green-600 ring-green-100",
		skills: [
			"Django",
			"Django REST Framework",
			"Spring Boot",
			"Node.js",
			"PostgreSQL",
			"Redis",
			"Celery",
			"WebSockets",
			"REST APIs",
		],
	},
	{
		number: "03",
		title: "DevOps & Infrastructure",
		description:
			"Repeatable deployments, monitoring, and hands-on production ownership.",
		icon: Cloud,
		accent: "bg-orange-500",
		iconStyle: "bg-orange-50 text-orange-600 ring-orange-100",
		skills: [
			"Docker",
			"AWS",
			"Elastic Beanstalk",
			"CI/CD",
			"GitHub Actions",
			"Linux",
			"Sentry",
			"OVH",
		],
	},
	{
		number: "04",
		title: "Engineering Practices",
		description:
			"Habits that keep delivery fast without leaving a maintenance mess.",
		icon: Layers,
		accent: "bg-purple-500",
		iconStyle: "bg-purple-50 text-purple-600 ring-purple-100",
		skills: [
			"API Design",
			"SQL Optimization",
			"N+1 Profiling",
			"Caching",
			"Testing",
			"Code Reviews",
			"System Design",
			"Documentation",
		],
	},
];

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export function Skills() {
	return (
		<section className="relative bg-white py-24" id="skills">
			<div className="container mx-auto max-w-6xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mx-auto mb-14 max-w-2xl text-center"
					id="skills-expertise"
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sketchy-sm">
						<BrainCircuit className="h-4 w-4 text-primary" />
						Production toolkit
					</div>
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 font-shadow-into-light sm:text-5xl">
						Tools I trust in production
					</h2>
					<p className="mt-4 text-lg leading-relaxed text-gray-600">
						A focused toolkit built through real products in fintech, ERP,
						health tech, and SaaS.
					</p>
				</motion.div>

				<motion.div
					className="grid items-start gap-6 md:grid-cols-2"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.15 }}
					variants={container}
				>
					{categories.map((category) => {
						const Icon = category.icon;
						return (
							<motion.article
								key={category.title}
								variants={item}
								whileHover={{ y: -4 }}
								transition={{ type: "spring", stiffness: 300, damping: 28 }}
								className="group relative self-start overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sketchy-md transition-shadow hover:shadow-sketchy-lg"
							>
								<div
									className={`absolute inset-x-0 top-0 h-1 ${category.accent}`}
								/>
								<div className="flex items-start justify-between gap-4">
									<div className="flex min-w-0 items-start gap-4">
										<div
											className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${category.iconStyle}`}
										>
											<Icon className="h-6 w-6" />
										</div>
										<div className="min-w-0">
											<h3 className="text-xl font-bold text-gray-900">
												{category.title}
											</h3>
											<p className="mt-1 text-sm leading-relaxed text-gray-500">
												{category.description}
											</p>
										</div>
									</div>
									<span className="shrink-0 font-mono text-3xl font-bold text-gray-200">
										{category.number}
									</span>
								</div>

								<div className="mt-6 flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-white"
										>
											<span
												className={`h-1.5 w-1.5 rounded-full ${category.accent}`}
											/>
											{skill}
										</span>
									))}
								</div>
							</motion.article>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
