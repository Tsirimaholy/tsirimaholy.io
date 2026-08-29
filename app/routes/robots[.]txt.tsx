import type { Route } from "./+types";
import { SITE_URL } from "~/lib/seo";

export const loader = async (_args: Route.LoaderArgs) => {
	const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

	return new Response(robotsTxt, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
			"Cache-Control": "public, max-age=86400, s-maxage=604800",
		},
	});
};
