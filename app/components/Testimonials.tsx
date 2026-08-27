import { Languages, Quote, Star, StarHalf, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiFreelancer } from "react-icons/si";
import { Card, CardContent } from "~/components/ui/card";

type TestimonialSource = "linkedin" | "freelancer";

interface TestimonialItem {
	id: number;
	name: string;
	position: string;
	company: string;
	testimonial: string;
	image?: string;
	// Country code (2-letter ISO)
	country: string;
	// 1-5 star rating (supports halves like 4.5)
	rating: number;
	// Platform where the review/recommendation was published
	source: TestimonialSource;
	// Optional original-language version of the testimonial (for FR/EN toggle)
	testimonialFr?: string;
}

const testimonialData: TestimonialItem[] = [
	{
		id: 4,
		name: "Robin Lasserye",
		position: "Architecte IA agentique · Directeur Technique medtech",
		company: "ELYTRE",
		testimonial:
			"Tsirimaholy proved to be attentive, responsive and effective during our collaboration.",
		testimonialFr:
			"Tsirimaholy s'est montré a l'écoute, réactif et efficace durant notre collaboration",
		image: "/testimonial/robin.webp",
		country: "FR",
		rating: 5,
		source: "linkedin",
	},
	{
		id: 5,
		name: "Fanny Jan",
		position: "Product Manager",
		company: "",
		testimonial:
			"I highly recommend Tsirimaholy, who helped us over several months to develop our business software. He quickly grasps the business challenges, delivers fast, and works with complete autonomy.",
		testimonialFr:
			"Je recommande grandement Tsirimaholy qui a su nous aider durant plusieurs mois à développer notre logiciel métier. Une compréhension rapide des enjeux métier. Une livraison rapide et une parfaite autonomie.",
		image: "/testimonial/fanny.webp",
		country: "FR",
		rating: 5,
		source: "linkedin",
	},
	{
		id: 6,
		name: "Arnaud Le Roy",
		position: "Head of Operations",
		company: "",
		testimonial:
			"Team spirit, hard-working, competent, and a clear grasp of the topics and stakes involved.",
		testimonialFr:
			"Esprit d'équipe, sérieux, compétant, compréhension des sujets et des enjeux.",
		image: "/testimonial/arnaud.webp",
		country: "FR",
		rating: 5,
		source: "linkedin",
	},
	{
		id: 1,
		name: "Fernando R. @nandorrb",
		position: "Metatronic Engineer",
		company: "",
		testimonial: "Amazing work, very professional.",
		image: "/testimonial/fernando.webp",
		country: "PE",
		rating: 5,
		source: "freelancer",
	},
	{
		id: 2,
		name: " Ayesha K. @ayesha0124 ",
		position: "Web | Mobile | Desktop | Game Developer",
		company: "",
		testimonial:
			"Freelancer has been extremely professional. Did complete in time and delivered what was needed. Highly recommended.",
		image: "/testimonial/ayesha.webp",
		country: "PK",
		rating: 5,
		source: "freelancer",
	},
	{
		id: 3,
		name: " Adeniyi David A. @esudie",
		position: "Employs for IT Projects and Content writings",
		company: "",
		testimonial: "Very skillful with node.js. Equally really nice guy.",
		country: "GB",
		rating: 5,
		source: "freelancer",
	},
];

// Helpers
const getFlagEmoji = (countryCode: string) => {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt(0));
	return String.fromCodePoint(...codePoints);
};

const getCountryName = (countryCode: string) => {
	const countries: Record<string, string> = {
		PE: "Peru",
		PK: "Pakistan",
		US: "United States",
		GB: "United Kingdom",
		FR: "France",
		DE: "Germany",
		JP: "Japan",
		IN: "India",
		CA: "Canada",
		AU: "Australia",
		BR: "Brazil",
	};
	return countries[countryCode] || countryCode;
};

function Avatar({ src, alt }: { src?: string; alt: string }) {
	if (src) {
		return (
			<img
				src={src}
				alt={alt}
				loading="lazy"
				decoding="async"
				className="w-10 h-10 shrink-0 rounded-full object-cover"
			/>
		);
	}
	const initials = alt
		.replace(/\s+/g, " ")
		.trim()
		.split(" ")
		.map((w) => w[0] || "")
		.slice(0, 2)
		.join("")
		.toUpperCase();
	return (
		<div
			aria-hidden="true"
			className="w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
		>
			{initials}
		</div>
	);
}

const SOURCE_META: Record<
	TestimonialSource,
	{ label: string; href: string; className: string }
> = {
	linkedin: {
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/tsirimaholy/details/recommendations/",
		className: "bg-[#0A66C2]/10 text-[#0A66C2]",
	},
	freelancer: {
		label: "Freelancer",
		href: "https://www.freelancer.com/u/tsirimaholy",
		className: "bg-[#29B2FE]/15 text-[#0f87ce]",
	},
};

function SourceBadge({ source }: { source: TestimonialSource }) {
	const meta = SOURCE_META[source];
	return (
		<a
			href={meta.href}
			target="_blank"
			rel="noopener noreferrer"
			title={`Verified on ${meta.label}`}
			className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-opacity hover:opacity-80 ${meta.className}`}
		>
			{source === "linkedin" ? (
				<Linkedin size={13} fill="currentColor" />
			) : (
				<SiFreelancer size={13} />
			)}
			{meta.label}
		</a>
	);
}

function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
	const full = Math.floor(rating);
	const hasHalf = rating - full >= 0.5 && full < 5;
	const empty = Math.max(0, 5 - full - (hasHalf ? 1 : 0));
	const fullStarKeys = Array.from({ length: full }, (_, i) => `full-${rating}-${size}-${i + 1}`);
	const emptyStarKeys = Array.from(
		{ length: empty },
		(_, i) => `empty-${rating}-${size}-${i + 1}`,
	);
	return (
		<div className="flex items-center" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
			{fullStarKeys.map((key) => (
				<Star key={key} className="text-yellow-400" width={size} height={size} fill="currentColor" />
			))}
			{hasHalf && (
				<StarHalf key="half" className="text-yellow-400" width={size} height={size} fill="currentColor" />
			)}
			{emptyStarKeys.map((key) => (
				<Star key={key} className="text-muted-foreground/40" width={size} height={size} />
			))}
		</div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.08 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
	const [showFr, setShowFr] = useState(false);
	const hasFr = Boolean(item.testimonialFr);
	return (
		<motion.div variants={itemVariants}>
			<Card className="p-0 shadow-sm hover:shadow-md transition-shadow border-primary/10">
				<CardContent className="p-6">
					<figure className="flex flex-col gap-4">
						<div className="flex items-start justify-between">
							<Quote className="w-6 h-6 text-primary transform scale-x-[-1]" />
							<SourceBadge source={item.source} />
						</div>
						<blockquote className="text-muted-foreground italic">
							{hasFr && showFr ? item.testimonialFr : item.testimonial}
						</blockquote>
						{hasFr && (
							<button
								type="button"
								onClick={() => setShowFr((fr) => !fr)}
								className="self-end inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
							>
								<Languages size={13} />
								{showFr ? "EN" : "FR"}
							</button>
						)}
						<figcaption className="mt-2 flex items-center justify-between gap-3">
							<div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
								<Avatar src={item.image} alt={item.name} />
								<div className="min-w-0 flex-1">
									<p className="flex min-w-0 items-center font-semibold text-foreground">
										<span className="truncate" title={item.name.trim()}>
											{item.name}
										</span>
										<span
											className="ml-2 shrink-0 text-xl"
											title={`Client from ${getCountryName(item.country)}`}
										>
											{getFlagEmoji(item.country)}
										</span>
									</p>
									<p
										className="text-sm text-muted-foreground truncate"
										title={`${item.position}${item.company ? `, ${item.company}` : ""}`}
									>
										{item.position}
										{item.company ? `, ${item.company}` : ""}
									</p>
								</div>
							</div>
							<div className="flex shrink-0 items-center bg-yellow-200/20 px-2 py-1 rounded-md">
								<RatingStars rating={item.rating} size={14} />
								<span className="ml-2 text-xs text-yellow-700 font-medium">
									{item.rating.toFixed(1)}/5.0
								</span>
							</div>
						</figcaption>
					</figure>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export const Testimonials: React.FC = () => {
	const averageRating = Number(
		(
			testimonialData.reduce((acc, t) => acc + t.rating, 0) /
			testimonialData.length
		).toFixed(1),
	);
	const reviewCount = testimonialData.length;

	return (
		<section id="testimonials" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
				>
					<motion.div variants={itemVariants} className="text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground mb-2">
							Client Testimonials
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							What clients and colleagues from around the world say about my
							work and collaboration
						</p>
						<div className="flex items-center justify-center mt-3 mb-1">
							<RatingStars rating={averageRating} size={20} />
							<span className="ml-2 text-sm font-medium text-muted-foreground">
								{averageRating}/5.0 • {reviewCount} review{reviewCount > 1 ? "s" : ""}
							</span>
						</div>
						<p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-2">
							I've had the privilege of working with clients from diverse cultural
							backgrounds across multiple continents, bringing global perspective
							and adaptability to every project.
						</p>
						<div className="mt-3 h-1 w-20 bg-primary mx-auto rounded-full" />
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonialData.map((testimonial) => (
							<TestimonialCard key={testimonial.id} item={testimonial} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
