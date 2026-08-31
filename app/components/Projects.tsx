import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TProject } from "~/@types";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects: TProject[] = [
	{
		id: 6,
		title: "Aligneurs Français",
		description:
			"Web and mobile platform used by dentists and orthodontists to manage invisible aligner treatments.",
		image: "/aligneurs-francais/cover.jpg",
		tags: [
			"TypeScript",
			"React",
			"React Native",
			"Python",
			"Django",
			"PostgreSQL",
			"Docker",
		],
		liveUrl: "https://praticiens.aligneursfrancais.com/notre-logiciel/",
		githubUrl: "",
		detailedDescription:
			"As a Full-Stack Developer at Aligneurs Français, I build and improve AF Setup, the web and mobile platform practitioners use to manage aligner treatments end to end, and AF Academy, the company's e-learning platform.",
		features: [
			"Patient and treatment management with follow-up tracking",
			"3D visualization of dental setups",
			"Photo and radiograph management",
			"Messaging between practitioners and the clinical team",
			"Mobile apps for iOS and Android",
		],
		challenges: [],
		featured: true,
	},
	{
		id: 7,
		title: "FinanceApp",
		description:
			"Retirement planning application with personalized simulations, delivered during a mission for Ukatis Consulting.",
		image: "/financeapp/cover.jpg",
		tags: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "CI/CD"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"During a mission for Ukatis Consulting, I established the Django backend foundations, built the AWS Elastic Beanstalk infrastructure with Docker, automated testing and deployment through CI/CD, and documented the release process.",
		features: [
			"Authentication and password recovery",
			"Multi-step onboarding with French and English localization",
			"Personalized retirement simulations",
			"Django backend architecture",
			"Docker deployment on AWS Elastic Beanstalk",
			"Automated testing and deployment pipeline",
		],
		challenges: [],
		featured: true,
	},
	{
		id: 3,
		title: "Activity Reward",
		description:
			"Employee wellness platform that turns physical activity into financial rewards.",
		image: "/activity-reward/landing-home-1.png",
		tags: ["TypeScript", "React", "Python", "Django", "Stripe"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"Built during my Backend Developer role at Vertex, Activity Reward helps companies encourage movement by converting employee activity into financial rewards and measurable engagement.",
		features: [
			"Real-time XP updates and notifications",
			"Real-time support chat",
			"Stripe payment integration",
			"Scheduled background jobs for analytics aggregation",
		],
		challenges: [],
		featured: true,
	},
	{
		id: 1,
		title: "KIS",
		description:
			"ERP and intranet platform for employee, training-center, project, and finance operations.",
		image: "/kis-present.gif",
		tags: ["TypeScript", "React", "Python", "Django", "PostgreSQL", "Docker"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"An ERP and intranet solution built with React and Django REST Framework to bring employee, training-center, project, and financial workflows into one platform.",
		features: [
			"Authentication and profile management",
			"Project and event management with a custom calendar",
			"Course, teacher, student, and employee management",
			"Responsive interface",
			"Financial document storage",
		],
		challenges: [],
	},
	{
		id: 2,
		title: "I-Kaly",
		description:
			"Restaurant and order management application built during a hackathon.",
		image: "/i-kaly/login.png",
		tags: ["React", "Spring Boot", "Bootstrap", "OpenAPI"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"One of my first team applications, built during a hackathon to manage restaurant menus, customer orders, and day-to-day operations.",
		features: ["Menu management", "Customer ordering workflow"],
		challenges: [],
	},
	{
		id: 4,
		title: "Task Manager",
		description:
			"Drag-and-drop project management application built with React Router and Prisma.",
		image: "/taskman.png",
		tags: ["TypeScript", "React", "React Router", "Prisma", "Tailwind CSS"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"A project management application built with TypeScript and React Router framework mode, focused on a direct drag-and-drop task workflow.",
		features: ["Drag-and-drop task management"],
		challenges: [],
	},
	{
		id: 5,
		title: "Grok Hero Concept",
		description: "A responsive reimagining of Grok's landing-page hero.",
		image: "/grok/grok-hero.png",
		tags: ["TypeScript", "React", "Tailwind CSS", "UI Design"],
		liveUrl: "",
		githubUrl: "",
		detailedDescription:
			"A focused interface exercise exploring responsive composition, typography, and visual hierarchy through a reimagined Grok hero section.",
		features: ["Responsive landing-page hero"],
		challenges: [],
	},
];

const container = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function Projects() {
	const [selected, setSelected] = useState<TProject | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const lastTriggerRef = useRef<HTMLElement | null>(null);

	const closeModal = useCallback(() => {
		setSelected(null);
		requestAnimationFrame(() => lastTriggerRef.current?.focus());
	}, []);

	useEffect(() => {
		if (!selected) return;

		function onClick(event: MouseEvent) {
			if (
				modalRef.current &&
				event.target instanceof Node &&
				!modalRef.current.contains(event.target)
			) {
				closeModal();
			}
		}

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") closeModal();
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [selected, closeModal]);

	return (
		<section id="projects" className="relative bg-gray-50 py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mx-auto mb-12 max-w-3xl px-6 text-center"
			>
				<p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
					Selected work
				</p>
				<h2 className="text-4xl font-bold text-gray-900 font-shadow-into-light sm:text-5xl">
					Products I've built and improved
				</h2>
				<p className="mt-4 text-lg leading-7 text-gray-600">
					Production work and selected experiments across health tech, fintech,
					ERP, and SaaS.
				</p>
			</motion.div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.05 }}
				className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-12"
			>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						onSelect={(nextProject, trigger) => {
							lastTriggerRef.current = trigger ?? null;
							setSelected(nextProject);
						}}
					/>
				))}
			</motion.div>

			<AnimatePresence>
				{selected && (
					<ProjectModal
						project={selected}
						onCloseCliked={closeModal}
						ref={modalRef}
					/>
				)}
			</AnimatePresence>
		</section>
	);
}
