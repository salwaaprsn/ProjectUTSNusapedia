// src/screens/Perpustakaan.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { allBooks, Book } from "../data/databuku";

export default function Perpustakaan() {
  const navigation = useNavigation<any>();
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const semuaKategori = [
    "Semua",
    "Buku Populer",
    "Pilihan Editor",
    "Fiksi Favorit",
    "Non Fiksi Terlaris",
    "Mungkin Kamu Akan Suka Ini",
  ];

  const bukuFiltered: Book[] =
    kategoriAktif === "Semua"
      ? allBooks
      : allBooks.filter((b) => b.kategori === kategoriAktif);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Perpustakaan</Text>
        <Text style={styles.subtitle}>Koleksi Bacaan Kamu</Text>
      </View>

      {/* Tab Kategori */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.kategoriBar}
      >
        {semuaKategori.map((nama) => (
          <TouchableOpacity
            key={nama}
            style={[
              styles.kategoriBtn,
              kategoriAktif === nama && styles.kategoriAktif,
            ]}
            onPress={() => setKategoriAktif(nama)}
          >
            <Text
              style={[
                styles.kategoriText,
                kategoriAktif === nama && styles.kategoriTextAktif,
              ]}
            >
              {nama}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Grid Buku */}
      <View style={styles.grid}>
        {bukuFiltered.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.bookCard}
            onPress={() => navigation.navigate("DetailBuku", { item })}
          >
            <Image
              source={item.cover}
              style={styles.cover}
            />
            <Text style={styles.bookTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.bookAuthor} numberOfLines={1}>
              {item.author}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const PRIMARY = "#841849";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { paddingTop: 60, paddingHorizontal: 22, paddingBottom: 10 },
  title: { fontSize: 28, color: PRIMARY, fontFamily: "PoppinsBold" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 2, fontFamily: "PoppinsMedium" },

  kategoriBar: { paddingVertical: 5, paddingLeft: 16 },
  kategoriBtn: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    marginRight: 10,
  },
  kategoriAktif: { backgroundColor: PRIMARY },
  kategoriText: { fontSize: 14, color: "#444", fontFamily: "PoppinsMedium" },
  kategoriTextAktif: { color: "#fff", fontFamily: "PoppinsMedium" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bookCard: { width: "30%", marginBottom: 26 },
  cover: { width: "100%", height: 160, borderRadius: 8, backgroundColor: "#eee" },
  bookTitle: { fontSize: 14, fontFamily: "PoppinsMedium", marginTop: 6, color: "#222" },
  bookAuthor: { fontSize: 12, marginTop: 1, color: "#666", fontFamily: "PoppinsMedium" },
});