import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	route("robots.txt", "routes/robots[.]txt.tsx"),
	route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
	layout("routes/main-layout.tsx", [
		index("routes/index.tsx"),
		...prefix("blog", [index("routes/blogs.tsx")]),
	]),
] satisfies RouteConfig;
