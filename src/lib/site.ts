export const site = {
	url: "https://diveindonesia.org",
	name: "IDCA",
	legalName: "Indonesia Divetourism Company Association",
	legalNameId: "Perkumpulan Usaha Wisata Selam Indonesia",
	email: "infopuwsi@gmail.com",
	whatsappDisplay: "+62 812 1234 3407",
	whatsappE164: "6281212343407",
	pressName: "Martin Wetik",
	pressPhone: "+62 812 8119 7303",
	street: "Jl. Tebet Timur Raya No. 2",
	locality: "Jakarta Selatan 12820",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappE164}`;

export function mailtoHref(subject: string, body: string) {
	return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
