import {
    ArrowDown,
    ChevronDown,
    FileDown,
    Github,
    Linkedin,
    Mail,
    MousePointer2,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

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
		{
			href: "mailto:tsirimaholy.h@gmail.com",
			icon: Mail,
			label: "Email",
		},
		{
			href: "https://x.com/tsirimaholy",
			icon: FaXTwitter,
			label: "X",
		},
	];
	return (
		<section
			id="hero"
			className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24 md:pt-0"
		>
			{/* Animated gradient background */}
			{/* <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-green-400/10 animate-gradient" /> */}

			{/* Subtle animated circles */}
			{/* <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" /> */}
			{/* <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/20 blur-3xl animate-pulse delay-700" /> */}

			<div className="relative flex flex-col-reverse md:flex-row items-center px-6">
				{/* Text Content */}
				<motion.div
					initial={{ x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
				>
					<div className="relative">
						<h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-shadow-into-light">
							Hi, I'm
							<span>Tsirimaholy</span>
						</h1>
						<OportunitieOpeningBadge />
					</div>

					<motion.div
						initial={{ opacity: 1, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="max-w-[600px] text-lg text-muted-foreground sm:text-xl"
					>
						A passionate{" "}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1 }}
							className="relative inline-block p-1 mr-2 border border-blue-400/20 bg-blue-400/10 rotate-4"
						>
							<div className="absolute -top-0.5 -left-0.5 border-t-3 border-l-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -bottom-0.5 -right-0.5 border-b-3 border-r-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -top-0.5 -right-0.5 border-t-3 border-r-3 border-blue-400 w-3 h-3"></div>
							<div className="absolute -bottom-0.5 -left-0.5 border-b-3 border-l-3 border-blue-400 w-3 h-3"></div>
							<strong className="md:text-2xl decoration-2 text-black">
								full-stack developer
							</strong>{" "}
							<MousePointer2 className="absolute right-0 text-black" />
						</motion.div>
						crafting beautiful and functional web experiences.
						{/* <Pencil size={17} className="ml-1 inline animate-bounce [animation-duration:2s]" /> */}
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex gap-4"
					>
						{contacts.map(({ href, icon: Icon, label }) => (
							<Button
								key={href}
								variant="outline"
								size="icon"
								className="shadow-2xl  hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm sketchy-border-sm shadow-sketchy-md"
								asChild
							>
								<Link
									to={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
								>
									<Icon className="h-5 w-5" />
								</Link>
							</Button>
						))}
					</motion.div>

					<div className="flex gap-4 mt-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex items-center gap-4"
						>
							<Button asChild size="lg">
								<Link to="#contact">
									Let's work together
									<ArrowDown className="animate-bounce" size={18} />
								</Link>
							</Button>
							<div className="relative" ref={resumeMenuRef}>
								<Button
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
				</motion.div>

				{/* Profile Photo */}
				<div className="relative">
					<div className="w-54 h-54 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-dashed border-gray-400 shadow-sketchy-lg">
						<img
							src="/tsirimaholy.webp"
							alt="Tsirimaholy"
							className="w-full h-full object-cover"
							loading="lazy"
							decoding="async"
							width="320"
							height="320"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
function OportunitieOpeningBadge() {
	return (
		<>
			<div className="text-sm inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-dashed border-green-500 font-medium bg-green-300/30 text-green-700">
				{/* Round dot */}
				<div className="relative border-green-600/70 bg-green-300 rounded-full manual-ping">
					{/* <div className="absolute inset-0 rounded-full bg-green-300 manual-ping"></div> */}
					<div className="size-1.5 bg-green-700 rounded-full z-10 m-0.5"></div>
				</div>
				Open to new projects
			</div>
			<style>{`
  			@keyframes manual-ping {
  				0% {
  			    transform: scale(1);
  					opacity: 1;
  				}
  				80%, 100% {
  				  transform: scale(1.7);
  					opacity: 0.5;
  				}
  			}
  			.manual-ping {
  				animation: manual-ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
  			}
			`}</style>
		</>
	);
}
