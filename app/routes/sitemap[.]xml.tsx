import type { Route } from "./+types";
import { SITE_URL } from "~/lib/seo";

export const loader = async (_args: Route.LoaderArgs) => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${SITE_URL}/</loc>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
	<url>
		<loc>${SITE_URL}/about</loc>
		<changefreq>monthly</changefreq>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>${SITE_URL}/blog</loc>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>
</urlset>`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600, s-maxage=86400",
		},
	});
};
