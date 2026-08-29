import {
	ArrowUpRight,
	CloudUpload,
	CreditCard,
	LifeBuoy,
	Rocket,
	Workflow,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
	{
		number: "01",
		title: "MVP Development",
		description:
			"From idea to a working product in weeks, not months. I build the MVP your startup needs to launch and start validating.",
		icon: Rocket,
		accent: "text-green-600",
		mark: "bg-green-400",
	},
	{
		number: "02",
		title: "Product Rescue",
		description:
			"Your app is slow or stuck? I dig into the code and fix what holds it back. One analytics page went from 4 minutes to under a second.",
		icon: LifeBuoy,
		accent: "text-purple-600",
		mark: "bg-purple-400",
	},
	{
		number: "03",
		title: "Business Apps & Automation",
		description:
			"ERP, fintech, SaaS: I automate the workflows your team still does by hand, so the tool works for you, not the other way around.",
		icon: Workflow,
		accent: "text-blue-600",
		mark: "bg-blue-400",
	},
	{
		number: "04",
		title: "Payments & Integrations",
		description:
			"Stripe billing, transactional emails, push notifications, background jobs, and third-party APIs, wired up and reliable.",
		icon: CreditCard,
		accent: "text-slate-700",
		mark: "bg-slate-400",
	},
	{
		number: "05",
		title: "DevOps & Deployment",
		description:
			"AWS, Docker, CI/CD. I ship, monitor, and keep your app running in production, so you can focus on the product.",
		icon: CloudUpload,
		accent: "text-orange-600",
		mark: "bg-orange-400",
	},
];

const list = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08 } },
};

const row = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0 },
};

export function Service() {
	return (
		<section id="service" className="relative overflow-hidden bg-[#f5f3ed] py-24">
			<div
				className="pointer-events-none absolute inset-0 opacity-30"
				style={{
					backgroundImage:
						"radial-gradient(circle at center, rgb(100 116 139 / 0.22) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>

			<div className="container relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
				<motion.div
					initial={{ opacity: 0, x: -18 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					className="lg:sticky lg:top-32 lg:self-start"
				>
					<p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
						<span className="h-px w-8 bg-slate-400" />
						What I do
					</p>
					<h2 className="max-w-md text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-slate-950 font-shadow-into-light sm:text-6xl">
						Build it.
						<br />
						Fix it.
						<br />
						<span className="relative inline-block">
							Keep it running.
							<span className="absolute right-0 -bottom-2 left-0 -rotate-1 border-b-4 border-green-400" />
						</span>
					</h2>
					<p className="mt-8 max-w-md text-lg leading-8 text-slate-600">
						Need a first version, a stubborn performance problem fixed, or
						production taken off your plate? That's where I help.
					</p>

					<a
						href="#contact"
						className="group mt-9 inline-flex items-center gap-3 border-b-2 border-slate-950 pb-1 text-base font-bold text-slate-950 transition-colors hover:border-green-600 hover:text-green-700"
					>
						Tell me what you're building
						<ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</a>
				</motion.div>

				<motion.ol
					className="border-t-2 border-slate-900"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					variants={list}
				>
					{services.map((service) => {
						const Icon = service.icon;

						return (
							<motion.li
								key={service.title}
								variants={row}
								className="group relative border-b-2 border-slate-900"
							>
								<article className="grid gap-4 py-8 sm:grid-cols-[3.5rem_minmax(0,1fr)_3rem] sm:gap-5 sm:py-9">
									<div className="flex items-start gap-3 sm:block">
										<span className="font-mono text-sm font-bold text-slate-400">
											{service.number}
										</span>
										<span
											className={`mt-2 hidden h-1 w-8 origin-left -rotate-2 transition-transform duration-300 group-hover:scale-x-150 sm:block ${service.mark}`}
										/>
									</div>

									<div>
										<h3 className="text-2xl font-extrabold tracking-tight text-slate-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
											{service.title}
										</h3>
										<p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
											{service.description}
										</p>
									</div>

									<Icon
										aria-hidden="true"
										className={`absolute top-8 right-0 h-7 w-7 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:static sm:h-8 sm:w-8 ${service.accent}`}
										strokeWidth={1.8}
									/>
								</article>
							</motion.li>
						);
					})}
				</motion.ol>
			</div>
		</section>
	);
}
