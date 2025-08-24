import { useState, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export function Projects() {
	const [filter, setFilter] = useState("All");
	const [selected, setSelected] = useState<any | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	// Categories for filtering
	const categories = [
		"All",
		"TypeScript",
		"React",
		"Python",
		"Django",
		"PostgreSQL",
		"Tailwind CSS",
		"Machine Learning",
		"Docker",
		"Prisma",
	];

	// Projects data
	const projects: TProject[] = [
		{
			id: 2,
			title: "I-Kaly",
			description:
				"Application for managing restaurant and orders for each customers",
			image: "/i-kaly/login.png",
			tags: ["react", "spring boot", "bootstrap", "openapi"],
			liveUrl: "",
			githubUrl: "",
			detailedDescription:
				"This was one my our first application built during a hackathon that is used to manage a restaurant, manage orders, menues, etc",
			features: ["Menues creation", "Order system"],
			challenges: [],
		},
		{
			id: 1,
			title: "KIS",
			description:
				"ERP and Intranet solution used to manage both employees and a high formation center.",
			image: "/kis-present.gif",
			tags: ["TypeScript", "React", "Python", "Django", "PostgreSQL", "Docker"],
			liveUrl: "",
			githubUrl: "",
			detailedDescription:
				"This is a ERP solution built with React and Django rest framework. It features user management and a responsive UI.",
			features: [
				"User authentication and profile management",
				"Project and event management using a customised calendar",
				"Course, Teacher, student, Employees management",
				"Beautiful and responsive UI",
				"Financial files storage",
			],
			challenges: [""],
		},
		{
			id: 3,
			title: "Activity Reward",
			description: "Move more, receive valuable rewards",
			image: "/activity-reward/landing-home-1.png",
			tags: ["react", "Django", "DRF", "python", "typescript"],
			liveUrl: "https://activityrewards.co.uk/",
			githubUrl: "",
			detailedDescription:
				" Employees move more and receive valuable rewards... Boosting workplace happiness!Empower your employees with financial rewards for staying active. Happier teams, better performance, and improved well-being. ",
			features: [
				"Real time xp system and pop notifications",
				"Real time chat for support",
				"Payment Gateway built on stripe",
				"Scheduled asyncronous task for tracking ang grouping analytics data",
			],
			challenges: [],
		},
		{
			id: 4,
			title: "Task man",
			description: "Yet another project management system",
			image: "/taskman.png",
			tags: ["react", "typescript", "prisma", "tailwind"],
			liveUrl: "",
			githubUrl: "",
			detailedDescription:
				"A project management system built with React, React Router V7 framework mode, and TypeScript.",
			features: ["Drag and drop task management"],
			challenges: [],
		},{
					id: 5,
					title: "Grok hero",
					description: "Reimagined grok hero page",
					image: "/grok/grok-hero.png",
					tags: ["react", "typescript", "tailwind", "design", "ui", "landing"],
					liveUrl: "",
					githubUrl: "",
					detailedDescription:
						"Grok reimagined hero page",
					features: ["Responsive hero landing page"],
					challenges: [],
				},
	];
	const filteredProjects = projects.filter(
		(project) =>
			filter === "All" ||
			project.tags.includes(filter) ||
			project.tags.includes(filter.toLowerCase()),
	);
	// Close modal on outside click
	useEffect(() => {
		if (!selected) return;
		function onClick(e: MouseEvent) {
			if (modalRef.current && !modalRef.current.contains(e.target as any)) {
				setSelected(null);
			}
		}
		document.body.style.overflow = selected ? "hidden" : "auto";
		document.addEventListener("mousedown", onClick);
		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("mousedown", onClick);
		};
	}, [selected]);

	const container = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};
	const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

	return (
		<section id="projects" className="relative py-24 bg-gray-50">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-center max-w-3xl mx-auto mb-12"
			>
				<h2
					className="text-4xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
					style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
				>
					Featured Projects
				</h2>
				<p className="text-gray-600 mt-2">
					Explore some of my best work. Hover over each card for more details.
				</p>
			</motion.div>

			{/* Filter Bar */}
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={container}
				className="flex flex-wrap justify-center gap-2 mb-8"
			>
				{categories.map((cat) => (
					<motion.div key={cat} variants={item}>
						<Button
							variant={filter === cat ? "default" : "outline"}
							size="sm"
							onClick={() => setFilter(cat)}
							className="capitalize cursor-pointer shadow-sketchy-md"
						>
							{cat}
						</Button>
					</motion.div>
				))}
			</motion.div>

			{/* Project Grid */}
			<div className="flex justify-center px-9">
				<motion.div
					variants={container}
					whileInView="show"
					viewport={{ once: true }}
					className={`grid gap-8 mt-4 ${
						filteredProjects.length > 0
							? "md:grid-cols-2 lg:grid-cols-3"
							: "grid-cols-1"
					}`}
				>
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								onSelect={() => setSelected(project)}
							/>
						))
					) : (
						<h1 className="text-muted-foreground text-xl font-bold text-center self-center">
							No Project match that tag ...
						</h1>
					)}
				</motion.div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{selected && (
					<ProjectModal
						project={selected}
						onCloseCliked={() => {
							setSelected(null);
						}}
					/>
				)}
			</AnimatePresence>
		</section>
	);
}
