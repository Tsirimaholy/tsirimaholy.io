import type { Route } from "./+types";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url);
	const origin = url.origin;

	const robotsTxt = `User-agent: *
Allow: /

# Important pages
Allow: /blog
Allow: /#about
Allow: /#service
Allow: /#skills
Allow: /#projects
Allow: /#testimonials
Allow: /#contact

# Block unnecessary pages (add any admin or private routes here)
# Disallow: /admin
# Disallow: /api

# Sitemap location
Sitemap: ${origin}/sitemap.xml

# Crawl delay (optional - helps prevent overloading your server)
Crawl-delay: 1`;

	return new Response(robotsTxt, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
			"Cache-Control": "public, max-age=86400, s-maxage=604800",
		},
	});
};