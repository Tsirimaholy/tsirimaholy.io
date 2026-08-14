import { data } from "react-router";
import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/blogs";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}
export function loader(_args: Route.LoaderArgs) {
	return data({ name: "John", createdAt: new Date() });
}
export default function Blog() {
	return <Welcome />;
}
