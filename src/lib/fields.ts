export function str(value: unknown) {
	return typeof value === "string" ? value : undefined;
}

export function img(value: unknown) {
	if (!value || typeof value !== "object") return undefined;
	return value as { id: string; src?: string; alt?: string; width?: number; height?: number };
}
