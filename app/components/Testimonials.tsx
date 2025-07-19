import { Quote, Star } from "lucide-react";

interface TestimonialItem {
	id: number;
	name: string;
	position: string;
	company: string;
	testimonial: string;
	image?: string;
	// Country code (2-letter ISO)
	country: string;
	// 1-5 star rating
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

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
	// Convert country code to emoji flag
	const getFlagEmoji = (countryCode: string) => {
		const codePoints = countryCode
			.toUpperCase()
			.split("")
			.map((char) => 127397 + char.charCodeAt(0));
		return String.fromCodePoint(...codePoints);
	};

	// Get country name from country code
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

	return (
		<div className="flex flex-col p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10">
			<div className="mb-4">
				<Quote className="w-6 h-6 text-primary transform scale-x-[-1]" />
			</div>
			<div className="mb-3 flex items-center bg-yellow-200/20 px-2 py-1 rounded-md w-fit">
				<div className="flex">
					{[...Array(item.rating)].map((_, i) => (
						<Star
							key={i}
							className="w-4 h-4 text-yellow-400"
							fill="currentColor"
						/>
					))}
				</div>
				{/* TODO: need a float like style => 5.0 instead of 5, etc */}
				<span className="ml-2 text-xs text-yellow-700 font-medium">
					{item.rating}.0/5.0
				</span>
			</div>
			<p className="text-muted-foreground mb-4 italic">{item.testimonial}</p>
			<div className="mt-auto flex items-center">
				{item.image && (
					<div className="mr-3">
						<img
							src={item.image}
							alt={item.name}
							className="w-10 h-10 rounded-full object-cover"
						/>
					</div>
				)}
				<div>
					<h4 className="font-semibold text-foreground flex items-center">
						{item.name}
						<span
							className="ml-2 text-xl"
							title={`Client from ${getCountryName(item.country)}`}
						>
							{getFlagEmoji(item.country)}
						</span>
					</h4>
					<p className="text-sm text-muted-foreground">
						{item.position}, {item.company}
					</p>
				</div>
			</div>
		</div>
	);
};

export const Testimonials: React.FC = () => {
	return (
		<section id="testimonials" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Client Testimonials
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						What my clients from around the world say about my work and
						collaboration
					</p>
					<div className="flex items-center justify-center mt-2 mb-1">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="w-5 h-5 text-yellow-400"
									fill="currentColor"
								/>
							))}
						</div>
						<span className="ml-2 text-sm font-medium">
							Consistently delivering exceptional client satisfaction
						</span>
					</div>
					<p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-2">
						I've had the privilege of working with clients from diverse cultural
						backgrounds across multiple continents, bringing global perspective
						and adaptability to every project.
					</p>
					<div className="mt-3 h-1 w-20 bg-primary mx-auto rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonialData.map((testimonial) => (
						<TestimonialCard key={testimonial.id} item={testimonial} />
					))}
				</div>
			</div>
		</section>
	);
};
