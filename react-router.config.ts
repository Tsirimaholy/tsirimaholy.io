import type { Config } from "@react-router/dev/config";
import { href } from "react-router";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  prerender: [
    href("/"),
  ],
} satisfies Config;
