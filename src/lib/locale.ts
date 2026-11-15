export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
	return value === "en" || value === "id";
}

export function barePath(pathname: string) {
	if (pathname === "/id") return "/";
	if (pathname.startsWith("/id/")) return pathname.slice(3) || "/";
	return pathname;
}

export function localePath(locale: Locale, path = "/") {
	const clean = path.startsWith("/") ? path : `/${path}`;
	if (locale === "en") return clean;
	return clean === "/" ? "/id" : `/id${clean}`;
}

export const regionOptions = [
	"Raja Ampat",
	"Komodo",
	"Bali",
	"Sulawesi",
	"Banda Sea",
	"Jabodetabek",
	"Other regions",
] as const;

export const typeOptions = [
	"Liveaboard",
	"Dive resort or center",
	"Day-trip operator",
	"Travel specialist",
] as const;

const regionId: Record<string, string> = {
	"Raja Ampat": "Raja Ampat",
	Komodo: "Komodo",
	Bali: "Bali",
	Sulawesi: "Sulawesi",
	"Banda Sea": "Laut Banda",
	Jabodetabek: "Jabodetabek",
	"Other regions": "Wilayah lain",
};

const typeId: Record<string, string> = {
	Liveaboard: "Liveaboard",
	"Dive resort or center": "Resort atau pusat selam",
	"Day-trip operator": "Operator day trip",
	"Travel specialist": "Spesialis perjalanan",
};

const categoryId: Record<string, string> = {
	Advocacy: "Advokasi",
	Association: "Asosiasi",
};

export function labelFor(locale: Locale, value: string | undefined, kind: "region" | "type" | "category") {
	if (!value) return "";
	if (locale === "en") return value;
	const map = kind === "region" ? regionId : kind === "type" ? typeId : categoryId;
	return map[value] ?? value;
}

export function regionList(locale: Locale, values: unknown) {
	const list = Array.isArray(values) ? values.filter((item): item is string => typeof item === "string") : [];
	return list.map((item) => labelFor(locale, item, "region")).join(", ");
}

export function asDate(value: unknown) {
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
	if (typeof value === "string" || typeof value === "number") {
		const date = new Date(value);
		if (!Number.isNaN(date.getTime())) return date;
	}
	return null;
}

export function formatDate(locale: Locale, value: unknown) {
	const date = asDate(value);
	if (!date) return "";
	return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Asia/Jakarta",
	}).format(date);
}
