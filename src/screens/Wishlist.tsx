import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { UserContext, Buku } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../../translations";

const Wishlist: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { wishlist, removeFromWishlist } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const isDark = theme === "dark";
  const t = translations[language];

  const handleRemove = (id: number) => {
    Alert.alert(
      t.hapusWishlist || "Hapus dari Wishlist?",
      t.konfirmasiHapus || "Apakah Anda yakin ingin menghapus buku ini dari wishlist?",
      [
        { text: t.batal || "Batal", style: "cancel" },
        { text: t.ya || "Ya", onPress: () => removeFromWishlist(id) },
      ]
    );
  };

  const renderItem = ({ item }: { item: Buku }) => (
    <TouchableOpacity
      style={[styles.bookCard, { backgroundColor: isDark ? "#1E1E1E" : "#FFE5E5" }]}
      onPress={() => navigation.navigate("DetailBuku", { item })}
      activeOpacity={0.8}
    >
      <Image source={item.cover} style={styles.bookCover} />
      <Text numberOfLines={1} style={[styles.bookTitle, { color: isDark ? "#fff" : "#841849" }]}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={[styles.bookAuthor, { color: isDark ? "#bbb" : "#555" }]}>
        {item.author}
      </Text>

      <TouchableOpacity
        style={[styles.removeButton, { backgroundColor: "#841849" }]}
        onPress={() => handleRemove(item.id)}
      >
        <Text style={styles.removeText}>{t.hapus || "Hapus"}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? "#fff" : "#841849" }]}>{t.wishlist}</Text>
      </View>

      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ padding: 16 }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: isDark ? "#fff" : "#555" }]}>{t.wishlistKosong}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },
  title: { fontSize: 20, fontFamily: "PoppinsSemiBold" },
  bookCard: {
    flex: 0.48,
    marginBottom: 16,
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  bookCover: { width: "100%", height: 140, borderRadius: 10, marginBottom: 6, resizeMode: "cover" },
  bookTitle: { fontSize: 13, fontFamily: "PoppinsSemiBold" },
  bookAuthor: { fontSize: 11, fontFamily: "PoppinsRegular", marginBottom: 4 },
  removeButton: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 10 },
  removeText: { fontSize: 12, color: "#fff", fontFamily: "PoppinsMedium" },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 },
  emptyText: { fontSize: 16, fontFamily: "PoppinsMedium" },
});

export default Wishlist;