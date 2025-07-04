import type { Config } from "@react-router/dev/config";
import { href } from "react-router";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	prerender: [href("/")],
	presets: [vercelPreset()],
} satisfies Config;
