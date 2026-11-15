import { defineMiddleware } from "astro:middleware";

const COOKIE = "idca-locale";

// Paths that belong to the English site and have an Indonesian twin under /id.
const PUBLIC = /^\/($|about|members|news|membership|contact|login|privacy|404)(\/|$)/;

export const onRequest = defineMiddleware((context, next) => {
	const { pathname, search } = context.url;

	if (pathname === "/en" || pathname.startsWith("/en/")) {
		const stripped = pathname.replace(/^\/en/, "") || "/";
		return context.redirect(`${stripped}${search}`, 308);
	}

	// Internal routes (EmDash admin, media, assets) are locale-free.
	if (!PUBLIC.test(pathname)) return next();

	const chosen = context.cookies.get(COOKIE)?.value;

	// First visit: no stored choice, so send the visitor to Indonesian.
	if (!chosen && !pathname.startsWith("/id")) {
		context.cookies.set(COOKIE, "id", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
		const target = pathname === "/" ? "/id" : `/id${pathname}`;
		return context.redirect(`${target}${search}`, 302);
	}

	// Returning visitor whose stored choice differs from the page language.
	if (chosen === "id" && !pathname.startsWith("/id")) {
		const target = pathname === "/" ? "/id" : `/id${pathname}`;
		return context.redirect(`${target}${search}`, 302);
	}
	if (chosen === "en" && pathname.startsWith("/id")) {
		const stripped = pathname.replace(/^\/id/, "") || "/";
		return context.redirect(`${stripped}${search}`, 302);
	}

	return next();
});
