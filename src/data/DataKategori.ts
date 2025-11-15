export interface BukuItem {
  id: number;
  title: string;
  author: string;
  cover: any;
}

export const dataKategori = {
  BukuPopuler: [
    { id: 1, title: "Seporsi Mie Ayam Sebelum Mati", author: "Brian Khrisna", cover: require("../assets/images/seporsimieayamsebelummati.jpg") },
    { id: 2, title: "Di Tanah Lada", author: "Ziggy Zesya", cover: require("../assets/images/ditanahlada.jpg") },
    { id: 3, title: "Keajaiban Toko Kelontong Namiya", author: "Keigo Higashino", cover: require("../assets/images/keajaibantoko.jpg") },
    { id: 4, title: "Laut Bercerita", author: "Leila S. Chudori", cover: require("../assets/images/lautbercerita.jpg") },
    { id: 5, title: "Serangkai", author: "Valerie Patkar", cover: require("../assets/images/serangkai.jpg") },
    { id: 6, title: "Aku yang Sudah Lama Hilang", author: "Tracy Buchanan", cover: require("../assets/images/akuyangsudahlamahilang.jpg") },
    { id: 7, title: "The Architecture of Love", author: "Ika Natassa", cover: require("../assets/images/thearchitecture.jpg") },
    { id: 8, title: "Dikta dan Hukum", author: "Dhiaan Farah", cover: require("../assets/images/diktadanhukum.jpg") },
    { id: 9, title: "Filosofi Teras", author: "Henry Manampiring", cover: require("../assets/images/filosofiteras.jpg") },
    { id: 10, title: "Sebuah Seni untuk Bersikap Bodo Amat", author: "Mark Manson", cover: require("../assets/images/sebuahseni.jpg") },
  ],
  PilihanEditor: [
    { id: 11, title: "Sapiens Grafis", author: "Yuval Noah Harari", cover: require("../assets/images/sapiens.jpg") },
    { id: 12, title: "From Zero to Hero", author: "Theo Derick", cover: require("../assets/images/fromzero.jpg") },
    { id: 13, title: "Animal Farm", author: "George Orwell", cover: require("../assets/images/animalfarm.jpg") },
    { id: 14, title: "Atomic Habits", author: "James Clear", cover: require("../assets/images/atomichabits.jpg") },
    { id: 15, title: "Bicara Itu Ada Seninya", author: "Adjie Santosoputro", cover: require("../assets/images/bicaraituadaseninya.jpg") },
    { id: 16, title: "Cantik Itu Luka", author: "Eka Kurniawan", cover: require("../assets/images/cantikituluka.jpg") },
    { id: 17, title: "The Power of Habit", author: "Charles Duhigg", cover: require("../assets/images/thepowerofhabit.jpg") },
    { id: 18, title: "Negeri Para Bedebah", author: "Tere Liye", cover: require("../assets/images/negeripara.jpg") },
    { id: 19, title: "Heartbreak Motel", author: "Ika Natassa", cover: require("../assets/images/heartbreakmotel.jpg") },
    { id: 20, title: "Malam Terakhir", author: "Leila S. Chudori", cover: require("../assets/images/malamterakhir.jpg") },
  ],
  FiksiFavorit: [
    { id: 21, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", cover: require("../assets/images/bumimanusia.jpg") },
    { id: 22, title: "Perahu Kertas", author: "Dee Lestari", cover: require("../assets/images/perahukertas.jpg") },
    { id: 23, title: "Rindu", author: "Tere Liye", cover: require("../assets/images/rindu.jpg") },
    { id: 24, title: "The Midnight Library", author: "Matt Haig", cover: require("../assets/images/themidnight.jpg") },
    { id: 25, title: "Norwegian Wood", author: "Haruki Murakami", cover: require("../assets/images/norwegianwood.jpg") },
    { id: 26, title: "Critical Eleven", author: "Ika Natassa", cover: require("../assets/images/criticaleleven.jpg") },
    { id: 27, title: "Beauty is a Wound", author: "Eka Kurniawan", cover: require("../assets/images/beautyiswound.jpg") },
    { id: 28, title: "Before the Coffee Gets Cold", author: "Toshikazu Kawaguchi", cover: require("../assets/images/beforethe.jpg") },
    { id: 29, title: "Garis Waktu", author: "Fiersa Besari", cover: require("../assets/images/gariswaktu.jpg") },
    { id: 30, title: "Konspirasi Alam Semesta", author: "Fiersa Besari", cover: require("../assets/images/konspirasialam.jpg") },
  ],
  NonFiksiTerlaris: [
    { id: 31, title: "The Psychology of Money", author: "Morgan Housel", cover: require("../assets/images/thepsychology.jpg") },
    { id: 32, title: "Think Again", author: "Adam Grant", cover: require("../assets/images/thinkagain.jpg") },
    { id: 33, title: "The Subtle Art of Not Giving a Fuck", author: "Mark Manson", cover: require("../assets/images/thesubtle.jpg") },
    { id: 34, title: "How to Win Friends and Influence People", author: "Dale Carnegie", cover: require("../assets/images/howtowin.jpg") },
    { id: 35, title: "Ikigai", author: "Hector Garcia & Francesc Miralles", cover: require("../assets/images/ikigai.jpg") },
    { id: 36, title: "Quiet", author: "Susan Cain", cover: require("../assets/images/quiet.jpg") },
    { id: 37, title: "Grit", author: "Angela Duckworth", cover: require("../assets/images/grit.jpg") },
    { id: 38, title: "Everything is F*cked", author: "Mark Manson", cover: require("../assets/images/everythingisfucked.jpg") },
    { id: 39, title: "Start With Why", author: "Simon Sinek", cover: require("../assets/images/startwith.jpg") },
    { id: 40, title: "I Want to Die but I Want to Eat Tteokbokki", author: "Baek Sehee", cover: require("../assets/images/iwanttodie.jpg") },
  ],
  MungkinAndaSuka: [
    { id: 41, title: "Tujuh Kelana", author: "Adimas Immanuel", cover: require("../assets/images/tujuhkelana.jpg") },
    { id: 42, title: "Aroma Karsa", author: "Dee Lestari", cover: require("../assets/images/aromakarsa.jpg") },
    { id: 43, title: "Pachinko", author: "Min Jin Lee", cover: require("../assets/images/pachinko.jpg") },
    { id: 44, title: "The Alchemist", author: "Paulo Coelho", cover: require("../assets/images/thealchemist.jpg") },
    { id: 45, title: "Eleanor Oliphant Is Completely Fine", author: "Gail Honeyman", cover: require("../assets/images/eleanor.jpg") },
    { id: 46, title: "The Song of Achilles", author: "Madeline Miller", cover: require("../assets/images/thesong.jpg") },
    { id: 47, title: "The Power of Habit", author: "Charles Duhigg", cover: require("../assets/images/thepowerofhabit.jpg") },
    { id: 48, title: "Rectoverso", author: "Dee Lestari", cover: require("../assets/images/rectroverso.jpg") },
    { id: 49, title: "One of Us Is Lying", author: "Karen M. McManus", cover: require("../assets/images/oneofus.jpg") },
    { id: 50, title: "The Silent Patient", author: "Alex Michaelides", cover: require("../assets/images/thesilent.jpg") },
  ],
};

export type KategoriKeys = keyof typeof dataKategori;