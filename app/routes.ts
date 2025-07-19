import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("routes/main-layout.tsx", [
		index("routes/index.tsx"),
		...prefix("blog", [
			index("routes/blogs.tsx"),
			route(":id", "routes/blog-details.tsx"),
		]),
	]),
] satisfies RouteConfig;
