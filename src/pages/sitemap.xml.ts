import type { APIRoute } from "astro";
import { getEmDashCollection } from "emdash";

const staticPaths = ["/", "/about", "/members", "/news", "/membership", "/contact", "/login", "/privacy"];

export const GET: APIRoute = async () => {
	const [{ entries: members }, { entries: activities }] = await Promise.all([
		getEmDashCollection("members", { locale: "en" }),
		getEmDashCollection("activities", { locale: "en" }),
	]);
	const paths = [
		...staticPaths,
		...members.map((member) => `/members/${member.data.slug}`),
		...activities.map((article) => `/news/${article.data.slug}`),
	];
	const urls = paths.flatMap((path) => {
		const en = path === "/" ? "https://diveindonesia.org/" : `https://diveindonesia.org${path}`;
		const id = path === "/" ? "https://diveindonesia.org/id" : `https://diveindonesia.org/id${path}`;
		return [en, id];
	});
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((loc) => `  <url><loc>${loc}</loc></url>`)
		.join("\n")}\n</urlset>\n`;
	return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
