import { motion } from "motion/react";
import { Cloud, MonitorSmartphone, Globe, Server } from "lucide-react";

export function Service() {
	const services = [
		{
			title: "MVP Development",
			description:
				"From idea to a working product in weeks, not months. I build the MVP your startup needs to launch and start validating.",
			icon: <MonitorSmartphone className="h-12 w-12 text-green-600" />,
			accent: "before:bg-green-600",
		},
		{
			title: "Product Rescue",
			description:
				"Your app is slow or stuck? I dig into the code and fix what's holding it back — like an analytics page that went from 4 minutes to under a second.",
			icon: <Server className="h-12 w-12 text-purple-600" />,
			accent: "before:bg-purple-600",
		},
		{
			title: "Business Apps & Automation",
			description:
				"ERP, fintech, SaaS: I automate the workflows your team still does by hand, so the tool works for you — not the other way around.",
			icon: <Globe className="h-12 w-12 text-blue-600" />,
			accent: "before:bg-blue-600",
		},
		{
			title: "Payments & Integrations",
			description:
				"Stripe billing, transactional emails, push notifications, background jobs, third-party APIs — wired up and reliable.",
			icon: <Server className="h-12 w-12 text-primary" />,
			accent: "before:bg-primary",
		},
		{
			title: "DevOps & Deployment",
			description:
				"AWS, Docker, CI/CD. I ship, monitor, and keep your app running in production, so you can focus on the product.",
			icon: <Cloud className="h-12 w-12 text-orange-500" />,
			accent: "before:bg-orange-500",
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
					className="text-center mb-20"
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
					className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.5,
							},
						},
					}}
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							className={`relative shadow-sketchy-lg flex flex-col items-start gap-4 pl-8 pr-4 py-8 bg-white rounded-2xl group overflow-hidden before:content-[''] before:absolute before:left-0 before:top-6 before:bottom-6 before:w-1 before:rounded-full before:opacity-20 ${service.accent}`}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -4 }}
							transition={{ type: "spring", stiffness: 300, damping: 28 }}
						>
							<span className="mb-6">{service.icon}</span>
							<span className="block font-bold text-2xl md:text-3xl text-gray-900 font-shadow-into-light relative pb-1 group-hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:rounded-full after:bg-current">
								{service.title}
							</span>
							<span className="block text-base md:text-lg text-gray-500 font-normal leading-relaxed mt-1">
								{service.description}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
