export {};

declare global {
	interface TurnstileRenderParameters {
		sitekey: string;
		action?: string;
		theme?: "auto" | "light" | "dark";
		callback?: (token: string) => void;
		"expired-callback"?: () => void;
		"error-callback"?: () => void;
		"timeout-callback"?: () => void;
		language?: string;
		tabindex?: number;
		retry?: "auto" | "never";
		"retry-interval"?: number;
		size?: "normal" | "compact" | "flexible";
		appearance?: "always" | "execute" | "interaction-only";
		execution?: "render" | "execute";
	}

	interface Window {
		turnstile?: {
			render: (
				container: string | HTMLElement,
				params: TurnstileRenderParameters,
			) => string | undefined;
			reset: (widgetId?: string) => void;
			remove: (widgetId?: string) => void;
			getResponse: (widgetId?: string) => string | undefined;
		};
	}
}
