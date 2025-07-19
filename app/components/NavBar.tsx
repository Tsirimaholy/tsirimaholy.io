import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { href, Link, NavLink, useMatch } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const navRef = useRef<HTMLElement>(null);
	const isBlogRoute = useMatch("/blog");
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		// Observe sections to detect the active section
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 }, // Trigger when 30% of the section is visible
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	const navItems = [
		{ section: "hero", textLabel: "Home" },
		{ section: "about", textLabel: "About" },
		{ section: "service", textLabel: "Service" },
		{ section: "skills", textLabel: "Skills" },
		{ section: "projects", textLabel: "Projects" },
		{ section: "testimonials", textLabel: "Testimonials" },
		{ section: "blog", textLabel: "Blog" },
	];
	return (
		<header
			ref={navRef}
			className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-2xl z-50"
		>
			<nav className="container mx-auto px-4 py-4 relative flex justify-between items-center">
				{/* Logo */}
				<div className="pb-2.5 pr-1 border-r-2 border-b-2">
					<NavLink to={"#"}>
						<h1 className="text-sm font-bold -rotate-10 border p-2 border-blue-500">
							BuildThings
						</h1>
					</NavLink>
					{/* <div className="shadow-sm border-2 border-blue-500 translate-x-2"></div> */}
				</div>
				<div className="flex flex-col items-center justify-center md:flex-1">
					<button
						type="button"
						className="text-gray-700 text-2xl md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						{isMenuOpen ? <FiX /> : <FiMenu />}
					</button>
					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center gap-8">
						{navItems.map((nav) => (
							<li key={nav.section}>
								<NavLink
									viewTransition={true}
									to={
										nav.section === "blog"
											? href("/blog")
											: `${href("/")}#${nav.section}`
									}
									className={({ isActive: isActivePage }) => {
										return cn(
											"relative py-2 px-1 transition duration-300 ease-in-out capitalize",
											`${
												(isBlogRoute && isActivePage) ||
												activeSection === nav.section
													? "text-primary font-bold"
													: "text-gray-700 hover:text-primary"
											}`,
										);
									}}
								>
									{nav.textLabel}
								</NavLink>
							</li>
						))}
					</ul>
					{/* Mobile Navigation */}
					<div
						className={`md:hidden overflow-hidden transition-all duration-300 ${
							isMenuOpen ? "max-h-screen" : "max-h-0"
						}`}
					>
						<ul className="flex flex-col pt-4 pb-2 border-t mt-4">
							{[
								"hero",
								"about",
								"service",
								"skills",
								"projects",
								"testimonials",
							].map((section) => (
								<li key={section} className="py-2">
									<NavLink
										to={`${href("/")}#${section}`}
										className={({ isActive: isActivePage }) =>
											`block px-2 py-2 transition duration-300 ${
												isActivePage && activeSection === section
													? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
													: "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
											}`
										}
										onClick={() => setIsMenuOpen(false)}
									>
										{section.charAt(0).toUpperCase() + section.slice(1)}
									</NavLink>
								</li>
							))}

							<li key={"blog"} className="py-2">
								<NavLink
									to={href("/blog")}
									className={({ isActive }) =>
										`block px-2 py-2 transition duration-300 ${
											isActive || activeSection === "blog"
												? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
												: "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
										}`
									}
									onClick={() => {
										setActiveSection("blog");
										setIsMenuOpen(false);
									}}
								>
									Blog
								</NavLink>
							</li>
							<li key={"contact"} className="py-2">
								<NavLink
									to={"/#contact"}
									className={() =>
										`block px-2 py-2 transition duration-300 ${
											activeSection === "contact"
												? "text-primary font-medium bg-primary/10 rounded border-l-4 border-primary"
												: "text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
										}`
									}
									onClick={() => {
										setActiveSection("contact");
										setIsMenuOpen(false);
									}}
								>
									Let's talk
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<Button asChild className="hidden md:block">
					<Link key={"talk-to-me"} to={`${href("/")}#contact`}>
						<div className="size-2 bg-white rounded-full inline-block mr-2"></div>
						<strong>Let's talk</strong>
					</Link>
				</Button>
			</nav>
		</header>
	);
}
