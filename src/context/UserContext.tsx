// src/context/UserContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export interface Buku {
  id: number;
  title: string;
  author: string;
  cover: any;
  kategori?: string;
  tahunTerbit?: number;
  halaman?: number;
  deskripsi?: string; // ✨ Tambahan deskripsi buku
}

interface User {
  nama: string;
  email: string;
  telepon: string;
  prodi: string;
  foto?: any;
}

interface UserContextType {
  user: User;
  setUser: (data: User) => void;
  wishlist: Buku[];
  addToWishlist: (buku: Buku) => void;
  removeFromWishlist: (id: number) => void;
  riwayatBaca: Buku[];
  addToRiwayat: (buku: Buku) => void;
}

export const UserContext = createContext<UserContextType>({
  user: { nama: "", email: "", telepon: "", prodi: "" },
  setUser: () => {},
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  riwayatBaca: [],
  addToRiwayat: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    nama: "Salwa Aprilia Santi",
    email: "salwaaprilia@nusaputra.ac.id",
    telepon: "08123456789",
    prodi: "Teknik Informatika",
    foto: require("../assets/images/salwa.jpg"),
  });

  const [wishlist, setWishlist] = useState<Buku[]>([]);
  const [riwayatBaca, setRiwayatBaca] = useState<Buku[]>([]);

  // Wishlist functions
  const addToWishlist = (buku: Buku) => {
    setWishlist(prev => {
      if (prev.find(b => b.id === buku.id)) return prev;
      return [...prev, buku];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(b => b.id !== id));
  };

  // Riwayat Baca functions
  const addToRiwayat = (buku: Buku) => {
    setRiwayatBaca(prev => {
      const filtered = prev.filter(b => b.id !== buku.id); // hapus duplikat
      return [buku, ...filtered]; // terbaru di atas
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        riwayatBaca,
        addToRiwayat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};