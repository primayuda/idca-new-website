import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const { pathname, search } = context.url;
	if (pathname === "/en" || pathname.startsWith("/en/")) {
		const stripped = pathname.replace(/^\/en/, "") || "/";
		return context.redirect(`${stripped}${search}`, 308);
	}
	return next();
});
