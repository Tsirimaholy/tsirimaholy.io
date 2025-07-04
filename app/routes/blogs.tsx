import type { Route } from "./+types/blogs";
import { Welcome } from "~/welcome/welcome";
import { data } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}
export function loader({}: Route.LoaderArgs) {
	return data({ name: "John", createdAt: new Date() });
}
export default function Blog({ loaderData }: Route.ComponentProps) {
	return <Welcome />;
}
