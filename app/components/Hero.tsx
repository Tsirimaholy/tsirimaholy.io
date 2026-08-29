import {
	ArrowDown,
	ChevronDown,
	FileDown,
	Github,
	Linkedin,
	MousePointer2,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const contacts = [
	{
		href: "https://github.com/Tsirimaholy",
		icon: Github,
		label: "GitHub",
	},
	{
		href: "https://linkedin.com/in/tsirimaholy",
		icon: Linkedin,
		label: "LinkedIn",
	},
];

export function Hero() {
	const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
	const resumeMenuRef = useRef<HTMLDivElement>(null);

	// Close the resume menu on outside click or Escape
	useEffect(() => {
		if (!resumeMenuOpen) return;
		const onClick = (e: MouseEvent) => {
			if (
				resumeMenuRef.current &&
				e.target instanceof Node &&
				!resumeMenuRef.current.contains(e.target)
			) {
				setResumeMenuOpen(false);
			}
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setResumeMenuOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [resumeMenuOpen]);
	return (
		<section
			id="hero"
			className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16 md:pt-32 md:pb-20"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(circle at center, rgb(148 163 184 / 0.22) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>
			<div className="relative mx-auto grid min-w-0 w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-20">
				<motion.div
					initial={{ x: -20 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.45 }}
					className="flex min-w-0 w-full flex-col items-center text-center lg:items-start lg:text-left"
				>
					<AvailabilityBadge />
					<h1 className="mt-6 max-w-full text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-slate-950 font-shadow-into-light sm:text-6xl lg:text-7xl">
						Hi, I'm <span className="block sm:inline">Tsirimaholy.</span>
					</h1>

					<motion.div
						initial={{ y: 16 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-7 w-full max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl"
					>
						<motion.div
							initial={{ rotate: -2 }}
							animate={{ rotate: 1 }}
							transition={{ duration: 0.45, delay: 0.55 }}
							className="relative mx-auto mb-2 block w-fit border border-blue-300 bg-blue-50 px-2 py-0.5 text-slate-950 sm:mr-2 sm:mb-0 sm:inline-block"
						>
							<div className="absolute -top-0.5 -left-0.5 border-t-3 border-l-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -bottom-0.5 -right-0.5 border-b-3 border-r-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -top-0.5 -right-0.5 border-t-3 border-r-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -bottom-0.5 -left-0.5 border-b-3 border-l-3 border-blue-400 w-3 h-3"></div>
							<strong>Full-stack developer</strong>
							<MousePointer2 className="absolute -right-3 -bottom-4 h-5 w-5 text-slate-950" />
						</motion.div>
						building reliable web and mobile products.
					</motion.div>

					<p className="mt-5 w-full max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
						I help startups launch MVPs, improve existing platforms, and solve
						performance problems with React, Django, Spring Boot, and AWS.
					</p>

					<div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
						<motion.div
							initial={{ y: 20 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
						>
							<Button asChild size="lg" className="shadow-sketchy-md">
								<Link to="#contact">
									Start a project
									<ArrowDown className="animate-bounce" size={18} />
								</Link>
							</Button>
							<div className="relative" ref={resumeMenuRef}>
								<Button
									size="lg"
									variant="outline"
									onClick={() => setResumeMenuOpen((open) => !open)}
									aria-haspopup="menu"
									aria-expanded={resumeMenuOpen}
								>
									<FileDown /> Resume
									<ChevronDown
										size={16}
										className={`transition-transform ${resumeMenuOpen ? "rotate-180" : ""}`}
									/>
								</Button>
								{resumeMenuOpen && (
									<div
										role="menu"
										className="absolute left-0 z-50 mt-2 w-40 overflow-hidden rounded-lg bg-white sketchy-border-sm shadow-sketchy-md"
									>
										<Link
											role="menuitem"
											to="/resume-en.pdf"
											target="_blank"
											onClick={() => setResumeMenuOpen(false)}
											className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
										>
											🇬🇧 English
										</Link>
										<Link
											role="menuitem"
											to="/resume-fr.pdf"
											target="_blank"
											onClick={() => setResumeMenuOpen(false)}
											className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100"
										>
											🇫🇷 Français
										</Link>
									</div>
								)}
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ y: 12 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.6, delay: 0.55 }}
						className="mt-7 flex items-center gap-5 text-sm font-medium text-slate-600"
					>
						<span className="text-slate-400">Find me on</span>
						{contacts.map(({ href, icon: Icon, label }) => (
							<Link
								key={href}
								to={href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
							>
								<Icon className="h-4 w-4" />
								{label}
							</Link>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ scale: 0.9, rotate: 3 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.6, delay: 0.15, type: "spring" }}
					className="relative mx-auto lg:col-start-2 lg:row-start-1"
				>
					<div className="absolute inset-3 rounded-full bg-amber-50" />
					<div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-dashed border-slate-400 bg-amber-50 shadow-sketchy-lg md:h-72 md:w-72 lg:h-96 lg:w-96">
						<img
							src="/tsirimaholy.webp"
							alt="Tsirimaholy Harison Razanapanala"
							className="w-full h-full object-cover"
							loading="eager"
							fetchPriority="high"
							decoding="async"
							width="384"
							height="384"
						/>
					</div>
					<div className="absolute -right-3 bottom-8 -rotate-3 border-2 border-slate-900 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sketchy-md">
						Web · Mobile · APIs
					</div>
				</motion.div>
			</div>
		</section>
	);
}
function AvailabilityBadge() {
	return (
		<div className="inline-flex items-center gap-2 rounded-full border border-dashed border-green-500 bg-green-100/70 px-3 py-1.5 text-sm font-semibold text-green-700">
			<span className="relative flex h-2.5 w-2.5">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
				<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
			</span>
			Open to new projects
		</div>
	);
}
