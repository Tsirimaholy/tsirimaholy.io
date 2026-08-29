import { Welcome } from "~/welcome/welcome";
import { generateMetaTags, SITE_URL } from "~/lib/seo";
import type { Route } from "./+types/blogs";

export function meta(_args: Route.MetaArgs) {
	return generateMetaTags({
		title: "Blog | Tsirimaholy Harison Razanapanala",
		description:
			"Engineering notes and product development lessons from Tsirimaholy. Articles are coming soon.",
		url: `${SITE_URL}/blog`,
		image: `${SITE_URL}/og-image.jpg`,
		imageAlt: "Tsirimaholy Harison Razanapanala, Full-Stack Developer",
		noIndex: true,
	});
}
export default function Blog() {
	return <Welcome />;
}
