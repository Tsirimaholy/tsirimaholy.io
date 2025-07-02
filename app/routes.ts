import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
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
