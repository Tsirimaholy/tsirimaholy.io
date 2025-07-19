import {
	CalendarClockIcon,
	Github,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";
import { Form, Link } from "react-router";
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
		{
			icon: FaXTwitter,
			text: "x.com/tsirimaholy",
			href: "https://x.com/tsirimaholy",
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
						className="cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary/20 shadow-xl px-8 py-6 text-lg font-semibold relative"
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
						, or{" "}
						<Link
							to="https://x.com/tsirimaholy"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							Twitter
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
								{contactInformations.map(
									({ icon: Icon, text, href }, index) => (
										<motion.div
											key={index}
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
									),
								)}
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
								<Form className="flex flex-col gap-4" method="POST">
									{[
										{ placeholder: "Name", type: "text", name: "name" },
										{ placeholder: "Email", type: "email", name: "email" },
									].map(({ placeholder, type, name }, index) => (
										<motion.div
											key={index}
											className="grid gap-2"
											variants={itemVariants}
										>
											<Input
												name={name}
												type={type}
												placeholder={placeholder}
												className="bg-white sketchy-border-sm focus:border-primary transition-colors shadow-sketchy-sm"
											/>
										</motion.div>
									))}
									<motion.div className="grid gap-2" variants={itemVariants}>
										<Textarea
											name="message"
											placeholder="Your message"
											className="min-h-[150px] bg-white sketchy-border-sm focus:border-primary transition-colors shadow-sketchy-sm"
										/>
									</motion.div>
									<motion.div variants={itemVariants}>
										<Button
											name="intent"
											value={"contact"}
											type="submit"
											className="w-full bg-gradient-to-r from-primary to-green-500 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20  shadow-sketchy-sm cursor-pointer"
										>
											Send Message
										</Button>
									</motion.div>
								</Form>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
