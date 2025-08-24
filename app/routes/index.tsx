import { ArrowUpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { MetaFunction } from "react-router";
import { data } from "react-router";
import { About } from "~/components/About";
import { Contact } from "~/components/Contact";
import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/NavBar";
import { Projects } from "~/components/Projects";
import { Service } from "~/components/Service";
import { Skills } from "~/components/Skills";
import { Testimonials } from "~/components/Testimonials";
import { Button } from "~/components/ui/button";
import { sendEmail } from "~/lib/email";
import {
    DEFAULT_SEO_CONFIG,
    generateMetaTags,
    generatePersonStructuredData,
    type StructuredDataPerson
} from "~/lib/seo";
import type { Route } from "./+types";

export const loader = async ({ request }: Route.LoaderArgs) => {
	// Server-side data fetching for SEO optimization
	const url = new URL(request.url);
	const origin = url.origin;

	// You can fetch dynamic data here that affects SEO
	// For example: recent blog posts, testimonials, project stats, etc.
	const siteData = {
		lastUpdated: new Date().toISOString(),
		origin,
		// Add any dynamic data that should be available server-side
		stats: {
			projectsCompleted: 12,
			yearsExperience: 3,
			clientsSatisfied: 5
		}
	};

	return {
		siteData,
		// This ensures the page is cached appropriately for SEO
		headers: {
			"Cache-Control": "public, max-age=3600, s-maxage=86400",
		},
	};
};

export const meta: MetaFunction = () => {
	const title = "Tsirimaholy - Fullstack Developer & Software Engineer";
	const description = "Experienced fullstack developer specializing in React, Django,Node.js, and modern web technologies. Building scalable applications and delivering exceptional user experiences.";
	// TODO: Buy the domain name
	const url = "https://tsirimaholy.dev";
	// TODO: Add og image
	const image = `${url}/og-image.jpg`;

	// Generate base meta tags
	const metaTags = generateMetaTags({
		title,
		description,
		url,
		image,
		imageAlt: "Tsirimaholy - Fullstack Developer Portfolio",
		...DEFAULT_SEO_CONFIG,
	});

	// Generate structured data for person
	const personData: StructuredDataPerson = {
		name: "Tsirimaholy",
		jobTitle: "Fullstack Developer",
		description,
		url,
		image,
		sameAs: [
			"https://github.com/tsirimaholy", // Replace with your actual profiles
			"https://linkedin.com/in/tsirimaholy",
			"https://x.com/tsirimaholy"
		],
		knowsAbout: [
			"Django",
			"JavaScript",
			"TypeScript",
			"React",
			"Node.js",
			"Full Stack Development",
			"Web Development",
			"Software Engineering"
		],
		alumniOf: {
			"@type": "Organization",
			name: "HEI - Haute Ecole d'Informatique"
		},
		workLocation: {
			"@type": "Place",
			name: "Antananarivo, Madagascar"
		}
	};

	const structuredData = generatePersonStructuredData(personData);

// Add preload links for critical resources
	const preloadLinks = [
		// Preload critical font (self-hosted)
		{ rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
		// Note: Avoid preloading large images unless proven critical; Lighthouse flags unused preloads.
	];

	return [...metaTags, ...preloadLinks, structuredData];
};

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const intent = formData.get("intent") as string;
	if (intent === "contact") {
		// send email
		const name = formData.get("name") as string;
		const message = formData.get("message") as string;
		const email = formData.get("email") as string;
		if (!message || !email) {
			return data({ success: false, message: "Invalid form data" });
		}

		await sendEmail(
			"hei.tsirimaholy@gmail.com",
			`From portfolio Contact - [${name}]`,
			message,
			"Acme <onboarding@resend.dev>",
		);

		return data({ success: true, message: "Email sent successfully" });
	}
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
	const [showToTopBtn, setShowToTopBtn] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("hero");
			const scrollPosition = window.scrollY;
			if (heroSection) {
				const heroTop = heroSection.offsetTop - 50;
				const heroHeight = heroSection.offsetHeight;
				setShowToTopBtn(scrollPosition < heroTop + heroHeight);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<main className="flex min-h-screen flex-col bg-background">
			{/* Skip to main content for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50 transition-all duration-200"
			>
				Skip to main content
			</a>

			<Navbar />

			<div id="main-content">
				<Hero />
				<About />
				<Service />
				<Skills />
				<Projects />
				<Testimonials />
				<Contact />
			</div>

			{/* Back to top button with improved accessibility and performance */}
			<Button
				hidden={showToTopBtn}
				onClick={() => {
					const heroElement = document.getElementById("hero");
					if (heroElement) {
						heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
						// Focus management for accessibility
						heroElement.focus({ preventScroll: true });
					}
				}}
				className="p-3 border-blue-500 rounded-full fixed bottom-4 right-6 cursor-pointer transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-primary focus:ring-offset-2"
				title="Back to top"
				aria-label="Scroll back to top of page"
				type="button"
			>
				<ArrowUpCircle className="h-6 w-6" aria-hidden="true" />
				<span className="sr-only">Back to top</span>
			</Button>
		</main>
	);
}
