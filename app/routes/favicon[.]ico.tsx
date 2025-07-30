import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Route } from "./+types";

export const loader = async ({ request }: Route.LoaderArgs) => {
	try {
		// Read the favicon file from the public directory
		const faviconPath = join(process.cwd(), "public", "favicon.ico");
		const faviconBuffer = await readFile(faviconPath);

		// Return the favicon with proper headers
		return new Response(faviconBuffer, {
			status: 200,
			headers: {
				"Content-Type": "image/x-icon",
				"Content-Length": faviconBuffer.length.toString(),
				// Cache for 1 year (favicons rarely change)
				"Cache-Control": "public, max-age=31536000, immutable",
				// Add ETag for better caching
				"ETag": `"favicon-${faviconBuffer.length}"`,
				// Security headers
				"X-Content-Type-Options": "nosniff",
			},
		});
	} catch (error) {
		// If favicon doesn't exist, return a 404
		console.error("Error serving favicon:", error);
		return new Response("Favicon not found", {
			status: 404,
			headers: {
				"Content-Type": "text/plain",
			},
		});
	}
};