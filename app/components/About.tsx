import {
	ArrowDownCircle,
	Building,
	ExternalLink,
	University,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export function About() {
	const [showNav, setShowNav] = useState(false);
	const [expandedSections, setExpandedSections] = useState<{
		[key: string]: boolean;
	}>({
		firstSteps: false,
		university: false,
	});

	const toggleSection = (section: string) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	// Show floating navigation when scrolling into the About section
	useEffect(() => {
		const handleScroll = () => {
			const aboutSection = document.getElementById("about");
			const scrollPosition = window.scrollY;
			if (aboutSection) {
				const aboutTop = aboutSection.offsetTop - 50;
				const aboutHeight = aboutSection.offsetHeight;
				setShowNav(
					scrollPosition > aboutTop && scrollPosition < aboutTop + aboutHeight,
				);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section id="about" className="py-24 bg-white relative">
			<div className="container mx-auto max-w-3xl px-4">
				{/* Floating Navigation */}
				{showNav && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3 }}
						className="fixed bottom-1/3 right-8 z-50 flex flex-col gap-4 items-center"
					>
						{/* Button to jump to Skills */}
						<Button
							onClick={() =>
								document
									.getElementById("skills-expertise")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="cursor-pointer text-white p-3 rounded-full shadow-lg"
							title="Go to Skills"
						>
							<ArrowDownCircle className="h-6 w-6" />
							<span className="text-sm font-medium">Skills</span>
						</Button>
						{/* Button to jump to Projects */}
						<Button
							onClick={() =>
								document
									.getElementById("projects")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="p-3 rounded-full"
							title="Go to Projects"
						>
							<ArrowDownCircle className="h-6 w-6" />
							Projects
						</Button>
					</motion.div>
				)}

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center relative mb-4"
				>
					<h2 className="text-3xl font-bold mb-4 text-gray-900 font-shadow-into-light">
						About Me
					</h2>
					<p className="text-gray-600 relative">
						I’m Tsirimaholy, a full‑stack developer passionate about crafting
						scalable applications using Django or Spring Boot on the backend and
						React on the frontend.{" "}
						<strong className="text-center block">
							This is the path that led me here.
						</strong>
					</p>
				</motion.div>
				<motion.img
					src="/path-to-there.svg"
					alt=""
					sizes=""
					className="border-2 w-[50%] mx-auto mb-10 rounded-lg shadow-lg"
					initial={{
						opacity: 0,
						y: -200,
						rotate: -15,
						scale: 0.5,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						rotate: 0,
						scale: 1,
					}}
					viewport={{ once: true }}
					transition={{
						type: "spring",
						damping: 8,
						stiffness: 100,
						mass: 1,
						duration: 1.2,
						delay: 0.3,
					}}
					whileHover={{ scale: 1.05, rotate: 1 }}
					whileTap={{ scale: 0.95 }}
				/>
				{/* Timeline */}
				<div className="space-y-12">
					{/* Timeline Item 1 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative flex items-start gap-4"
					>
						<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center sketchy-border-sm shadow-sketchy-md">
							<Building className="h-5 w-5 text-primary" />
						</div>
						<div>
							<h3 className="text-lg font-semibold text-gray-900 font-shadow-into-light">
								First steps into the{" "}
								<motion.span
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="relative inline-block"
								>
									<span className="absolute inset-0 bg-yellow-300/60 -skew-y-2 origin-left"></span>
									<span className="relative">Tech world</span>
								</motion.span>
							</h3>
							<p className="text-sm text-gray-500 mb-2">July 2015 – Present</p>
							<p className="text-gray-700 leading-relaxed">
								At 13, I thought tech was just about fixing phones and rebooting
								Wi-Fi. But one day, someone introduced me to the real world of
								tech - cybersecurity, AI, and Android development. That's where
								my coding journey truly began.
							</p>

							{!expandedSections.firstSteps && (
								<button
									type="button"
									onClick={() => toggleSection("firstSteps")}
									className="text-primary hover:text-primary/80 text-sm font-medium mt-2 underline decoration-dotted"
								>
									Want to know the full story? 📖
								</button>
							)}

							{expandedSections.firstSteps && (
								<div className="border-l-2 pl-2">
									<p className="text-gray-700 leading-relaxed mt-4">
										At 13, I thought tech was just about{" "}
										<span className="line-through text-gray-500">
											fixing my grandma's phone
										</span>{" "}
										and{" "}
										<span className="line-through text-gray-500">
											rebooting the Wi-Fi
										</span>
										. But one day, I met someone who introduced me to the real{" "}
										<span className="underline decoration-yellow-500">
											meaning of tech
										</span>
										. They showed me things like cybersecurity , Basic
										explanation about AI, and{" "}
										<span className="underline decoration-purple-500">
											Android app development
										</span>
										. I was so curious that I asked them to teach me some basic
										things but "especially" i want to learn to build android
										apps(But i wasn't aware for the pain that comes with it at
										that time :-) ).{" "}
										<span className="relative inline-block">
											<span className="relative font-semibold text-gray-900 bg-green-200">
												He accepted to teach and that's where my long way into
												the 🌊ocean of coding really started.
											</span>
										</span>
									</p>
									<p className="text-gray-700 leading-relaxed mt-4">
										Every step from the first{" "}
										<span className="underline decoration-yellow-500">
											"Hello World"
										</span>{" "}
										to my first{" "}
										<span className="underline decoration-green-500">
											CLI app
										</span>
										, was like if I discover a new world, it was like travel to
										a new world. And like every travel, there was a hard moment,
										a moment that I was both amazed and blown at the same time.
										Along the way, I discovered{" "}
										<Link
											to="https://www.youtube.com/@programmingwithmosh"
											target="_blank"
											className="relative underline decoration-blue-500 hover:cursor-pointer group"
										>
											<span className="absolute inset-0 w-0 origin-left bg-blue-200 transition-all duration-300 ease-out group-hover:w-full"></span>
											<span className="relative">
												CodeWithMosh's course{" "}
												<ExternalLink size={"15"} className="inline" />
											</span>
										</Link>
										,and again I was blown away 🤯by how we can build beautiful
										, maintainable and extensible codes(aka clean codes and best
										practices) and even the world and sentences that are used to
										explain a specific concept become clearer at that point. It
										was like every step was unlocking a whole new world to me.{" "}
									</p>
									<button
										type="button"
										onClick={() => toggleSection("firstSteps")}
										className="text-gray-500 hover:text-gray-700 text-sm font-medium mt-2 underline decoration-dotted"
									>
										Show less ↑
									</button>
								</div>
							)}
						</div>
					</motion.div>

					{/* Timeline Item 2 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="relative flex items-start gap-4"
					>
						<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center sketchy-border-sm shadow-sketchy-md">
							<University className="h-5 w-5 text-primary" />
						</div>
						<div>
							<h3
								className="text-lg font-semibold text-gray-900"
								style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
							>
								The journey to{" "}
								<motion.span
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className="relative inline-block"
								>
									<span className="absolute inset-0 bg-yellow-300/60 -skew-y-2 origin-left"></span>
									<span className="relative">university</span>{" "}
								</motion.span>{" "}
								and beyond
							</h3>
							<p className="text-sm text-gray-500 mb-2">2021 – 2024</p>
							<p className="text-gray-700 leading-relaxed">
								After high school, I faced challenges getting into university
								due to financial constraints. Eventually, I found HEI where I
								developed my full-stack skills and landed my first job as a
								React Native Developer within 9 months.
							</p>

							{!expandedSections.university && (
								<button
									type="button"
									onClick={() => toggleSection("university")}
									className="text-primary hover:text-primary/80 text-sm font-medium mt-2 underline decoration-dotted"
								>
									Read the detailed journey 🎓
								</button>
							)}

							{expandedSections.university && (
								<div className="border-l-2 pl-2">
									<p className="text-gray-700 leading-relaxed mt-4">
										After high school, i applied for an IT specialised
										University, did the entrance exam and got accpeted but my
										parent wasn't able to afford the tution fee of the
										university at that time so i did not finalised my
										inscription. I was a little bit diapointed and got into the
										hard way for a time by teaching myself, following the indie
										hacking and freelancer boys dream, but latter(after ~6
										month) i discovered HEI(Haute Ecole d'Informatique) applied
										and got accepted where i get my skills in{" "}
										<span className="underline decoration-yellow-500">
											full-stack development
										</span>{" "}
										and landed my first job as React Native Developer within 9
										months.
										<br />
										That long run taught me resilience, humility and gratitude
										and built the current _me_.
									</p>
									<button
										type="button"
										onClick={() => toggleSection("university")}
										className="text-gray-500 hover:text-gray-700 text-sm font-medium mt-2 underline decoration-dotted"
									>
										Show less ↑
									</button>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
