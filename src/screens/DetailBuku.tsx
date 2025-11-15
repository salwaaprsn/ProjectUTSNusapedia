// src/screens/DetailBuku.tsx
import React, { useState, useRef, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LanguageContext } from "../context/LanguageContext";
import { UserContext, Buku } from "../context/UserContext";
import { translations } from "../../translations";
import { dataKategori, KategoriKeys } from "../data/DataKategori";

const { width, height } = Dimensions.get("window");

const defaultAvatar = require("../assets/images/salwa.jpg");
const defaultUserName = "Salwa";

const DetailBuku = ({ route, navigation }: any) => {
  const { item }: { item: Buku } = route.params;
  const { language } = useContext(LanguageContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(UserContext);

  const [reviews, setReviews] = useState<{ name: string; avatar: any; review: string }[]>([]);
  const [newReview, setNewReview] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  // Cek apakah buku ada di wishlist
  useEffect(() => {
    setIsWishlisted(!!wishlist.find((b) => b.id === item.id));
  }, [wishlist]);

  const handleBacaSekarang = () => {
    Alert.alert(translations[language].belumTersedia || "Fitur baca buku belum tersedia 😅");
  };

  const handleAddReview = () => {
    if (!newReview.trim()) return;
    const reviewObj = { name: defaultUserName, avatar: defaultAvatar, review: newReview };
    setReviews([reviewObj, ...reviews]);
    setNewReview("");
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }, 100);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(item.id);
      setIsWishlisted(false);
      Alert.alert("Buku dihapus dari Wishlist 💔");
    } else {
      addToWishlist(item);
      setIsWishlisted(true);
      Alert.alert("Buku ditambahkan ke Wishlist ❤️");
    }
  };

  // Ambil rekomendasi acak (10 buku, kecuali buku ini sendiri)
  const allBooks = Object.keys(dataKategori).flatMap((key) => dataKategori[key as KategoriKeys]);
  const rekomendasi = allBooks
    .filter((b) => b.id !== item.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  const renderBook = ({ item }: { item: Buku }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => navigation.push("DetailBuku", { item })}
    >
      <View style={styles.cardBox}>
        <Image source={item.cover} style={styles.bookCover} />
        <Text numberOfLines={1} style={styles.bookTitle}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.bookAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ paddingBottom: 140 }}>
        <View style={styles.coverContainer}>
          <Image source={item.cover} style={styles.cover} />
        </View>

        <View style={styles.infoContainer}>
          {/* Judul + Wishlist */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={toggleWishlist}>
              <Ionicons
                name={isWishlisted ? "heart" : "heart-outline"}
                size={24}
                color="#841849"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.author}>by {item.author}</Text>

          <Text style={styles.sectionTitle}>{translations[language].deskripsi || "Deskripsi"}</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            libero nec urna cursus tincidunt. Nulla facilisi. Fusce feugiat
            facilisis lorem, at ultricies libero dignissim non.
          </Text>

          <Text style={styles.sectionTitle}>{translations[language].informasiBuku || "Informasi Buku"}</Text>
          <View style={styles.bookInfoContainer}>
            <Text style={styles.infoText}>
              {translations[language].kategori || "Kategori"}: {item.kategori || "-"}
            </Text>
            <Text style={styles.infoText}>
              {translations[language].tahunTerbit || "Tahun Terbit"}: {item.tahunTerbit || "-"}
            </Text>
            <Text style={styles.infoText}>
              {translations[language].halaman || "Halaman"}: {item.halaman || "-"}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>{translations[language].review || "Review"}</Text>
          <View style={styles.reviewInputContainer}>
            <TextInput
              style={styles.reviewInput}
              placeholder={translations[language].tulisReview || "Tulis reviewmu..."}
              placeholderTextColor="#999"
              value={newReview}
              onChangeText={setNewReview}
              onSubmitEditing={handleAddReview}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddReview}>
              <Text style={styles.addButtonText}>{translations[language].kirim || "Kirim"}</Text>
            </TouchableOpacity>
          </View>

          {reviews.map((rev, index) => (
            <View key={index} style={styles.reviewCard}>
              <Image source={rev.avatar} style={styles.avatar} />
              <View style={styles.reviewContent}>
                <Text style={styles.reviewName}>{rev.name}</Text>
                <Text style={styles.reviewText}>{rev.review}</Text>
              </View>
            </View>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Rekomendasi Lainnya</Text>
          <FlatList
            data={rekomendasi}
            renderItem={renderBook}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 12 }}
          />
        </View>
      </ScrollView>

      <View style={styles.stickyButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBacaSekarang}>
          <Text style={styles.buttonText}>{translations[language].bacaSekarang || "Baca Sekarang"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  coverContainer: { alignItems: "center", marginTop: 20, marginBottom: 20 },
  cover: { width: width * 0.6, height: height * 0.4, borderRadius: 12, resizeMode: "cover", shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.25, shadowRadius: 6, elevation: 6 },
  infoContainer: { paddingHorizontal: 20 },
  title: { fontFamily: "PoppinsBold", fontSize: 20, color: "#000", marginBottom: 6 },
  author: { fontFamily: "PoppinsRegular", fontSize: 13, color: "#777", marginBottom: 20 },
  sectionTitle: { fontFamily: "PoppinsSemiBold", fontSize: 16, color: "#333", marginBottom: 6 },
  description: { fontFamily: "PoppinsRegular", fontSize: 13, color: "#555", marginBottom: 20, lineHeight: 20 },
  bookInfoContainer: { marginBottom: 20 },
  infoText: { fontFamily: "PoppinsRegular", fontSize: 13, color: "#555", marginBottom: 4 },
  reviewInputContainer: { flexDirection: "row", marginBottom: 16 },
  reviewInput: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8, fontFamily: "PoppinsRegular", fontSize: 13, color: "#000" },
  addButton: { backgroundColor: "#841849", paddingHorizontal: 12, marginLeft: 8, borderRadius: 12, justifyContent: "center", alignItems: "center" },
  addButtonText: { fontFamily: "PoppinsSemiBold", fontSize: 13, color: "#fff" },
  reviewCard: { flexDirection: "row", alignItems: "flex-start", backgroundColor: "#F5F5F5", padding: 12, borderRadius: 12, marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  reviewContent: { flex: 1 },
  reviewName: { fontFamily: "PoppinsSemiBold", fontSize: 13, color: "#333", marginBottom: 4 },
  reviewText: { fontFamily: "PoppinsRegular", fontSize: 13, color: "#555" },
  stickyButtonContainer: { position: "absolute", bottom: 20, left: 20, right: 20 },
  button: { backgroundColor: "#841849", paddingVertical: 12, borderRadius: 30, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.25, shadowRadius: 6, elevation: 6 },
  buttonText: { fontFamily: "PoppinsMedium", fontSize: 14, color: "#fff" },
  bookCard: { width: 110, marginRight: 14 },
  cardBox: { backgroundColor: "#fff", borderRadius: 12, padding: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.12, shadowRadius: 3, elevation: 3 },
  bookCover: { width: "100%", height: 150, borderRadius: 10, resizeMode: "cover", marginBottom: 8 },
  bookTitle: { fontFamily: "PoppinsMedium", fontSize: 11, color: "#000" },
  bookAuthor: { fontFamily: "PoppinsRegular", fontSize: 10, color: "#777" },
});

export default DetailBuku;