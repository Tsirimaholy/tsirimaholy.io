import {
	BrainCircuit,
	Cloud,
	Layers,
	MonitorSmartphone,
	Server,
} from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
	return (
		<section className="relative py-16" id="skills">
			<div className="container mx-auto max-w-5xl px-6">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<div
						className="flex items-center justify-center mb-4"
						id="skills-expertise"
					>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, type: "spring" }}
							className="p-3 bg-gray-200 rounded-full sketchy-border-sm"
						>
							<BrainCircuit className="h-7 w-7 text-gray-700" />
						</motion.div>
					</div>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 font-shadow-into-light">
						Skills & Expertise
					</h2>
					<p className="text-gray-600 mt-2">
						A comprehensive overview of my technical abilities and proficiency
						across different domains.
					</p>
				</motion.div>

				{/* Skill Categories */}
				<div className="grid gap-8 md:grid-cols-2">
					{/* Frontend */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="p-6 rounded-lg border-2 border-dashed border-blue-400 bg-white shadow-sketchy-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="p-3 rounded-full bg-blue-200 border-2 border-dashed border-blue-400">
								<MonitorSmartphone className="h-8 w-8 text-blue-600" />
							</div>
							<h3
								className="text-xl font-semibold text-blue-800"
								style={{ fontFamily: "'Shadows Into Light', cursive" }}
							>
								Frontend
							</h3>
						</div>
						<p
							className="text-sm text-blue-700 mb-4"
						>
							Creating responsive and interactive user interfaces.
						</p>
						<div className="flex flex-wrap gap-3">
							{[
								"React",
								"React Native",
								"TypeScript",
								"Next.js",
								"Remix(rrv7)",
								"Tailwind CSS",
								"CSS3",
								"JavaScript",
							].map((skill) => (
								<span
									key={skill}
									className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border-2 border-dashed border-blue-200 rounded-lg hover:shadow-md transition-shadow shadow-sketchy-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>

					{/* Backend */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="p-6 rounded-lg border-2 border-dashed border-green-400 bg-white shadow-sketchy-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="p-3 rounded-full bg-green-200 border-2 border-dashed border-green-400">
								<Server className="h-8 w-8 text-green-600" />
							</div>
							<h3
								className="text-xl font-semibold text-green-800"
								style={{ fontFamily: "'Shadows Into Light', cursive" }}
							>
								Backend
							</h3>
						</div>
						<p
							className="text-sm text-green-700 mb-4"
						>
							Building robust server-side applications and APIs.
						</p>
						<div className="flex flex-wrap gap-3">
							{[
								"Django",
								"Spring Boot",
								"Python - DRF",
								"Node.js",
								"Express",
								"PostgreSQL",
								"MySQL",
								"Prisma",
								"REST APIs",
							].map((skill) => (
								<span
									key={skill}
									className="px-4 py-2 text-sm font-medium text-green-800 bg-white border-2 border-dashed border-green-200 rounded-lg hover:shadow-md transition-shadow shadow-sketchy-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>

					{/* DevOps & Infrastructure */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="p-6 rounded-lg border-2 border-dashed border-orange-400 bg-white shadow-sketchy-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="p-3 rounded-full bg-orange-200 border-2 border-dashed border-orange-400">
								<Cloud className="h-8 w-8 text-orange-600" />
							</div>
							<h3
								className="text-xl font-semibold text-orange-800 font-shadow-into-light"
							>
								DevOps & Infrastructure
							</h3>
						</div>
						<p
							className="text-sm text-orange-700 mb-4"
						>
							Deployment, automation, and infrastructure management.
						</p>
						<div className="flex flex-wrap gap-3">
							{[
								"Git",
								"Docker",
								"AWS",
								"Linux",
								"CI/CD Pipelines",
								"Shell Scripting",
							].map((skill) => (
								<span
									key={skill}
									className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border-2 border-dashed border-orange-200 rounded-lg hover:shadow-md transition-shadow shadow-sketchy-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>

					{/* Development Practices */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="p-6 rounded-lg border-2 border-dashed border-purple-400 bg-white shadow-sketchy-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="p-3 rounded-full bg-purple-200 border-2 border-dashed border-purple-400">
								<Layers className="h-8 w-8 text-purple-600" />
							</div>
							<h3
								className="text-xl font-semibold text-purple-800"
								style={{ fontFamily: "'Shadows Into Light', cursive" }}
							>
								Development Practices
							</h3>
						</div>
						<p
							className="text-sm text-purple-700 mb-4"
						>
							Methodologies, practices, and approaches to software development.
						</p>
						<div className="flex flex-wrap gap-3">
							{[
								"Agile/Scrum",
								"Test-Driven Development",
								"Code Reviews",
								"API Design",
								"System Design",
								"Documentation",
								"Pair Programming",
							].map((practice) => (
								<span
									key={practice}
									className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border-2 border-dashed border-purple-200 rounded-lg hover:shadow-md transition-shadow shadow-sketchy-sm"
								>
									{practice}
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
