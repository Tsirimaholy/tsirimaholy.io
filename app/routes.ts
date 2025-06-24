import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/main-layout.tsx", [
        index("routes/index.tsx"),
        route("blog", "routes/blog.tsx"),
    ]),
    route("blog/:id", "routes/blog-details.tsx"),
] satisfies RouteConfig;
