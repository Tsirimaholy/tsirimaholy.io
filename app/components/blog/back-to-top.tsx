import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const updateVisibility = () => setVisible(window.scrollY > 400);
		updateVisibility();
		window.addEventListener("scroll", updateVisibility, { passive: true });
		return () => window.removeEventListener("scroll", updateVisibility);
	}, []);

	if (!visible) return null;

	return (
		<button
			type="button"
			aria-label="Back to top"
			title="Back to top"
			className="fixed bottom-6 right-6 z-40 flex size-11 cursor-pointer items-center justify-center border border-gray-300 bg-white text-gray-700 shadow-md transition-colors hover:border-blue-500 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
						? "instant"
						: "smooth",
				});
			}}
		>
			<ArrowUp className="size-5" aria-hidden="true" />
		</button>
	);
}
