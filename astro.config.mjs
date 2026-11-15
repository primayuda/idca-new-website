import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	site: "https://diveindonesia.org",
	adapter: node({ mode: "standalone" }),
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "id"],
		fallback: { id: "en" },
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	devToolbar: { enabled: false },
});
