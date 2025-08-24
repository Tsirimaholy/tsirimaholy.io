import { Quote, Star, StarHalf } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "~/components/ui/card";

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
}

const testimonialData: TestimonialItem[] = [
	{
		id: 1,
		name: "Fernando R. @nandorrb",
		position: "Metatronic Engineer",
		company: "",
		testimonial: "Amazing work, very professional.",
		image: "/testimonial/fernando.webp",
		country: "PE",
		rating: 5,
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
	},
	{
		id: 3,
		name: " Adeniyi David A. @esudie",
		position: "Employs for IT Projects and Content writings",
		company: "",
		testimonial: "Very skillful with node.js. Equally really nice guy.",
		country: "GB",
		rating: 5,
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
				className="w-10 h-10 rounded-full object-cover"
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
			className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold"
		>
			{initials}
		</div>
	);
}

function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
	const full = Math.floor(rating);
	const hasHalf = rating - full >= 0.5 && full < 5;
	const empty = Math.max(0, 5 - full - (hasHalf ? 1 : 0));
	return (
		<div className="flex items-center" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
			{Array.from({ length: full }).map((_, i) => (
				<Star key={`full-${i}`} className="text-yellow-400" width={size} height={size} fill="currentColor" />
			))}
			{hasHalf && (
				<StarHalf key="half" className="text-yellow-400" width={size} height={size} fill="currentColor" />
			)}
			{Array.from({ length: empty }).map((_, i) => (
				<Star key={`empty-${i}`} className="text-muted-foreground/40" width={size} height={size} />
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
	return (
		<motion.div variants={itemVariants}>
			<Card className="p-0 shadow-sm hover:shadow-md transition-shadow border-primary/10">
				<CardContent className="p-6">
					<figure className="flex flex-col gap-4">
						<Quote className="w-6 h-6 text-primary transform scale-x-[-1]" />
						<blockquote className="text-muted-foreground italic">
							{item.testimonial}
						</blockquote>
						<figcaption className="mt-2 flex items-center justify-between gap-3">
							<div className="flex items-center gap-3 min-w-0">
								<Avatar src={item.image} alt={item.name} />
								<div className="min-w-0">
									<p className="font-semibold text-foreground truncate flex items-center">
										{item.name}
										<span
											className="ml-2 text-xl"
											title={`Client from ${getCountryName(item.country)}`}
										>
											{getFlagEmoji(item.country)}
										</span>
									</p>
									<p className="text-sm text-muted-foreground truncate">
										{item.position}
										{item.company ? `, ${item.company}` : ""}
									</p>
								</div>
							</div>
							<div className="flex items-center bg-yellow-200/20 px-2 py-1 rounded-md">
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
							What my clients from around the world say about my work and
							collaboration
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
