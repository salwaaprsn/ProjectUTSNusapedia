import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext, Buku } from "../context/UserContext";

const RiwayatBaca = ({ navigation }: { navigation: any }) => {
  const { theme } = useContext(ThemeContext);
  const { riwayatBaca } = useContext(UserContext);
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#841849" }]}>Riwayat Baca</Text>

      {riwayatBaca.length === 0 ? (
        <Text style={{ color: isDark ? "#ccc" : "#555", textAlign: "center", marginTop: 20 }}>
          Belum ada buku yang dibaca
        </Text>
      ) : (
        <FlatList
          data={riwayatBaca}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Buku }) => (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: isDark ? "#1E1E1E" : "#FFE5E5" }]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("DetailBuku", { item })}
            >
              {item.cover && <Image source={item.cover} style={styles.cover} />}
              <View style={styles.textContainer}>
                <Text style={[styles.bookTitle, { color: isDark ? "#fff" : "#841849" }]} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={[styles.bookTime, { color: isDark ? "#bbb" : "#555" }]}>{item.author}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontFamily: "PoppinsSemiBold", marginBottom: 16, textAlign: "center" },
  card: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  cover: { width: 60, height: 90, borderRadius: 8, marginRight: 14 },
  textContainer: { flex: 1 },
  bookTitle: { fontSize: 16, fontFamily: "PoppinsSemiBold" },
  bookTime: { fontSize: 12, fontFamily: "PoppinsRegular", marginTop: 2 },
});

export default RiwayatBaca;