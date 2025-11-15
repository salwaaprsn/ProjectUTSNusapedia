// src/screens/BantuanFAQ.tsx
import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import Ionicons from "react-native-vector-icons/Ionicons";

// Enable LayoutAnimation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FAQItemProps {
  question: string;
  answer: string;
  isDark: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isDark }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.faqItem, { backgroundColor: isDark ? "#1E1E1E" : "#F5F5F5" }]}>
      <TouchableOpacity style={styles.questionRow} onPress={toggleExpand}>
        <Ionicons
          name={expanded ? "remove-circle-outline" : "add-circle-outline"}
          size={20}
          color={isDark ? "#FFF" : "#841849"}
          style={{ marginRight: 10 }}
        />
        <Text style={[styles.question, { color: isDark ? "#FFF" : "#000" }]}>{question}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={[styles.answer, { color: isDark ? "#CCC" : "#444" }]}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const BantuanFAQ = () => {
  const { theme, fadeAnim } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const faqList = [
    {
      question: "Bagaimana cara menyimpan buku ke koleksi?",
      answer: "Anda dapat menyimpan buku ke koleksi dengan menekan ikon ‘+ Koleksi’ di halaman detail buku.",
    },
    {
      question: "Apakah aplikasi ini bisa digunakan tanpa koneksi internet?",
      answer: "Sebagian fitur seperti pencarian dan rekomendasi memerlukan koneksi internet untuk berfungsi.",
    },
    {
      question: "Bagaimana cara mengubah bahasa aplikasi?",
      answer: "Pergi ke menu Akun > Pengaturan Bahasa, lalu pilih bahasa yang Anda inginkan.",
    },
    {
      question: "Saya lupa kata sandi, apa yang harus dilakukan?",
      answer: "Gunakan fitur Pemulihan Akun pada halaman masuk, lalu ikuti instruksi yang diberikan.",
    },
    {
      question: "Bagaimana cara menghapus buku dari koleksi?",
      answer: "Tekan ikon hapus di daftar Koleksi Saya pada halaman buku.",
    },
    {
      question: "Bisakah saya membagikan buku ke teman?",
      answer: "Gunakan fitur bagikan di halaman detail buku.",
    },
    {
      question: "Bagaimana cara mengganti tema aplikasi?",
      answer: "Pergi ke menu Akun > Tema Aplikasi, pilih Terang atau Gelap.",
    },
    {
      question: "Apakah aplikasi ini aman untuk anak-anak?",
      answer: "Aplikasi ini aman, namun beberapa konten mungkin memerlukan bimbingan orang tua.",
    },
    {
      question: "Bagaimana cara logout dari aplikasi?",
      answer: "Pergi ke menu Akun, kemudian tekan tombol 'Keluar Akun'.",
    },
    {
      question: "Bisakah saya menambahkan buku secara manual?",
      answer: "Saat ini fitur tambah buku manual belum tersedia, hanya bisa menambahkan dari katalog.",
    },
    {
      question: "Bagaimana cara melihat riwayat baca?",
      answer: "Pergi ke menu Akun > Riwayat Baca untuk melihat buku yang pernah dibaca.",
    },
    {
      question: "Apakah data saya tersimpan di cloud?",
      answer: "Ya, semua data akun dan koleksi disimpan secara aman di server cloud kami.",
    },
    {
      question: "Bagaimana cara melaporkan bug atau masalah?",
      answer: "Gunakan menu Bantuan > Hubungi Kami untuk melaporkan masalah.",
    },
  ];

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0D0D0D" : "#FFFFFF", opacity: fadeAnim },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.title, { color: isDark ? "#FFF" : "#000" }]}>Bantuan & FAQ</Text>
        {faqList.map((item, index) => (
          <FAQItem key={index} {...item} isDark={isDark} />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 20, fontFamily: "PoppinsSemiBold" },
  faqItem: {
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  questionRow: { flexDirection: "row", alignItems: "center" },
  question: { fontSize: 16, fontFamily: "PoppinsMedium", flexShrink: 1 },
  answerContainer: { paddingTop: 6, paddingLeft: 30, paddingRight: 10 },
  answer: { fontSize: 14, lineHeight: 20, fontFamily: "PoppinsRegular", flexWrap: "wrap" },
});

export default BantuanFAQ;