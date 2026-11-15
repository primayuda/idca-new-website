/** IDCA member directory from the secretariat spreadsheet. Facts are limited to what was found on a public site or directory. */

function member(slug, name, extra = {}) {
	return {
		slug,
		name,
		regions: [],
		type: "Dive resort or center",
		...extra,
	};
}

const missing = {
	en: "IDCA member. A public website or listing for this name was not found.",
	id: "Anggota IDCA. Situs atau cantuman publik untuk nama ini tidak ditemukan.",
};

const services = {
	center: { en: "Dive center.", id: "Pusat selam." },
	resort: { en: "Dive resort.", id: "Resort selam." },
	liveaboard: { en: "Liveaboard diving.", id: "Selam liveaboard." },
	training: { en: "Dive training.", id: "Pelatihan selam." },
	trips: { en: "Dive trips.", id: "Perjalanan selam." },
	photo: { en: "Underwater photography trips.", id: "Perjalanan fotografi bawah air." },
	shop: { en: "Dive shop.", id: "Toko selam." },
};

export const members = [
	member("alexa-scuba", "Alexa Scuba", {
		regions: ["Sulawesi"],
		email: "alexascuba@gmail.com",
		whatsapp: "+62811405407",
		summary: {
			en: "Dive center in Kendari, Southeast Sulawesi, also running trips in the region.",
			id: "Pusat selam di Kendari, Sulawesi Tenggara, yang juga menjalankan perjalanan selam di wilayah itu.",
		},
		services: services.center,
	}),
	member("anak-selam", "Anak Selam", {
		regions: ["Jabodetabek"],
		email: "karyaanakselam@gmail.com",
		whatsapp: "+62811816044",
		summary: {
			en: "SSI dive center in Ciputat, South Tangerang, also connected with diving at Pulau Pramuka.",
			id: "Pusat selam SSI di Ciputat, Tangerang Selatan, yang juga terhubung dengan selam di Pulau Pramuka.",
		},
		services: services.center,
	}),
	member("arborek-diveshop", "Arborek diveshop", {
		regions: ["Raja Ampat"],
		featured: true,
		website: "https://www.arborekdiveshop.com/",
		logo: "arborek-diveshop.jpg",
		summary: {
			en: "Dive shop on Arborek Island, Raja Ampat.",
			id: "Pusat selam di Pulau Arborek, Raja Ampat.",
		},
		services: services.center,
	}),
	member("bali-ocean-reef-diver", "Bali Ocean Reef Diver", {
		regions: ["Bali"],
		website: "https://balioceanreef.com/",
		email: "balioceanreefdiver@gmail.com",
		whatsapp: "+62818829275",
		summary: {
			en: "PADI dive center in Pemuteran, Bali.",
			id: "Pusat selam PADI di Pemuteran, Bali.",
		},
		services: services.center,
	}),
	member("benetta-liveaboard", "Benetta Liveaboard", {
		regions: ["Raja Ampat", "Komodo", "Banda Sea"],
		type: "Liveaboard",
		website: "https://benettaliveaboard.com/",
		logo: "benetta-liveaboard.png",
		summary: {
			en: "Liveaboard sailing routes that include Raja Ampat, Komodo, Alor, and the Banda Sea.",
			id: "Liveaboard dengan rute yang mencakup Raja Ampat, Komodo, Alor, dan Laut Banda.",
		},
		services: services.liveaboard,
	}),
	member("biak-dive-resort", "Biak Dive Resort", {
		regions: ["Other regions"],
		whatsapp: "+6281330599930",
		summary: {
			en: "Dive resort in Biak. Public directories list it with Hotel Asana on Jalan Muhammad Yamin.",
			id: "Resort selam di Biak. Direktori publik mencantumkannya bersama Hotel Asana di Jalan Muhammad Yamin.",
		},
		services: services.resort,
	}),
	member("bina-samudera-indonesia", "Bina Samudera Indonesia/Scubatec Academy", {
		regions: ["Jabodetabek"],
		website: "https://www.scubatecacademy.com/",
		email: "info@scubatecacademy.com",
		whatsapp: "+6281291111307",
		summary: {
			en: "Scubatec Academy, a Jakarta dive school with offices in Kemayoran and a training pool in Grogol.",
			id: "Scubatec Academy, sekolah selam di Jakarta dengan kantor di Kemayoran dan kolam latihan di Grogol.",
		},
		services: services.training,
	}),
	member("bintan-black-coral", "Bintan Black Coral & DC", {
		regions: ["Other regions"],
		whatsapp: "+6281277845215",
		summary: {
			en: "Dive center in Teluk Bakau, Gunung Kijang, Bintan.",
			id: "Pusat selam di Teluk Bakau, Gunung Kijang, Bintan.",
		},
		services: services.center,
	}),
	member("blue-tuturuga", "Blue Tuturuga DC", {
		regions: ["Jabodetabek"],
		summary: {
			en: "Dive shop in North Jakarta, listed on Jalan Kelapa Sawit.",
			id: "Toko selam di Jakarta Utara, tercantum di Jalan Kelapa Sawit.",
		},
		services: services.shop,
	}),
	member("borneo-cha", "Borneo Cha DC", {
		regions: ["Other regions"],
		email: "ayuzarica0517@gmail.com",
		whatsapp: "+62813272949",
		summary: {
			en: "SSI dive center in Banjarbaru, South Kalimantan, running trips to Derawan and Maratua.",
			id: "Pusat selam SSI di Banjarbaru, Kalimantan Selatan, yang menjalankan perjalanan ke Derawan dan Maratua.",
		},
		services: services.center,
	}),
	member("cajoma-indonesia", "Cajoma Indonesia", {
		regions: ["Komodo"],
		type: "Liveaboard",
		website: "https://www.cajoma.co.id/",
		email: "info@cajoma.co.id",
		whatsapp: "+628113409008",
		logo: "cajoma-indonesia.png",
		summary: {
			en: "Phinisi and liveaboard operator based in Labuan Bajo, with a sales office in Surabaya.",
			id: "Operator phinisi dan liveaboard yang berbasis di Labuan Bajo, dengan kantor penjualan di Surabaya.",
		},
		services: services.liveaboard,
	}),
	member("derawan-indonesia-indah", "Derawan Indonesia Indah", {
		regions: ["Other regions"],
		summary: {
			en: "IDCA member. A company of this name is registered on Pulau Derawan. A public dive-operation website was not confirmed.",
			id: "Anggota IDCA. Perusahaan dengan nama ini terdaftar di Pulau Derawan. Situs operasi selam publik belum terkonfirmasi.",
		},
		services: services.center,
	}),
	member("divers-paradise-komodo", "Divers Paradise Komodo", {
		regions: ["Komodo"],
		website: "https://diversparadisekomodo.com/",
		email: "info@diversparadisekomodo.com",
		whatsapp: "+6281236704521",
		logo: "divers-paradise-komodo.png",
		summary: {
			en: "SSI dive center on Jalan Mutiara, Labuan Bajo.",
			id: "Pusat selam SSI di Jalan Mutiara, Labuan Bajo.",
		},
		services: services.center,
	}),
	member("diving-resort-noble-bali-tulamben", "Diving Resort Noble Bali Tulamben", {
		regions: ["Bali"],
		email: "nobledivetulamben@gmail.com",
		whatsapp: "+6282236365656",
		summary: {
			en: "PADI dive resort in Tulamben, Karangasem, Bali.",
			id: "Resort selam PADI di Tulamben, Karangasem, Bali.",
		},
		services: services.resort,
	}),
	member("dunia-selam", "Dunia Selam", {
		regions: ["Jabodetabek"],
		website: "https://www.dunia-selam.com/",
		email: "info@dunia-selam.com",
		summary: {
			en: "PT Dunia Selam Nusantara, an SSI dive center on Jalan Bangka Raya, South Jakarta.",
			id: "PT Dunia Selam Nusantara, pusat selam SSI di Jalan Bangka Raya, Jakarta Selatan.",
		},
		services: services.center,
	}),
	member("ena-dc-marine-adventure", "Ena DC & Marine Adventure", {
		regions: ["Bali"],
		summary: {
			en: "Dive center in Sanur, Bali, listed publicly as a PADI center.",
			id: "Pusat selam di Sanur, Bali, yang tercantum di publik sebagai pusat PADI.",
		},
		services: services.center,
	}),
	member("flying-fish-jakarta", "Flying Fish Jakarta", {
		regions: ["Jabodetabek"],
		website: "https://www.flyingfishjakarta.com/",
		email: "flyingfish.jakarta@gmail.com",
		logo: "flying-fish-jakarta.png",
		summary: {
			en: "SSI dive center in Jakarta, on Jalan Letjen M.T. Haryono.",
			id: "Pusat selam SSI di Jakarta, di Jalan Letjen M.T. Haryono.",
		},
		services: services.center,
	}),
	member("gea-divers", "Gea Divers", {
		regions: ["Jabodetabek"],
		website: "https://geadivers.id/",
		logo: "gea-divers.png",
		summary: {
			en: "Dive operator on Pulau Harapan, Kepulauan Seribu.",
			id: "Operator selam di Pulau Harapan, Kepulauan Seribu.",
		},
		services: services.center,
	}),
	member("global-dc-jakarta", "Global DC Jakarta", {
		regions: ["Jabodetabek"],
		website: "https://globaldive.co.id/",
		summary: {
			en: "Jakarta branch of PT Pusat Wisata Selam Global, which also operates centers outside the capital.",
			id: "Cabang Jakarta dari PT Pusat Wisata Selam Global, yang juga mengoperasikan pusat di luar ibu kota.",
		},
		services: services.center,
	}),
	member("global-dive-gorontalo", "Global Dive Gorontalo", {
		regions: ["Sulawesi"],
		website: "https://globaldive.co.id/",
		summary: {
			en: "Gorontalo branch of PT Pusat Wisata Selam Global.",
			id: "Cabang Gorontalo dari PT Pusat Wisata Selam Global.",
		},
		services: services.center,
	}),
	member("green-nirvana-resort-maratua", "Green Nirvana Resort Maratua", {
		regions: ["Other regions"],
		website: "https://www.greennirvanaresort.com/",
		email: "inquiry@greennirvanaresort.com",
		whatsapp: "+6282158298599",
		logo: "green-nirvana-resort-maratua.png",
		summary: {
			en: "PADI dive resort in Payung-Payung, Maratua, Berau. Dive operations are also called Kuhita Dive Maratua.",
			id: "Resort selam PADI di Payung-Payung, Maratua, Berau. Operasi selamnya juga disebut Kuhita Dive Maratua.",
		},
		services: services.resort,
	}),
	member("hamueco-raja-ampat-dive-resort", "Hamueco Raja Ampat Dive Resort", {
		regions: ["Raja Ampat"],
		website: "https://www.hamueco.com/",
		email: "info.hamueco@gmail.com",
		whatsapp: "+6282240070033",
		logo: "hamueco-raja-ampat-dive-resort.png",
		summary: {
			en: "Dive resort in Raja Ampat.",
			id: "Resort selam di Raja Ampat.",
		},
		services: services.resort,
	}),
	member("hobi-dive", "Hobi Dive", {
		regions: ["Jabodetabek"],
		website: "https://www.hobbydive.com/",
		email: "hobbydive@gmail.com",
		whatsapp: "+62811821331",
		logo: "hobi-dive.jpg",
		summary: {
			en: "PADI dive center in Alam Sutera, South Tangerang. The public site uses the name Hobby Dive.",
			id: "Pusat selam PADI di Alam Sutera, Tangerang Selatan. Situs publiknya memakai nama Hobby Dive.",
		},
		services: services.center,
	}),
	member("idea-mandiri-perkasa", "Idea Mandiri Perkasa", {
		summary: missing,
		services: services.center,
	}),
	member("idive-komodo", "iDIVE Komodo", {
		regions: ["Komodo"],
		website: "https://www.idivekomodoindonesia.com/",
		email: "dive@idivekomodoindonesia.com",
		whatsapp: "+628119111001",
		summary: {
			en: "SSI dive center on Jalan Lamtoro, Labuan Bajo, near Komodo Airport.",
			id: "Pusat selam SSI di Jalan Lamtoro, Labuan Bajo, dekat Bandara Komodo.",
		},
		services: services.center,
	}),
	member("instrument-dive-adventure", "Instrument Dive Adventure", {
		regions: ["Jabodetabek"],
		website: "https://idiventure.weebly.com/",
		summary: {
			en: "SSI dive center in Bekasi Timur. The public site uses the name iDiventure.",
			id: "Pusat selam SSI di Bekasi Timur. Situs publiknya memakai nama iDiventure.",
		},
		services: services.center,
	}),
	member("jakarta-diving-school", "Jakarta Diving School", {
		regions: ["Jabodetabek"],
		website: "https://www.jakartadivingschool.com/",
		email: "chandi_wijaya@yahoo.com",
		whatsapp: "+6281519990622",
		summary: {
			en: "PADI dive school on Jalan Pangeran Jayakarta, Central Jakarta.",
			id: "Sekolah selam PADI di Jalan Pangeran Jayakarta, Jakarta Pusat.",
		},
		services: services.training,
	}),
	member("jakarta-ocean-explorer", "Jakarta Ocean Explorer", {
		regions: ["Jabodetabek"],
		website: "https://jakartaoceanexplorer.com/",
		email: "jakartaoceanexplorer@gmail.com",
		whatsapp: "+6285808008000",
		logo: "jakarta-ocean-explorer.png",
		summary: {
			en: "SSI dive center on Jalan Pahlawan Revolusi, East Jakarta.",
			id: "Pusat selam SSI di Jalan Pahlawan Revolusi, Jakarta Timur.",
		},
		services: services.center,
	}),
	member("javascuba", "Javascuba", {
		regions: ["Jabodetabek"],
		website: "https://www.javascuba.com/",
		email: "info@javascuba.com",
		whatsapp: "+6281399459701",
		summary: {
			en: "PADI dive center in Jakarta, with a training pool at Gajah Mada Plaza and an office in Green Garden.",
			id: "Pusat selam PADI di Jakarta, dengan kolam latihan di Gajah Mada Plaza dan kantor di Green Garden.",
		},
		services: services.center,
	}),
	member("kafe-penyelaman", "Kafe Penyelaman", {
		regions: ["Jabodetabek"],
		website: "https://www.penyelaman.com/",
		logo: "kafe-penyelaman.png",
		summary: {
			en: "Marine-education and dive-training group publishing at penyelaman.com.",
			id: "Kelompok edukasi laut dan pelatihan selam yang menerbitkan penyelaman.com.",
		},
		services: services.training,
	}),
	member("kristal-klear-dive", "Kristal Klear Dive", {
		regions: ["Jabodetabek"],
		website: "https://www.kristalkleardive.com/",
		email: "kristalkleardive@gmail.com",
		whatsapp: "+628119196267",
		summary: {
			en: "PADI dive center at Hotel Kristal, Cilandak, South Jakarta.",
			id: "Pusat selam PADI di Hotel Kristal, Cilandak, Jakarta Selatan.",
		},
		services: services.center,
	}),
	member("kurabesi-dive", "Kurabesi Dive", {
		regions: ["Jabodetabek"],
		summary: {
			en: "Listed separately from Kurabesi Dive School. Public directories show one SSI center under the Kurabesi name in East Jakarta.",
			id: "Tercantum terpisah dari Kurabesi Dive School. Direktori publik menunjukkan satu pusat SSI dengan nama Kurabesi di Jakarta Timur.",
		},
		services: services.center,
	}),
	member("kurabesi-dive-school", "Kurabesi Dive School", {
		regions: ["Jabodetabek"],
		email: "info@kurabesidiveschool.com",
		whatsapp: "+628115415335",
		summary: {
			en: "SSI dive school in Cipinang Muara, Jatinegara, East Jakarta.",
			id: "Sekolah selam SSI di Cipinang Muara, Jatinegara, Jakarta Timur.",
		},
		services: services.training,
	}),
	member("laguna-gili-resort", "Laguna Gili Resort", {
		regions: ["Other regions"],
		summary: {
			en: "PADI dive center on Gili Trawangan, a member of the Gili Island Dive Association.",
			id: "Pusat selam PADI di Gili Trawangan, anggota Gili Island Dive Association.",
		},
		services: services.center,
	}),
	member("lampung-scuba", "Lampung Scuba", {
		regions: ["Other regions"],
		website: "https://www.pusatselamlampung.com/",
		email: "pusatselamlampung@gmail.com",
		summary: {
			en: "Pusat Selam Lampung, an SSI dive center in Labuhan Ratu, Bandar Lampung.",
			id: "Pusat Selam Lampung, pusat selam SSI di Labuhan Ratu, Bandar Lampung.",
		},
		services: services.center,
	}),
	member("liveaboard-cruise-indonesia", "Liveaboard Cruise Indonesia", {
		regions: ["Komodo", "Raja Ampat", "Sulawesi"],
		type: "Liveaboard",
		website: "https://www.liveaboard-indonesia.co.id/",
		email: "info@liveaboard-indonesia.co.id",
		whatsapp: "+628111808244",
		logo: "liveaboard-cruise-indonesia.png",
		summary: {
			en: "PT Liveaboard Cruise Indonesia, a liveaboard operator with its head office in Surabaya and branches in Komodo, Raja Ampat, and Manado.",
			id: "PT Liveaboard Cruise Indonesia, operator liveaboard dengan kantor pusat di Surabaya dan cabang di Komodo, Raja Ampat, dan Manado.",
		},
		services: services.liveaboard,
	}),
	member("livingseas", "Livingseas", {
		regions: ["Jabodetabek", "Bali"],
		summary: {
			en: "SSI dive center with a Jakarta base in Pluit and a Bali base in Padangbai.",
			id: "Pusat selam SSI dengan basis Jakarta di Pluit dan basis Bali di Padangbai.",
		},
		services: services.center,
	}),
	member("lunar-dive-resort", "Lunar Dive Resort", {
		regions: ["Bali"],
		website: "https://lunardiveresort.com/",
		logo: "lunar-dive-resort.png",
		summary: {
			en: "Dive resort inland from the coast at Tulamben, Bali, near the USAT Liberty.",
			id: "Resort selam di daratan Tulamben, Bali, dekat USAT Liberty.",
		},
		services: services.resort,
	}),
	member("manado-scuba", "Manado Scuba", {
		regions: ["Sulawesi"],
		summary: {
			en: "Dive center listed at NDC Resort, Molas, Bunaken, North Sulawesi.",
			id: "Pusat selam yang tercantum di NDC Resort, Molas, Bunaken, Sulawesi Utara.",
		},
		services: services.center,
	}),
	member("maratua-dc-lodge", "Maratua DC & Lodge", {
		regions: ["Other regions"],
		summary: {
			en: "IDCA member on Maratua. Several resorts there use similar names, so no single public website is attached here.",
			id: "Anggota IDCA di Maratua. Beberapa resort di sana memakai nama yang mirip, jadi tidak ada satu situs publik yang dicantumkan di sini.",
		},
		services: services.resort,
	}),
	member("mari-menyelam-bersama", "Mari Menyelam Bersama / Family Diver Jakarta", {
		regions: ["Jabodetabek"],
		website: "https://familydiver.id/",
		email: "familydiver@gmail.com",
		whatsapp: "+628111086996",
		summary: {
			en: "PADI dive center in Cimanggis, Depok, also called Family Diver Jakarta.",
			id: "Pusat selam PADI di Cimanggis, Depok, yang juga disebut Family Diver Jakarta.",
		},
		services: services.center,
	}),
	member("maxs-dc-batam", "Max's DC Batam", {
		regions: ["Other regions"],
		email: "gerry.maxsdivecentre@gmail.com",
		whatsapp: "+6282390263600",
		summary: {
			en: "PADI dive center in Batam Centre.",
			id: "Pusat selam PADI di Batam Centre.",
		},
		services: services.center,
	}),
	member("mazu-diver", "Mazu Ecowisata", {
		regions: ["Jabodetabek"],
		website: "https://www.mazudivers.net/",
		email: "marketing@mazudivers.net",
		whatsapp: "+6285107145488",
		logo: "mazu-ecowisata.png",
		keepImage: true,
		summary: {
			en: "Mazu Divers, an SSI dive center and training base at Pulau Pramuka, Kepulauan Seribu. The company name is CV Mazu Ecowisata.",
			id: "Mazu Divers, pusat selam dan pelatihan SSI di Pulau Pramuka, Kepulauan Seribu. Nama perusahaannya CV Mazu Ecowisata.",
		},
		services: {
			en: "SSI dive center, dive education, and dive trips.",
			id: "Pusat selam SSI, pendidikan selam, dan perjalanan selam.",
		},
	}),
	member("milakancana-dc", "Milakancana DC", {
		regions: ["Jabodetabek"],
		website: "https://milakancanadive.com/",
		whatsapp: "+6287772788305",
		summary: {
			en: "Dive training center at the Milakancana pool, GOR Padjajaran, Bogor.",
			id: "Pusat pelatihan selam di kolam Milakancana, GOR Padjajaran, Bogor.",
		},
		services: services.training,
	}),
	member("naira-dc", "Naira DC", {
		regions: ["Banda Sea"],
		email: "likesbarondaindonesia@gmail.com",
		whatsapp: "+6281246188322",
		summary: {
			en: "Dive center on Jalan Maulana, Banda Neira.",
			id: "Pusat selam di Jalan Maulana, Banda Neira.",
		},
		services: services.center,
	}),
	member("nautika-dira-tera", "Nautika Dira Tera/NDT Dive", {
		regions: ["Jabodetabek", "Other regions"],
		website: "https://nautikadivealor.com/",
		email: "info@ndtdive.com",
		whatsapp: "+628113429363",
		summary: {
			en: "Jakarta dive company that also operates Nautika Dive Alor, a PADI resort in Alor.",
			id: "Perusahaan selam di Jakarta yang juga mengoperasikan Nautika Dive Alor, resort PADI di Alor.",
		},
		services: services.center,
	}),
	member("octopus-dive-indonesia", "Octopus Dive Indonesia", {
		regions: ["Bali"],
		website: "https://octopusdivepenida.com/",
		email: "info@octopusdivepenida.com",
		whatsapp: "+6281222688477",
		logo: "octopus-dive-indonesia.png",
		summary: {
			en: "SSI dive center in Desa Ped, Nusa Penida.",
			id: "Pusat selam SSI di Desa Ped, Nusa Penida.",
		},
		services: services.center,
	}),
	member("odydive-center", "Odydive Center", {
		regions: ["Jabodetabek"],
		website: "https://odydive.com/",
		whatsapp: "+628119556888",
		logo: "odydive-center.png",
		summary: {
			en: "PADI dive center on Jalan Tebet Timur Raya, South Jakarta.",
			id: "Pusat selam PADI di Jalan Tebet Timur Raya, Jakarta Selatan.",
		},
		services: services.center,
	}),
	member("odyssea-utama", "Odyssea Utama/Cocotinos", {
		regions: ["Sulawesi"],
		website: "https://www.odysseadivers.com/",
		email: "info@cocotinos-manado.com",
		whatsapp: "+628124308800",
		summary: {
			en: "PT Odyssea Utama, operating dive services at Cocotinos Manado in Kima Bajo, North Minahasa.",
			id: "PT Odyssea Utama, yang mengoperasikan layanan selam di Cocotinos Manado, Kima Bajo, Minahasa Utara.",
		},
		services: services.resort,
	}),
	member("ollo-scuba-wakatobi", "Ollo Scuba Wakatobi", {
		regions: ["Sulawesi"],
		summary: {
			en: "Dive operator in Wangi-Wangi Selatan, Wakatobi.",
			id: "Operator selam di Wangi-Wangi Selatan, Wakatobi.",
		},
		services: services.center,
	}),
	member("oseano-scuba-indonesia", "Oseano Scuba Indonesia", {
		regions: ["Jabodetabek"],
		summary: {
			en: "RAID dive center listed on Jalan Dempo, Menteng, Central Jakarta.",
			id: "Pusat selam RAID yang tercantum di Jalan Dempo, Menteng, Jakarta Pusat.",
		},
		services: services.center,
	}),
	member("oye-selam-indonesia", "Oye Selam Indonesia", {
		regions: ["Jabodetabek"],
		summary: {
			en: "Jakarta dive community and operator, with a secretariat reported in Cilandak.",
			id: "Komunitas dan operator selam di Jakarta, dengan sekretariat yang dilaporkan di Cilandak.",
		},
		services: services.center,
	}),
	member("palika-scuba-karawang", "Palika Scuba Karawang", {
		regions: ["Other regions"],
		email: "scubapalika@gmail.com",
		whatsapp: "+6281518500487",
		summary: {
			en: "Dive center in Karawang Timur.",
			id: "Pusat selam di Karawang Timur.",
		},
		services: services.center,
	}),
	member("photodive-trip", "Photodive Trip", {
		regions: ["Bali"],
		type: "Travel specialist",
		website: "https://www.photodivetrip.com/",
		logo: "photodive-trip.jpg",
		summary: {
			en: "PT JIA Group, arranging underwater photography trips.",
			id: "PT JIA Group, yang menyusun perjalanan fotografi bawah air.",
		},
		services: services.photo,
	}),
	member("pinguin-dc-bangka", "Pinguin DC Bangka", {
		regions: ["Other regions"],
		email: "pinguindivecenter@gmail.com",
		summary: {
			en: "Dive center in Tua Tunu, Pangkalpinang, Bangka Belitung.",
			id: "Pusat selam di Tua Tunu, Pangkalpinang, Bangka Belitung.",
		},
		services: services.center,
	}),
	member("pratasaba-resort", "Pratasaba Resort", {
		regions: ["Other regions"],
		website: "https://www.pratasabaresort.com/",
		summary: {
			en: "Dive resort in Payung-Payung, Maratua.",
			id: "Resort selam di Payung-Payung, Maratua.",
		},
		services: services.resort,
	}),
	member("priority-diver", "Priority Diver", {
		regions: ["Jabodetabek"],
		whatsapp: "+6287855518038",
		summary: {
			en: "Dive shop on Jalan Tanjung Duren Raya, West Jakarta.",
			id: "Toko selam di Jalan Tanjung Duren Raya, Jakarta Barat.",
		},
		services: services.shop,
	}),
	member("pro-dive-bali", "Pro Dive Bali", {
		regions: ["Bali"],
		website: "https://prodivebali.com/",
		email: "info@prodivebali.com",
		whatsapp: "+6281338704422",
		summary: {
			en: "PADI dive center on Jalan Rama, Denpasar Selatan.",
			id: "Pusat selam PADI di Jalan Rama, Denpasar Selatan.",
		},
		services: services.center,
	}),
	member("pt-bubbles-indonesia", "PT. Bubbles Indonesia", {
		regions: ["Jabodetabek"],
		website: "https://www.bubblesdivecenter.com/",
		email: "management@bubblesdivecenter.com",
		logo: "pt-bubbles-indonesia.jpg",
		summary: {
			en: "Bubbles Divers, a PADI dive center on Jalan Guru Mughni, Kuningan, South Jakarta.",
			id: "Bubbles Divers, pusat selam PADI di Jalan Guru Mughni, Kuningan, Jakarta Selatan.",
		},
		services: services.center,
	}),
	member("raflesia-bengkulu-dc", "Raflesia Bengkulu DC", {
		regions: ["Other regions"],
		summary: {
			en: "IDCA member listed in Bengkulu. A public dive-center website for this name was not found.",
			id: "Anggota IDCA yang tercantum di Bengkulu. Situs pusat selam publik untuk nama ini tidak ditemukan.",
		},
		services: services.center,
	}),
	member("raja-nyelam", "Raja Nyelam", {
		regions: ["Jabodetabek"],
		website: "https://www.rajanyelam.com/",
		email: "info@rajanyelam.com",
		whatsapp: "+6281298947986",
		logo: "raja-nyelam.png",
		summary: {
			en: "SSI instructor-training center in Bekasi Utara.",
			id: "Pusat pelatihan instruktur SSI di Bekasi Utara.",
		},
		services: services.training,
	}),
	member("rekan-dive-center-wakatobi", "Rekan Dive Center Wakatobi", {
		regions: ["Sulawesi"],
		summary: {
			en: "Dive center listed in Mandati, Wangi-Wangi Selatan, Wakatobi.",
			id: "Pusat selam yang tercantum di Mandati, Wangi-Wangi Selatan, Wakatobi.",
		},
		services: services.center,
	}),
	member("sailendivers", "Sailendivers DC/Nagadi Purna", {
		regions: ["Jabodetabek"],
		website: "https://www.sailendiver.com/",
		email: "sailendiver@gmail.com",
		whatsapp: "+6285215211171",
		summary: {
			en: "PADI dive center in BSD City, South Tangerang.",
			id: "Pusat selam PADI di BSD City, Tangerang Selatan.",
		},
		services: services.center,
	}),
	member("sea-darling", "Sea Darling", {
		summary: missing,
		services: services.center,
	}),
	member("sekolah-diving-bandung", "Sekolah Diving Bandung", {
		regions: ["Other regions"],
		website: "https://sekolahdivingbandung.com/",
		summary: {
			en: "Diving school in Bandung. The public site is an older course blog and does not show a current street address.",
			id: "Sekolah selam di Bandung. Situs publiknya adalah blog kursus yang lebih lama dan tidak menampilkan alamat jalan yang masih berlaku.",
		},
		services: services.training,
	}),
	member("sentra-selam-jogja", "Sentra Selam Jogja", {
		regions: ["Other regions"],
		email: "selamjogja@yahoo.com",
		whatsapp: "+628568894931",
		summary: {
			en: "POSSI dive center on Jalan Pandega Marta, Sleman, Yogyakarta.",
			id: "Pusat selam POSSI di Jalan Pandega Marta, Sleman, Yogyakarta.",
		},
		services: services.center,
	}),
	member("sightsea-expedition", "Sightsea Expedition", {
		regions: ["Bali", "Raja Ampat", "Banda Sea"],
		type: "Travel specialist",
		website: "https://www.sightseaexpeditions.com/",
		email: "admin@sightseaexpeditions.com",
		whatsapp: "+62811301031",
		logo: "sightsea-expedition.png",
		summary: {
			en: "Dive-trip specialist in Seminyak, Bali, including departures on the Velocean liveaboard.",
			id: "Spesialis perjalanan selam di Seminyak, Bali, termasuk keberangkatan di liveaboard Velocean.",
		},
		services: services.trips,
	}),
	member("taman-laut-indonesia", "Taman Laut Indonesia", {
		website: "https://www.tamanlautindonesia.com/",
		logo: "taman-laut-indonesia.png",
		summary: {
			en: "Dive and freediving school offering PADI courses.",
			id: "Sekolah selam dan freediving yang menawarkan kursus PADI.",
		},
		services: services.training,
	}),
	member("tasik-divers-indonesia", "Tasik Divers Indonesia", {
		regions: ["Sulawesi"],
		website: "https://www.tasikria.com/",
		email: "daniel@tasikria.com",
		whatsapp: "+62811438777",
		summary: {
			en: "PADI dive operator. The Manado center is listed on the Trans-Sulawesi road, and the company also runs diving in Derawan.",
			id: "Operator selam PADI. Pusat Manado tercantum di jalan Trans-Sulawesi, dan perusahaan ini juga menjalankan selam di Derawan.",
		},
		services: services.center,
	}),
	member("toekoe-nyelem-indonesia", "Toekoe Nyelem Indonesia/Zombie Dive", {
		regions: ["Jabodetabek"],
		email: "toekoenyelem.indonesia@gmail.com",
		summary: {
			en: "Zombie Marine Dive, an SSI center in Ciganjur, South Jakarta.",
			id: "Zombie Marine Dive, pusat SSI di Ciganjur, Jakarta Selatan.",
		},
		services: services.center,
	}),
	member("travindo-jaya-bajo", "Travindo Jaya Bajo", {
		regions: ["Komodo", "Bali", "Raja Ampat"],
		type: "Travel specialist",
		summary: {
			en: "PT Travindo Jaya, arranging liveaboard diving with a focus on Bali, Komodo, and Raja Ampat.",
			id: "PT Travindo Jaya, yang menyusun selam liveaboard dengan fokus di Bali, Komodo, dan Raja Ampat.",
		},
		services: services.trips,
	}),
	member("tribuana-dc", "Tribuana DC", {
		regions: ["Jabodetabek"],
		email: "tribuanadivecenter@gmail.com",
		whatsapp: "+6281280395320",
		summary: {
			en: "SSI dive center in Cijantung, East Jakarta.",
			id: "Pusat selam SSI di Cijantung, Jakarta Timur.",
		},
		services: services.center,
	}),
	member("velocean-lob", "Velocean LOB", {
		regions: ["Raja Ampat", "Komodo", "Banda Sea"],
		type: "Liveaboard",
		website: "https://www.veloceanliveaboard.com/",
		email: "sales@veloceanliveaboard.com",
		whatsapp: "+66842424642",
		logo: "velocean-lob.png",
		summary: {
			en: "Liveaboard operating in Raja Ampat, Komodo, the Banda Sea, Alor, Wakatobi, and Triton Bay.",
			id: "Liveaboard yang beroperasi di Raja Ampat, Komodo, Laut Banda, Alor, Wakatobi, dan Triton Bay.",
		},
		services: services.liveaboard,
	}),
	member("wailino-dive", "Wailino Dive", {
		regions: ["Jabodetabek"],
		website: "https://www.wailinodive.com/",
		summary: {
			en: "Cave-diving and expedition operator in Ciganjur, South Jakarta.",
			id: "Operator selam gua dan ekspedisi di Ciganjur, Jakarta Selatan.",
		},
		services: services.trips,
	}),
	member("whale-dive-center", "Whale Dive Center", {
		regions: ["Jabodetabek"],
		website: "https://whaledivecentre.com/",
		email: "info@whaledivecentre.com",
		logo: "whale-dive-center.jpg",
		summary: {
			en: "Whale Dive Centre in Kebayoran Lama, South Jakarta, a NAUI training base.",
			id: "Whale Dive Centre di Kebayoran Lama, Jakarta Selatan, basis pelatihan NAUI.",
		},
		services: services.training,
	}),
	member("zanclus-dc", "Zanclus DC", {
		regions: ["Raja Ampat"],
		whatsapp: "+6282213121778",
		summary: {
			en: "SSI dive center in Waisai, Raja Ampat.",
			id: "Pusat selam SSI di Waisai, Raja Ampat.",
		},
		services: services.center,
	}),
];
