import { motion } from "motion/react";
import {
	ArrowRight,
	CloudUpload,
	CreditCard,
	LifeBuoy,
	Rocket,
	Sparkles,
	Workflow,
} from "lucide-react";

export function Service() {
	const services = [
		{
			title: "MVP Development",
			description:
				"From idea to a working product in weeks, not months. I build the MVP your startup needs to launch and start validating.",
			icon: <Rocket className="h-7 w-7" />,
			tile: "bg-green-600/10 text-green-600",
			bar: "before:bg-green-600",
			underline: "after:bg-green-600",
		},
		{
			title: "Product Rescue",
			description:
				"Your app is slow or stuck? I dig into the code and fix what holds it back. Example: an analytics page that went from 4 minutes to under a second.",
			icon: <LifeBuoy className="h-7 w-7" />,
			tile: "bg-purple-600/10 text-purple-600",
			bar: "before:bg-purple-600",
			underline: "after:bg-purple-600",
		},
		{
			title: "Business Apps & Automation",
			description:
				"ERP, fintech, SaaS: I automate the workflows your team still does by hand, so the tool works for you, not the other way around.",
			icon: <Workflow className="h-7 w-7" />,
			tile: "bg-blue-600/10 text-blue-600",
			bar: "before:bg-blue-600",
			underline: "after:bg-blue-600",
		},
		{
			title: "Payments & Integrations",
			description:
				"Stripe billing, transactional emails, push notifications, background jobs, third-party APIs: wired up and reliable.",
			icon: <CreditCard className="h-7 w-7" />,
			tile: "bg-primary/10 text-primary",
			bar: "before:bg-primary",
			underline: "after:bg-primary",
		},
		{
			title: "DevOps & Deployment",
			description:
				"AWS, Docker, CI/CD. I ship, monitor, and keep your app running in production, so you can focus on the product.",
			icon: <CloudUpload className="h-7 w-7" />,
			tile: "bg-orange-500/10 text-orange-500",
			bar: "before:bg-orange-500",
			underline: "after:bg-orange-500",
		},
	];
	return (
		<section id="service" className="py-24 bg-gray-50">
			<div className="container mx-auto max-w-6xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-shadow-into-light mb-4">
						My Services
					</h2>
					<p className="text-xl md:text-2xl text-gray-500 font-medium">
						I build your <span className="text-primary font-semibold">MVP</span>{" "}
						and bring your{" "}
						<span className="text-green-600 font-semibold">
							existing product back to life
						</span>
						.
					</p>
				</motion.div>
				<motion.div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sketchy-lg group transition-colors before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:opacity-30 before:transition-opacity before:duration-300 group-hover:before:opacity-100 ${service.bar}`}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0 },
							}}
							whileHover={{ y: -4 }}
							transition={{ type: "spring", stiffness: 300, damping: 28 }}
						>
							<span
								className={`flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${service.tile}`}
							>
								{service.icon}
							</span>
							<span
								className={`relative pb-1 font-bold text-2xl text-gray-900 font-shadow-into-light after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full ${service.underline}`}
							>
								{service.title}
							</span>
							<span className="text-base text-gray-500 leading-relaxed">
								{service.description}
							</span>
						</motion.div>
					))}

					{/* CTA card filling the last grid slot */}
					<motion.a
						href="#contact"
						className="relative flex flex-col justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-300 p-6 group transition-colors hover:border-primary hover:bg-primary/5"
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: { opacity: 1, y: 0 },
						}}
						whileHover={{ y: -4 }}
						transition={{ type: "spring", stiffness: 300, damping: 28 }}
					>
						<span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
							<Sparkles className="h-7 w-7" />
						</span>
						<span className="font-bold text-2xl text-gray-900 font-shadow-into-light">
							Something else in mind?
						</span>
						<span className="inline-flex items-center gap-2 text-base font-medium text-primary">
							Let's talk about it
							<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
