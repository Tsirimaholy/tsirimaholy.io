export interface SEOConfig {
	title: string;
	description: string;
	url?: string;
	image?: string;
	imageAlt?: string;
	type?: "website" | "article" | "profile";
	siteName?: string;
	locale?: string;
	keywords?: string[];
	author?: string;
	publishedTime?: string;
	modifiedTime?: string;
	twitterHandle?: string;
	noIndex?: boolean;
}

export interface StructuredDataPerson {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	image?: string;
	sameAs?: string[];
	knowsAbout?: string[];
	alumniOf?: {
		"@type": "Organization";
		name: string;
	};
	workLocation?: {
		"@type": "Place";
		name: string;
	};
}

export interface StructuredDataArticle {
	headline: string;
	description: string;
	image: string;
	datePublished: string;
	dateModified?: string;
	author: {
		"@type": "Person";
		name: string;
		url?: string;
	};
	publisher: {
		"@type": "Organization";
		name: string;
		logo?: {
			"@type": "ImageObject";
			url: string;
		};
	};
	url: string;
}

/**
 * Generate comprehensive meta tags for SEO
 */
export function generateMetaTags(config: SEOConfig) {
	const {
		title,
		description,
		url,
		image,
		imageAlt,
		type = "website",
		siteName = "Tsirimaholy Portfolio",
		locale = "en_US",
		keywords = [],
		author,
		publishedTime,
		modifiedTime,
		twitterHandle,
		noIndex = false,
	} = config;

	const metaTags = [
		{ title },
		{ name: "description", content: description },
		{ name: "viewport", content: "width=device-width, initial-scale=1.0" },
		{ name: "theme-color", content: "#3b82f6" },
	];

	// Add keywords if provided
	if (keywords.length > 0) {
		metaTags.push({ name: "keywords", content: keywords.join(", ") });
	}

	// Add author if provided
	if (author) {
		metaTags.push({ name: "author", content: author });
	}

	// Robots meta tag
	if (noIndex) {
		metaTags.push({ name: "robots", content: "noindex, nofollow" });
	} else {
		metaTags.push({ name: "robots", content: "index, follow" });
	}

	// Canonical URL
	if (url) {
		metaTags.push({ name: "canonical", content: url });
	}

	// Open Graph tags
	metaTags.push(
		{ property: "og:type", content: type },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:site_name", content: siteName },
		{ property: "og:locale", content: locale }
	);

	if (url) {
		metaTags.push({ property: "og:url", content: url });
	}

	if (image) {
		metaTags.push(
			{ property: "og:image", content: image },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:alt", content: imageAlt || title }
		);
	}

	// Article-specific Open Graph tags
	if (type === "article") {
		if (publishedTime) {
			metaTags.push({ property: "article:published_time", content: publishedTime });
		}
		if (modifiedTime) {
			metaTags.push({ property: "article:modified_time", content: modifiedTime });
		}
		if (author) {
			metaTags.push({ property: "article:author", content: author });
		}
	}

	// Twitter Card tags
	metaTags.push(
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description }
	);

	if (image) {
		metaTags.push(
			{ name: "twitter:image", content: image },
			{ name: "twitter:image:alt", content: imageAlt || title }
		);
	}

	if (twitterHandle) {
		metaTags.push(
			{ name: "twitter:creator", content: twitterHandle },
			{ name: "twitter:site", content: twitterHandle }
		);
	}

	// Additional SEO tags
	metaTags.push(
		{ name: "revisit-after", content: "7 days" },
		{ name: "rating", content: "general" },
		{ name: "distribution", content: "global" }
	);

	return metaTags;
}

/**
 * Generate structured data for a person (portfolio owner)
 */
export function generatePersonStructuredData(data: StructuredDataPerson) {
	return {
		"script:ld+json": {
			"@context": "https://schema.org",
			"@type": "Person",
			...data,
		},
	};
}

/**
 * Generate structured data for an article/blog post
 */
export function generateArticleStructuredData(data: StructuredDataArticle) {
	return {
		"script:ld+json": {
			"@context": "https://schema.org",
			"@type": "Article",
			...data,
		},
	};
}

/**
 * Generate structured data for a website
 */
export function generateWebsiteStructuredData(name: string, url: string, description: string) {
	return {
		"script:ld+json": {
			"@context": "https://schema.org",
			"@type": "WebSite",
			name,
			url,
			description,
			potentialAction: {
				"@type": "SearchAction",
				target: `${url}/search?q={search_term_string}`,
				"query-input": "required name=search_term_string",
			},
		},
	};
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
	return {
		"script:ld+json": {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: items.map((item, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
				item: item.url,
			})),
		},
	};
}

/**
 * Extract domain from URL
 */
export function getDomainFromUrl(url: string): string {
	try {
		return new URL(url).origin;
	} catch {
		return url;
	}
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(baseUrl: string, path: string): string {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${baseUrl.replace(/\/$/, "")}${cleanPath}`;
}

/**
 * Sanitize and truncate description for meta tags
 */
export function sanitizeDescription(description: string, maxLength = 160): string {
	// Remove HTML tags and extra whitespace
	const cleaned = description.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	
	// Truncate if necessary
	if (cleaned.length <= maxLength) {
		return cleaned;
	}
	
	// Find the last complete word within the limit
	const truncated = cleaned.substring(0, maxLength);
	const lastSpaceIndex = truncated.lastIndexOf(" ");
	
	return lastSpaceIndex > 0 
		? `${truncated.substring(0, lastSpaceIndex)}...`
		: `${truncated}...`;
}

/**
 * Generate image URL with proper fallback
 */
export function generateImageUrl(baseUrl: string, imagePath?: string, fallback = "/og-image.jpg"): string {
	if (!imagePath) {
		return `${baseUrl}${fallback}`;
	}
	
	// If imagePath is already a full URL, return as is
	if (imagePath.startsWith("http")) {
		return imagePath;
	}
	
	// Ensure path starts with /
	const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
	return `${baseUrl}${cleanPath}`;
}

/**
 * Default SEO configuration for the portfolio
 */
export const DEFAULT_SEO_CONFIG: Partial<SEOConfig> = {
	siteName: "Tsirimaholy Portfolio",
	locale: "en_US",
	type: "website",
	author: "Tsirimaholy",
	twitterHandle: "@tsirimaholy",
	keywords: [
		"fullstack developer",
		"react developer",
		"nodejs",
		"typescript",
		"web development",
		"software engineer",
		"portfolio",
		"javascript",
		"frontend",
		"backend",
	],
};