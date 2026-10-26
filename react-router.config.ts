import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { href } from "react-router";
import { blogPosts } from "./app/content/blog-posts";

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	prerender: [
		href("/"),
		href("/blog"),
		...blogPosts.map((post) => `/blog/${post.slug}`),
	],
	presets: [vercelPreset()],
} satisfies Config;
