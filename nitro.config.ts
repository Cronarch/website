import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
	routeRules: {
		// Assets have content hashes - safe to cache long-term
		"/assets/**": {
			headers: { "Cache-Control": "public, max-age=31536000, immutable" },
		},
		// HTML must never be cached - each deploy has new asset hashes
		"/**": {
			headers: {
				"Cache-Control": "no-cache, no-store, must-revalidate",
			},
		},
	},
});
