import {
	CalendarClockIcon,
	Github,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, useFetcher } from "react-router";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function Contact() {
	const fetcher = useFetcher<{ success: boolean; message: string }>();
	const formRef = useRef<HTMLFormElement>(null);
	const isSubmitting = fetcher.state !== "idle";
	const hasResponse = fetcher.data?.message;

	useEffect(() => {
		if (fetcher.data?.success) {
			formRef.current?.reset();
		}
	}, [fetcher.data]);

	const widgetContainerRef = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | undefined>(undefined);
	const [turnstileToken, setTurnstileToken] = useState("");
	const [localError, setLocalError] = useState<string | null>(null);
	const prevFetcherStateRef = useRef(fetcher.state);

	// Load the Turnstile script once and render the widget explicitly so we
	// can reset it between attempts (tokens are single-use and the page stays
	// active after a submission).
	useEffect(() => {
		let cancelled = false;
		let renderedWidgetId: string | undefined;

		const scriptId = "turnstile-api-script";
		if (!document.getElementById(scriptId)) {
			const script = document.createElement("script");
			script.id = scriptId;
			script.src =
				"https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}

		const tryRender = (): boolean => {
			if (renderedWidgetId) {
				return true;
			}
			const container = widgetContainerRef.current;
			if (
				!container ||
				cancelled ||
				typeof window.turnstile?.render !== "function"
			) {
				return false;
			}
			renderedWidgetId = window.turnstile.render(container, {
				sitekey: "0x4AAAAAAEk21h3l4jPquaiZ",
				action: "contact",
				callback: (freshToken) => {
					setTurnstileToken(freshToken);
					setLocalError(null);
				},
				"expired-callback": () => setTurnstileToken(""),
				"error-callback": () => setTurnstileToken(""),
			});
			widgetIdRef.current = renderedWidgetId;
			return true;
		};

		tryRender();
		const intervalId = window.setInterval(() => {
			if (tryRender()) {
				window.clearInterval(intervalId);
			}
		}, 100);

		return () => {
			cancelled = true;
			window.clearInterval(intervalId);
			if (renderedWidgetId && window.turnstile?.remove) {
				window.turnstile.remove(renderedWidgetId);
			}
			widgetIdRef.current = undefined;
		};
	}, []);

	// Reset the single-use token whenever a submission attempt finishes, so a
	// retry always starts from a fresh challenge.
	useEffect(() => {
		const previousState = prevFetcherStateRef.current;
		prevFetcherStateRef.current = fetcher.state;
		if (previousState === "submitting" && fetcher.state === "idle") {
			const widgetId = widgetIdRef.current;
			if (widgetId && window.turnstile?.reset) {
				window.turnstile.reset(widgetId);
			}
			setTurnstileToken("");
		}
	}, [fetcher.state]);

	// Animation variants for container and items
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};
	const contactInformations = [
		{
			icon: Mail,
			text: "tsirimaholy.h@gmail.com",
			href: "mailto:tsirimaholy.h@gmail.com",
		},
		{
			icon: MapPin,
			text: "Madagascar",
		},
		{
			icon: Github,
			text: "github.com/Tsirimaholy",
			href: "https://github.com/Tsirimaholy",
		},
		{
			icon: Linkedin,
			text: "linkedin.com/in/tsirimaholy",
			href: "https://linkedin.com/in/tsirimaholy",
		},
	];

	return (
		<section className="relative py-24 flex justify-center" id="contact">
			{/* Animated gradient background */}
			{/* <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-yellow-500/5 to-background animate-gradient opacity-50" /> */}

			<div className="container">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="relative flex flex-col items-center justify-center gap-4 text-center max-w-3xl mx-auto"
				>
					<h2
						className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
						style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
					>
						Get in Touch
					</h2>
					<p className="text-muted-foreground">
						Feel free to reach out if you're looking to collaborate or just want
						to connect!
					</p>
				</motion.div>

				{/* Book a Call Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-col items-center gap-4 mt-8 mb-8"
				>
					<Button
						asChild
						size="lg"
						className="cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary/20 shadow-xl px-8 py-6 text-lg font-semibold relative border-2 border-white"
					>
						<Link
							to="https://cal.com/tsirimaholy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<CalendarClockIcon /> Book a Call
						</Link>
					</Button>
					<p className="text-sm text-muted-foreground text-center max-w-md">
						Or feel free to reach out directly via{" "}
						<Link
							to="https://linkedin.com/in/tsirimaholy"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							LinkedIn
						</Link>
						,{" "}
						<Link
							to="https://wa.me/+261389689872"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							WhatsApp
						</Link>
					</p>
				</motion.div>

				{/* Contact Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 relative"
				>
					{/* Contact Information Card */}
					<motion.div variants={itemVariants}>
						<Card className="h-full group hover:shadow-lg hover:shadow-primary/20 bg-white sketchy-border-sm shadow-sketchy-md">
							<CardHeader>
								<CardTitle className="group-hover:text-primary transition-colors">
									Contact Information
								</CardTitle>
								<CardDescription>Here's how you can reach me</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-4">
								{contactInformations.map(({ icon: Icon, text, href }) => (
									<motion.div
										key={href ?? text}
										className="flex items-center gap-3 group/item"
										whileHover={{ x: 5 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										<Icon className="h-5 w-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
										{href ? (
											<Link
												to={href}
												target="_blank"
												rel="noopener noreferrer"
												className="transition-colors"
											>
												{text}
											</Link>
										) : (
											<p className="group-hover/item:text-primary transition-colors">
												{text}
											</p>
										)}
									</motion.div>
								))}
							</CardContent>
						</Card>
					</motion.div>

					{/* Send a Message Card */}
					<motion.div variants={itemVariants}>
						<Card className="group hover:shadow-primary/20 transition-all duration-300 bg-white sketchy-border-sm shadow-sketchy-lg">
							<CardHeader>
								<CardTitle className="group-hover:text-primary transition-colors">
									Send a Message
								</CardTitle>
								<CardDescription>
									Fill out the form below and I'll get back to you soon.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<fetcher.Form
									ref={formRef}
									className="flex flex-col gap-4"
									method="POST"
									action="/contact"
									onSubmit={(event) => {
										if (!turnstileToken) {
											event.preventDefault();
											setLocalError(
												"Please complete the security check before sending.",
											);
										}
									}}
								>
									{[
										{
											label: "Your name",
											placeholder: "Enter your name",
											type: "text",
											name: "name",
											autoComplete: "name",
										},
										{
											label: "Your mail",
											placeholder: "you@example.com",
											type: "email",
											name: "email",
											autoComplete: "email",
										},
									].map(({ label, placeholder, type, name, autoComplete }) => (
										<motion.div
											key={name}
											className="grid gap-2"
											variants={itemVariants}
										>
											<label htmlFor={name} className="text-sm font-medium">
												{label}
											</label>
											<Input
												id={name}
												name={name}
												type={type}
												placeholder={placeholder}
												required
												autoComplete={autoComplete}
												className="bg-white sketchy-border-sm focus:border-primary transition-colors shadow-sketchy-sm"
											/>
										</motion.div>
									))}
									<motion.div className="grid gap-2" variants={itemVariants}>
										<label htmlFor="message" className="text-sm font-medium">
											Your message
										</label>
										<Textarea
											id="message"
											name="message"
											placeholder="Write your message"
											required
											className="min-h-[150px] bg-white sketchy-border-sm focus:border-primary transition-colors shadow-sketchy-sm"
										/>
									</motion.div>
									<motion.div
										ref={widgetContainerRef}
										variants={itemVariants}
										aria-label="Security check"
									/>
									<input
										type="hidden"
										name="cf-turnstile-response"
										value={turnstileToken}
									/>
									{(hasResponse || localError) && (
										<output
											className={
												fetcher.data?.success && !localError
													? "text-sm text-green-700"
													: "text-sm text-destructive"
											}
											aria-live="polite"
										>
											{localError ?? fetcher.data?.message}
										</output>
									)}
									<motion.div variants={itemVariants}>
										<Button
											name="intent"
											value={"contact"}
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-primary to-green-500 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20  shadow-sketchy-sm cursor-pointer"
										>
											{isSubmitting ? "Sending..." : "Send Message"}
										</Button>
									</motion.div>
								</fetcher.Form>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
