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
import type { Route } from "./+types";

export const meta: MetaFunction = () => {
	return [
		{
			title: "Tsirimaholy",
			description: "Tsirimaholy portfolio - Fullstack Developer",
		},
	];
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

export default function HomePage() {
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
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Skills />
			<Projects />
			<Testimonials />
			<Contact />
			<Button
				hidden={showToTopBtn}
				onClick={() =>
					document
						.getElementById("hero")
						?.scrollIntoView({ behavior: "smooth" })
				}
				className="p-3 border-blue-500 rounded-full fixed bottom-4 right-6 cursor-pointer"
				title="Go to Projects"
			>
				<ArrowUpCircle className="h-6 w-6" />
				Back to top
			</Button>
		</main>
	);
}
