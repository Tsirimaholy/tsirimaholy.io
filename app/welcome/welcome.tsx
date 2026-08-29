import { ArrowLeft, PenLine } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Welcome() {
	return (
		<main className="flex min-h-[80vh] items-center justify-center px-6 pt-24 pb-12">
			<div className="max-w-xl text-center">
				<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
					<PenLine className="h-8 w-8" />
				</div>
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
					Writing in progress
				</p>
				<h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
					Engineering notes are coming soon
				</h1>
				<p className="mt-5 text-lg leading-relaxed text-muted-foreground">
					I am preparing practical articles about building MVPs, improving
					Django performance, and shipping reliable products.
				</p>
				<Button asChild variant="outline" className="mt-8">
					<Link to="/#projects">
						<ArrowLeft className="h-4 w-4" />
						Explore my projects
					</Link>
				</Button>
			</div>
		</main>
	);
}
