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
	route("contact", "routes/contact.tsx"),
	layout("routes/main-layout.tsx", [
		index("routes/index.tsx"),
		route("about", "routes/about.tsx"),
		...prefix("blog", [
			index("routes/blogs.tsx"),
			route(
				"django-n-plus-one-problem",
				"routes/django-n-plus-one-problem.tsx",
			),
		]),
	]),
] satisfies RouteConfig;
