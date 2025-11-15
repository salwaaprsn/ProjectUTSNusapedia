// src/screens/Beranda.tsx
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LanguageContext } from "../context/LanguageContext";
import { UserContext, Buku } from "../context/UserContext";
import { translations } from "../../translations";
import { dataKategori, KategoriKeys } from "../data/DataKategori";

const Beranda = ({ navigation }: any) => {
  const { language } = useContext(LanguageContext);
  const { addToRiwayat } = useContext(UserContext);
  const t = translations[language];

  const kategoriKeys: KategoriKeys[] = [
    "BukuPopuler",
    "PilihanEditor",
    "FiksiFavorit",
    "NonFiksiTerlaris",
    "MungkinAndaSuka",
  ];

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
      case "BukuPopuler":
        return t.bukuPopuler;
      case "PilihanEditor":
        return t.pilihanEditor;
      case "FiksiFavorit":
        return t.fiksiFavorit;
      case "NonFiksiTerlaris":
        return t.nonFiksiTerlaris;
      case "MungkinAndaSuka":
        return t.mungkinAndaSuka;
      default:
        return key;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>{t.halo}, Salwa!</Text>
      </View>

      {/* KATEGORI */}
      {kategoriKeys.map((kategori) => (
        <View key={kategori} style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{getLabel(kategori)}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Jelajahi", { kategori })
              }
            >
              <Text style={styles.seeAll}>{t.lihatSemua}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={dataKategori[kategori].slice(0, 10)} // tampilkan preview 10 buku saja
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
  header: { paddingHorizontal: 16, paddingTop: 55, marginBottom: 10 },
  greeting: { fontFamily: "PoppinsSemiBold", fontSize: 18 },
  sectionWrapper: { marginBottom: 8 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  sectionTitle: { fontFamily: "PoppinsSemiBold", fontSize: 15 },
  seeAll: { fontFamily: "PoppinsMedium", fontSize: 12, color: "#841849" },
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

export default Beranda;