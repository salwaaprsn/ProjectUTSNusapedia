// src/screens/Jelajahi.tsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LanguageContext } from "../context/LanguageContext";
import { UserContext, Buku } from "../context/UserContext";
import { translations } from "../../translations";
import { dataKategori, KategoriKeys } from "../data/DataKategori";

const Jelajahi = ({ navigation }: any) => {
  const { language } = useContext(LanguageContext);
  const { addToRiwayat } = useContext(UserContext);
  const t = translations[language];
  const [search, setSearch] = useState("");

  const kategoriKeys: KategoriKeys[] = [
    "BukuPopuler",
    "PilihanEditor",
    "FiksiFavorit",
    "NonFiksiTerlaris",
    "MungkinAndaSuka",
  ];

  const allBooks = kategoriKeys.flatMap((key) => dataKategori[key]);

  const searchResults = search.trim()
    ? allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const renderBook = ({ item }: { item: Buku }) => (
    <TouchableOpacity
      style={styles.bookCard}
      activeOpacity={0.7}
      onPress={() => {
        addToRiwayat(item);
        navigation.navigate("DetailBuku", { item });
      }}
    >
      <View style={styles.cardBox}>
        <Image source={item.cover} style={styles.bookCover} />
        <Text numberOfLines={1} style={styles.bookTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.bookAuthor}>
          {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const getLabel = (key: KategoriKeys) => {
    switch (key) {
      case "BukuPopuler": return t.bukuPopuler;
      case "PilihanEditor": return t.pilihanEditor;
      case "FiksiFavorit": return t.fiksiFavorit;
      case "NonFiksiTerlaris": return t.nonFiksiTerlaris;
      case "MungkinAndaSuka": return t.mungkinAndaSuka;
      default: return key;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>{t.jelajahi}</Text>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#999" />
          <TextInput
            style={styles.input}
            placeholder={t.placeholderSearch}
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {searchResults.length > 0 && (
        <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          <Text style={styles.sectionTitle}>{t.hasilPencarian}</Text>
          <FlatList
            data={searchResults}
            renderItem={renderBook}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 14 }}
          />
        </View>
      )}

      {searchResults.length === 0 &&
        kategoriKeys.map((kategori) => (
          <View key={kategori} style={styles.sectionWrapper}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{getLabel(kategori)}</Text>
            </View>
            <FlatList
              data={dataKategori[kategori]}
              renderItem={renderBook}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 14 }}
            />
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { paddingHorizontal: 16, paddingTop: 55 },
  title: { fontFamily: "PoppinsBold", fontSize: 20, marginBottom: 10 },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  input: { flex: 1, marginLeft: 8, fontFamily: "PoppinsMedium", fontSize: 12 },
  sectionWrapper: { marginBottom: 8 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  sectionTitle: { fontFamily: "PoppinsSemiBold", fontSize: 15 },
  bookCard: { width: 110, marginRight: 14 },
  cardBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },
  bookCover: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 8,
  },
  bookTitle: { fontFamily: "PoppinsMedium", fontSize: 11, color: "#000" },
  bookAuthor: { fontFamily: "PoppinsRegular", fontSize: 10, color: "#777" },
});

export default Jelajahi;