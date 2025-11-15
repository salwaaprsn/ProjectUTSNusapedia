import { Buku } from "../types";

const BASE_URL = "https://openlibrary.org/subjects";

export async function getBukuBySubject(subject: string = "fiction", limit: number = 20): Promise<Buku[]> {
  try {
    const res = await fetch(`${BASE_URL}/${subject}.json?limit=${limit}`);
    if (!res.ok) throw new Error("Gagal mengambil data buku");

    const data = await res.json();
    return data.works.map((item: any, index: number) => ({
      id: index + 1,
      title: item.title,
      author: item.authors?.[0]?.name || "Unknown",
      cover: item.cover_id ? `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg` : "https://via.placeholder.com/300x400?text=No+Cover",
      deskripsi: item.subject ? item.subject.join(", ") : "Tidak ada deskripsi",
      review: undefined,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
