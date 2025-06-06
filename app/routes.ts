import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("is-ssr", "routes/home.tsx"),
] satisfies RouteConfig;
