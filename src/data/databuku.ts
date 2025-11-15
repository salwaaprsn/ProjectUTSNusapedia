// src/data/DataBuku.ts
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: any; // require() image
  kategori: string;
}

export const allBooks: Book[] = [
  // Buku Populer
  { id: "1", title: "Seporsi Mie Ayam Sebelum Mati", author: "Brian Khrisna", cover: require("../assets/images/seporsimieayamsebelummati.jpg"), kategori: "Buku Populer" },
  { id: "2", title: "Di Tanah Lada", author: "Ziggy Zesya", cover: require("../assets/images/ditanahlada.jpg"), kategori: "Buku Populer" },
  { id: "3", title: "Keajaiban Toko Kelontong Namiya", author: "Keigo Higashino", cover: require("../assets/images/keajaibantoko.jpg"), kategori: "Buku Populer" },
  { id: "4", title: "Laut Bercerita", author: "Leila S. Chudori", cover: require("../assets/images/lautbercerita.jpg"), kategori: "Buku Populer" },
  { id: "5", title: "Serangkai", author: "Valerie Patkar", cover: require("../assets/images/serangkai.jpg"), kategori: "Buku Populer" },
  { id: "6", title: "Aku yang Sudah Lama Hilang", author: "Tracy Buchanan", cover: require("../assets/images/akuyangsudahlamahilang.jpg"), kategori: "Buku Populer" },
  { id: "7", title: "The Architecture of Love", author: "Ika Natassa", cover: require("../assets/images/thearchitecture.jpg"), kategori: "Buku Populer" },
  { id: "8", title: "Dikta dan Hukum", author: "Dhiaan Farah", cover: require("../assets/images/diktadanhukum.jpg"), kategori: "Buku Populer" },
  { id: "9", title: "Filosofi Teras", author: "Henry Manampiring", cover: require("../assets/images/filosofiteras.jpg"), kategori: "Buku Populer" },
  { id: "10", title: "Sebuah Seni untuk Bersikap Bodo Amat", author: "Mark Manson", cover: require("../assets/images/sebuahseni.jpg"), kategori: "Buku Populer" },

  // Pilihan Editor
  { id: "11", title: "Sapiens Grafis", author: "Yuval Noah Harari", cover: require("../assets/images/sapiens.jpg"), kategori: "Pilihan Editor" },
  { id: "12", title: "From Zero to Hero", author: "Theo Derick", cover: require("../assets/images/fromzero.jpg"), kategori: "Pilihan Editor" },
  { id: "13", title: "Animal Farm", author: "George Orwell", cover: require("../assets/images/animalfarm.jpg"), kategori: "Pilihan Editor" },
  { id: "14", title: "Atomic Habits", author: "James Clear", cover: require("../assets/images/atomichabits.jpg"), kategori: "Pilihan Editor" },
  { id: "15", title: "Bicara Itu Ada Seninya", author: "Adjie Santosoputro", cover: require("../assets/images/bicaraituadaseninya.jpg"), kategori: "Pilihan Editor" },
  { id: "16", title: "Cantik Itu Luka", author: "Eka Kurniawan", cover: require("../assets/images/cantikituluka.jpg"), kategori: "Pilihan Editor" },
  { id: "17", title: "The Power of Habit", author: "Charles Duhigg", cover: require("../assets/images/thepowerofhabit.jpg"), kategori: "Pilihan Editor" },
  { id: "18", title: "Negeri Para Bedebah", author: "Tere Liye", cover: require("../assets/images/negeripara.jpg"), kategori: "Pilihan Editor" },
  { id: "19", title: "Heartbreak Motel", author: "Ika Natassa", cover: require("../assets/images/heartbreakmotel.jpg"), kategori: "Pilihan Editor" },
  { id: "20", title: "Malam Terakhir", author: "Leila S. Chudori", cover: require("../assets/images/malamterakhir.jpg"), kategori: "Pilihan Editor" },

  // Fiksi Favorit
  { id: "21", title: "Bumi Manusia", author: "Pramoedya Ananta Toer", cover: require("../assets/images/bumimanusia.jpg"), kategori: "Fiksi Favorit" },
  { id: "22", title: "Perahu Kertas", author: "Dee Lestari", cover: require("../assets/images/perahukertas.jpg"), kategori: "Fiksi Favorit" },
  { id: "23", title: "Rindu", author: "Tere Liye", cover: require("../assets/images/rindu.jpg"), kategori: "Fiksi Favorit" },
  { id: "24", title: "The Midnight Library", author: "Matt Haig", cover: require("../assets/images/themidnight.jpg"), kategori: "Fiksi Favorit" },
  { id: "25", title: "Norwegian Wood", author: "Haruki Murakami", cover: require("../assets/images/norwegianwood.jpg"), kategori: "Fiksi Favorit" },
  { id: "26", title: "Critical Eleven", author: "Ika Natassa", cover: require("../assets/images/criticaleleven.jpg"), kategori: "Fiksi Favorit" },
  { id: "27", title: "Beauty is a Wound", author: "Eka Kurniawan", cover: require("../assets/images/beautyiswound.jpg"), kategori: "Fiksi Favorit" },
  { id: "28", title: "Before the Coffee Gets Cold", author: "Toshikazu Kawaguchi", cover: require("../assets/images/beforethe.jpg"), kategori: "Fiksi Favorit" },
  { id: "29", title: "Garis Waktu", author: "Fiersa Besari", cover: require("../assets/images/gariswaktu.jpg"), kategori: "Fiksi Favorit" },
  { id: "30", title: "Konspirasi Alam Semesta", author: "Fiersa Besari", cover: require("../assets/images/konspirasialam.jpg"), kategori: "Fiksi Favorit" },

  // Non Fiksi Terlaris
  { id: "31", title: "The Psychology of Money", author: "Morgan Housel", cover: require("../assets/images/thepsychology.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "32", title: "Think Again", author: "Adam Grant", cover: require("../assets/images/thinkagain.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "33", title: "The Subtle Art of Not Giving a F*", author: "Mark Manson", cover: require("../assets/images/thesubtle.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "34", title: "How to Win Friends and Influence People", author: "Dale Carnegie", cover: require("../assets/images/howtowin.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "35", title: "Ikigai", author: "Hector Garcia & Francesc Miralles", cover: require("../assets/images/ikigai.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "36", title: "Quiet", author: "Susan Cain", cover: require("../assets/images/quiet.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "37", title: "Grit", author: "Angela Duckworth", cover: require("../assets/images/grit.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "38", title: "Everything is F*cked", author: "Mark Manson", cover: require("../assets/images/everythingisfucked.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "39", title: "Start With Why", author: "Simon Sinek", cover: require("../assets/images/startwith.jpg"), kategori: "Non Fiksi Terlaris" },
  { id: "40", title: "I Want to Die but I Want to Eat Tteokbokki", author: "Baek Sehee", cover: require("../assets/images/iwanttodie.jpg"), kategori: "Non Fiksi Terlaris" },

  // Mungkin Kamu Akan Suka Ini
  { id: "41", title: "Tujuh Kelana", author: "Adimas Immanuel", cover: require("../assets/images/tujuhkelana.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "42", title: "Aroma Karsa", author: "Dee Lestari", cover: require("../assets/images/aromakarsa.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "43", title: "Pachinko", author: "Min Jin Lee", cover: require("../assets/images/pachinko.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "44", title: "The Alchemist", author: "Paulo Coelho", cover: require("../assets/images/thealchemist.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "45", title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", cover: require("../assets/images/eleanor.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "46", title: "The Song of Achilles", author: "Madeline Miller", cover: require("../assets/images/thesong.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "47", title: "The Power of Habit", author: "Charles Duhigg", cover: require("../assets/images/thepowerofhabit.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "48", title: "Rectoverso", author: "Dee Lestari", cover: require("../assets/images/rectroverso.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "49", title: "One of Us Is Lying", author: "Karen M. McManus", cover: require("../assets/images/oneofus.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
  { id: "50", title: "The Silent Patient", author: "Alex Michaelides", cover: require("../assets/images/thesilent.jpg"), kategori: "Mungkin Kamu Akan Suka Ini" },
];

export const kategoriKeys = [
  "Buku Populer",
  "Pilihan Editor",
  "Fiksi Favorit",
  "Non Fiksi Terlaris",
  "Mungkin Kamu Akan Suka Ini",
];

export const kategoriLabels: Record<string, string> = {
  "Buku Populer": "Buku Populer",
  "Pilihan Editor": "Pilihan Editor",
  "Fiksi Favorit": "Fiksi Favorit",
  "Non Fiksi Terlaris": "Non Fiksi Terlaris",
  "Mungkin Kamu Akan Suka Ini": "Mungkin Kamu Akan Suka Ini",
};