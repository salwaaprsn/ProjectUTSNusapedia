import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Animated } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const TentangAplikasi = () => {
  const { theme, fadeAnim } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0D0D0D" : "#F9F9F9", opacity: fadeAnim },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" }}
          style={styles.logo}
        />
        <Text style={[styles.title, { color: isDark ? "#FFF" : "#841849" }]}>Tentang Nusapedia</Text>

        <View style={[styles.card, { backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF" }]}>
          <Text style={[styles.text, { color: isDark ? "#DDD" : "#333" }]}>
            <Text style={styles.bold}>Nusapedia</Text> merupakan aplikasi perpustakaan digital yang
            dikembangkan untuk mempermudah mahasiswa dalam mengakses, membaca, dan menyimpan berbagai
            referensi akademik maupun literatur populer.
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF" }]}>
          <Text style={[styles.text, { color: isDark ? "#DDD" : "#333" }]}>
            Aplikasi ini dirancang dengan antarmuka yang ramah pengguna, mendukung mode terang dan
            gelap, serta menyediakan fitur koleksi pribadi dan riwayat baca untuk meningkatkan
            pengalaman membaca digital.
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF" }]}>
          <Text style={[styles.text, { color: isDark ? "#DDD" : "#333" }]}>
            <Text style={styles.bold}>Versi Aplikasi:</Text> 1.0.0{"\n"}
            <Text style={styles.bold}>Dikembangkan oleh:</Text> Tim Pengembang Nusapedia{"\n"}
            <Text style={styles.bold}>Kontak:</Text> support@nusapedia.id
          </Text>
        </View>

        <Text style={[styles.footer, { color: isDark ? "#777" : "#666" }]}>
          © 2025 Nusapedia. Semua hak cipta dilindungi undang-undang.
        </Text>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, alignItems: "center", paddingBottom: 40 },
  logo: { width: 120, height: 120, marginBottom: 20, borderRadius: 60 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 15, textAlign: "center" },
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  text: { fontSize: 15, lineHeight: 22, textAlign: "justify" },
  bold: { fontWeight: "700" },
  footer: { fontSize: 13, textAlign: "center", marginTop: 20 },
});

export default TentangAplikasi;