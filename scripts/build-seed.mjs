import { writeFileSync } from "node:fs";
import { members } from "./members-data.mjs";

const regions = ["Raja Ampat", "Komodo", "Bali", "Sulawesi", "Banda Sea", "Jabodetabek", "Other regions"];
const types = ["Liveaboard", "Dive resort or center", "Day-trip operator", "Travel specialist"];
const categories = ["Advocacy", "Association"];

const photo = (id, alt) => ({
	$media: {
		file: `media/${id}.jpg`,
		alt,
		filename: `${id}.jpg`,
	},
});

function paragraph(text, key) {
	return {
		_type: "block",
		_key: key,
		style: "normal",
		children: [{ _type: "span", _key: `${key}-s`, text }],
	};
}

function heading(text, key) {
	return {
		_type: "block",
		_key: key,
		style: "h2",
		children: [{ _type: "span", _key: `${key}-s`, text }],
	};
}

function quote(text, key) {
	return {
		_type: "block",
		_key: key,
		style: "blockquote",
		children: [{ _type: "span", _key: `${key}-s`, text }],
	};
}

function numbered(items, prefix) {
	return items.map((text, index) => ({
		_type: "block",
		_key: `${prefix}-${index}`,
		style: "normal",
		listItem: "number",
		level: 1,
		children: [{ _type: "span", _key: `${prefix}-${index}-s`, text }],
	}));
}

const letter = {
	en: [
		paragraph(
			"On World Ocean Day, 8 June 2025, IDCA wrote to President Prabowo Subianto. The letter asks for nickel mining permits across Raja Ampat to be revoked permanently, not suspended while the same activity remains possible.",
			"p1",
		),
		paragraph(
			"Letter 001/EXT/IDCA/VI/2025 is signed by Chair Ebram Harimurti and Secretary General Rani Hernanda. It notes that more than 60 percent of Indonesia’s tourism appeal comes from nature, and treats Raja Ampat as both a national asset and a global conservation site. The letter cites at least 30,000 visitors in 2024, about 70 percent of them from abroad, contributing roughly Rp 150 billion a year in district revenue — before the wider local economy is counted.",
			"p2",
		),
		paragraph(
			"The mines are not inside the core marine park. They sit in the buffer around Kawe and Wayag, and along routes used by marine life. Sediment from that work can still reach Wayag, block light to the reef, and disturb places such as the manta corridor at Eagle Rock. IDCA’s point is that a world-class dive site does not survive that kind of runoff, and that Indonesia’s reputation as a diving destination is tied to this one.",
			"p3",
		),
		quote("Extractive industry such as nickel mining is a contradiction in a place with this much ecological value.", "q1"),
		paragraph("— Ebram Harimurti, Chair", "q1b"),
		paragraph(
			"The letter does not argue against nickel processing as a national strategy. It argues that not every coastline is a suitable place for it, and that Raja Ampat is one of the places that is not.",
			"p4",
		),
		heading("Four requests in the letter", "h1"),
		...numbered(
			[
				"Permanently revoke mining permits across Raja Ampat, then reorganize the area around its long-term ecological value.",
				"Expand no-take and buffer protection between Kawe and Wayag, and enforce conservation zoning that bars extractive industry.",
				"Support a green economy and community-based ecotourism as the long-term alternative.",
				"Involve Indigenous communities and local fishers in watching over and managing the area.",
			],
			"d",
		),
		paragraph(
			"Press contact: Martin Wetik, public relations and inter-agency, +62 812 8119 7303. Secretariat: Jl. Tebet Timur Raya No. 2, Jakarta Selatan 12820.",
			"p5",
		),
	],
	id: [
		paragraph(
			"Pada Hari Laut Sedunia, 8 Juni 2025, IDCA menulis kepada Presiden Prabowo Subianto. Surat itu meminta izin tambang nikel di seluruh Raja Ampat dicabut secara permanen, bukan ditangguhkan sementara kegiatan yang sama tetap mungkin dilanjutkan.",
			"p1",
		),
		paragraph(
			"Surat 001/EXT/IDCA/VI/2025 ditandatangani Ketua Umum Ebram Harimurti dan Sekretaris Jenderal Rani Hernanda. Surat itu mencatat bahwa lebih dari 60 persen daya tarik pariwisata Indonesia berasal dari alam, dan menempatkan Raja Ampat sebagai aset nasional sekaligus situs konservasi global. Surat mengutip sedikitnya 30.000 pengunjung pada 2024, sekitar 70 persen di antaranya dari luar negeri, dengan kontribusi sekitar Rp 150 miliar per tahun bagi pendapatan daerah — sebelum ekonomi lokal yang lebih luas dihitung.",
			"p2",
		),
		paragraph(
			"Tambang itu tidak berada di inti kawasan konservasi perairan. Lokasinya di zona penyangga sekitar Kawe dan Wayag, serta di jalur yang dipakai satwa laut. Sedimen dari kegiatan itu tetap bisa mencapai Wayag, menghalangi cahaya ke terumbu, dan mengganggu tempat seperti koridor manta di Eagle Rock. Pendirian IDCA: situs selam kelas dunia tidak bertahan menghadapi limpasan semacam itu, dan reputasi Indonesia sebagai tujuan selam terkait erat dengan tempat ini.",
			"p3",
		),
		quote("Industri ekstraktif seperti tambang nikel adalah kontradiksi di tempat dengan nilai ekologis setinggi ini.", "q1"),
		paragraph("— Ebram Harimurti, Ketua Umum", "q1b"),
		paragraph(
			"Surat ini tidak menolak pengolahan nikel sebagai strategi nasional. Yang ditolak adalah anggapan bahwa setiap pesisir cocok untuk itu. Raja Ampat adalah salah satu tempat yang tidak cocok.",
			"p4",
		),
		heading("Empat permintaan dalam surat", "h1"),
		...numbered(
			[
				"Mencabut izin tambang di seluruh Raja Ampat secara permanen, lalu menata ulang kawasan berdasarkan nilai ekologis jangka panjang.",
				"Memperluas zona larang ambil dan zona penyangga antara Kawe dan Wayag, serta menegakkan zonasi konservasi yang melarang kegiatan ekstraktif.",
				"Mendorong ekonomi hijau dan ekowisata berbasis masyarakat sebagai alternatif jangka panjang.",
				"Melibatkan masyarakat adat dan nelayan lokal dalam pengawasan dan pengelolaan kawasan.",
			],
			"d",
		),
		paragraph(
			"Narahubung pers: Martin Wetik, humas dan antarlembaga, +62 812 8119 7303. Sekretariat: Jl. Tebet Timur Raya No. 2, Jakarta Selatan 12820.",
			"p5",
		),
	],
};

const congress = {
	en: [
		paragraph(
			"At its fourth national congress in Jakarta in February 2025, the association elected Ebram Harimurti as chair for 2025–2030. He succeeds Arief Yudo Wibowo.",
			"p1",
		),
		paragraph(
			"The congress changed the public acronym from PUWSI — Perkumpulan Usaha Wisata Selam Indonesia — to IDCA, adopted a new logo, and updated the organization’s rules. The legal name of the association remains Perkumpulan Usaha Wisata Selam Indonesia.",
			"p2",
		),
		paragraph(
			"Ebram told the congress that many dive operators had closed in the years after the pandemic, and that 77 member companies were still operating. He described the board’s job as making membership more useful, including help for companies completing the legal documents their businesses require, and working more closely with the ministries responsible for marine affairs and tourism.",
			"p3",
		),
		paragraph(
			"The line he set for the term is a dive industry that can keep operating while holding the economic value of the trips and the condition of the sea in the same frame.",
			"p4",
		),
	],
	id: [
		paragraph(
			"Pada Munas IV di Jakarta pada Februari 2025, asosiasi memilih Ebram Harimurti sebagai ketua umum untuk masa bakti 2025–2030. Ia menggantikan Arief Yudo Wibowo.",
			"p1",
		),
		paragraph(
			"Munas mengubah singkatan publik dari PUWSI — Perkumpulan Usaha Wisata Selam Indonesia — menjadi IDCA, memakai logo baru, dan memperbarui aturan organisasi. Nama hukum asosiasi tetap Perkumpulan Usaha Wisata Selam Indonesia.",
			"p2",
		),
		paragraph(
			"Ebram menyampaikan kepada munas bahwa banyak operator selam tutup pada tahun-tahun setelah pandemi, dan 77 perusahaan anggota masih beroperasi. Ia menggambarkan tugas pengurus sebagai membuat keanggotaan lebih berguna, termasuk membantu perusahaan melengkapi dokumen legalitas yang diperlukan usahanya, serta bekerja lebih dekat dengan kementerian yang mengurus kelautan dan pariwisata.",
			"p3",
		),
		paragraph(
			"Arah yang ia tetapkan untuk masa bakti ini adalah industri selam yang tetap bisa berjalan, dengan nilai ekonomi perjalanan dan kondisi laut diletakkan dalam satu kerangka.",
			"p4",
		),
	],
};

const activities = [
	{
		slug: "raja-ampat-open-letter",
		date: "2025-06-08T00:00:00.000Z",
		category: "Advocacy",
		image: "photo-1551244072-5d12893278ab",
		alt: { en: "Sea turtle swimming over a coral reef", id: "Penyu berenang di atas terumbu karang" },
		title: {
			en: "Open letter: revoke nickel mining permits in Raja Ampat for good",
			id: "Surat terbuka: cabut izin tambang nikel di Raja Ampat secara permanen",
		},
		excerpt: {
			en: "On World Ocean Day, IDCA asked President Prabowo Subianto to revoke nickel mining permits across Raja Ampat, not merely pause them.",
			id: "Pada Hari Laut Sedunia, IDCA meminta Presiden Prabowo Subianto mencabut izin tambang nikel di seluruh Raja Ampat, bukan sekadar menundanya.",
		},
		body: letter,
	},
	{
		slug: "munas-iv",
		date: "2025-02-15T00:00:00.000Z",
		category: "Association",
		image: "photo-1559827260-dc66d52bef19",
		alt: { en: "Clear tropical water over a reef", id: "Air tropis yang jernih di atas terumbu" },
		title: {
			en: "Munas IV: the dive-operator association takes the name IDCA",
			id: "Munas IV: asosiasi operator selam memakai nama IDCA",
		},
		excerpt: {
			en: "Members elected Ebram Harimurti as chair for 2025–2030, retired the PUWSI acronym, and counted 77 companies still operating.",
			id: "Anggota memilih Ebram Harimurti sebagai ketua umum untuk 2025–2030, menanggalkan singkatan PUWSI, dan mencatat 77 perusahaan yang masih beroperasi.",
		},
		body: congress,
	},
];

function memberEntries(member) {
	const shared = {
		regions: member.regions,
		operation_type: member.type,
		featured: Boolean(member.featured),
		...(member.website ? { website: member.website } : {}),
		...(member.email ? { email: member.email } : {}),
		...(member.whatsapp ? { whatsapp: member.whatsapp } : {}),
	};
	return ["en", "id"].map((locale) => ({
		id: `member-${member.slug}-${locale}`,
		slug: member.slug,
		status: "published",
		locale,
		...(locale === "id" ? { translationOf: `member-${member.slug}-en` } : {}),
		data: {
			title: member.name,
			summary: member.summary[locale],
			services: member.services[locale],
			...shared,
			...(member.logo
				? {
						featured_image: {
							$media: {
								file: `media/logos/${member.logo}`,
								alt: member.name,
								filename: member.logo,
							},
						},
					}
				: {}),
		},
	}));
}

function activityEntries(article) {
	const shared = { category: article.category, event_date: article.date };
	return ["en", "id"].map((locale) => ({
		id: `activity-${article.slug}-${locale}`,
		slug: article.slug,
		status: "published",
		locale,
		...(locale === "id" ? { translationOf: `activity-${article.slug}-en` } : {}),
		data: {
			title: article.title[locale],
			excerpt: article.excerpt[locale],
			body: article.body[locale],
			...shared,
			featured_image: photo(article.image, article.alt[locale]),
		},
	}));
}

const seed = {
	$schema: "https://emdashcms.com/seed.schema.json",
	version: "1",
	defaultLocale: "en",
	meta: {
		name: "IDCA",
		description: "Indonesia Divetourism Company Association. Member listings follow the secretariat directory.",
		author: "IDCA",
	},
	settings: {
		title: "IDCA",
		tagline: "Indonesia Divetourism Company Association",
		timezone: "Asia/Jakarta",
		url: "https://diveindonesia.org",
	},
	collections: [
		{
			slug: "members",
			label: "Members",
			labelSingular: "Member",
			description: "Directory listings for IDCA member companies.",
			urlPattern: "/members/{slug}",
			titleField: "title",
			supports: ["drafts", "revisions", "preview", "search", "seo"],
			sortOrder: 1,
			fields: [
				{ slug: "title", label: "Company name / Nama perusahaan", type: "string", required: true, searchable: true },
				{ slug: "summary", label: "About / Tentang", type: "text", searchable: true },
				{ slug: "services", label: "Services / Layanan", type: "text" },
				{ slug: "regions", label: "Regions / Wilayah", type: "multiSelect", translatable: false, validation: { options: regions } },
				{ slug: "operation_type", label: "Type of operation / Jenis usaha", type: "select", translatable: false, validation: { options: types } },
				{ slug: "website", label: "Website", type: "url", translatable: false },
				{ slug: "email", label: "Email", type: "string", translatable: false },
				{ slug: "whatsapp", label: "WhatsApp", type: "string", translatable: false },
				{ slug: "featured_image", label: "Photo / Foto", type: "image", translatable: false },
				{ slug: "featured", label: "Featured on the home page / Tampil di beranda", type: "boolean", translatable: false },
			],
		},
		{
			slug: "activities",
			label: "Activities",
			labelSingular: "Activity",
			description: "These entries appear on the public News page. Seeded articles are placeholders the secretariat can edit or replace.",
			urlPattern: "/news/{slug}",
			titleField: "title",
			dateField: "event_date",
			supports: ["drafts", "revisions", "preview", "search", "seo"],
			sortOrder: 2,
			fields: [
				{ slug: "title", label: "Title / Judul", type: "string", required: true, searchable: true },
				{ slug: "excerpt", label: "Excerpt / Ringkasan", type: "text", searchable: true },
				{ slug: "body", label: "Body / Isi", type: "portableText", searchable: true },
				{ slug: "category", label: "Category / Kategori", type: "select", translatable: false, validation: { options: categories } },
				{ slug: "event_date", label: "Date / Tanggal", type: "datetime", translatable: false, indexed: true },
				{ slug: "featured_image", label: "Photo / Foto", type: "image", translatable: false },
			],
		},
	],
	content: {
		members: members.flatMap(memberEntries),
		activities: activities.flatMap(activityEntries),
	},
};

writeFileSync(new URL("../seed/seed.json", import.meta.url), `${JSON.stringify(seed, null, "\t")}\n`);
console.log(`Wrote seed with ${seed.content.members.length} member rows and ${seed.content.activities.length} activity rows.`);
