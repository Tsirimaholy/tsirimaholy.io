import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import { Service } from "~/components/Service";
import type { MetaFunction } from "react-router";
import type { Route } from "./+types";
import { data } from "react-router";
import { Navbar } from "~/components/NavBar";
import { sendEmail } from "~/lib/email";

export const meta: MetaFunction = ({}) => {
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

export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		<main className="flex min-h-screen flex-col bg-background">
			<Navbar />
			<Hero />
			<About />
			<Service />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
