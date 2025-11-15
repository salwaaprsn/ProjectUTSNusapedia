import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const KebijakanPrivasi = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    if (isChecked) {
      navigation.goBack(); // bisa diubah ke navigation.navigate("Masuk")
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kebijakan Privasi</Text>
      </View>

      {/* KONTEN */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        <Text style={styles.title}>KEBIJAKAN PRIVASI APLIKASI NUSAPEDIA</Text>
        <Text style={styles.updated}>Diperbaharui tanggal 10 November 2025</Text>

        <Text style={styles.text}>
          Dokumen ini menjelaskan bagaimana Nusapedia mengumpulkan, menggunakan, menyimpan, dan melindungi informasi
          pribadi pengguna. Dengan menggunakan layanan kami, pengguna dianggap telah memahami dan menyetujui
          seluruh ketentuan yang diuraikan dalam Kebijakan Privasi ini.
        </Text>

        <Text style={styles.subtitle}>1. Pengumpulan Data Pribadi</Text>
        <Text style={styles.text}>
          Nusapedia dapat mengumpulkan data seperti nama, alamat surel, nomor telepon, preferensi bacaan, serta data
          aktivitas dalam aplikasi untuk keperluan peningkatan layanan dan pengalaman pengguna.
        </Text>

        <Text style={styles.subtitle}>2. Tujuan Penggunaan Data</Text>
        <Text style={styles.text}>
          Data digunakan untuk menyediakan rekomendasi konten yang relevan, meningkatkan keamanan, melakukan analisis
          internal, serta menyempurnakan performa aplikasi agar sesuai kebutuhan pengguna.
        </Text>

        <Text style={styles.subtitle}>3. Persetujuan Pengguna</Text>
        <Text style={styles.text}>
          Dengan menggunakan aplikasi, pengguna memberikan persetujuan kepada Nusapedia untuk mengelola data pribadi
          sesuai ketentuan ini. Pengguna berhak menarik persetujuan sewaktu-waktu dengan konsekuensi penghentian
          layanan tertentu.
        </Text>

        <Text style={styles.subtitle}>4. Penyimpanan dan Keamanan Data</Text>
        <Text style={styles.text}>
          Kami menerapkan langkah-langkah keamanan teknis dan administratif, termasuk enkripsi, kontrol akses, serta
          pemantauan sistem, guna mencegah akses tidak sah, penyalahgunaan, atau kebocoran informasi.
        </Text>

        <Text style={styles.subtitle}>5. Pengungkapan kepada Pihak Ketiga</Text>
        <Text style={styles.text}>
          Nusapedia tidak akan menjual atau menyewakan data pengguna kepada pihak ketiga. Namun, data dapat dibagikan
          dengan mitra layanan untuk keperluan teknis seperti penyimpanan cloud, analitik, atau sistem pembayaran,
          dengan tetap menjaga kerahasiaan informasi.
        </Text>

        <Text style={styles.subtitle}>6. Hak Pengguna</Text>
        <Text style={styles.text}>
          Pengguna berhak mengakses, memperbarui, mengoreksi, atau menghapus data pribadi yang tersimpan. Permintaan
          dapat diajukan melalui saluran bantuan resmi Nusapedia, dan akan diproses sesuai ketentuan hukum yang berlaku.
        </Text>

        <Text style={styles.subtitle}>7. Penggunaan Cookies dan Teknologi Serupa</Text>
        <Text style={styles.text}>
          Aplikasi dapat menggunakan cookies atau teknologi serupa untuk mengingat preferensi pengguna dan meningkatkan
          kualitas interaksi. Pengguna dapat mengatur izin cookies melalui pengaturan perangkat masing-masing.
        </Text>

        <Text style={styles.subtitle}>8. Penyimpanan Data Internasional</Text>
        <Text style={styles.text}>
          Data pengguna dapat disimpan atau diproses di luar wilayah negara pengguna berada, namun tetap berada di
          bawah standar perlindungan data yang sepadan dengan peraturan nasional.
        </Text>

        <Text style={styles.subtitle}>9. Perubahan atas Kebijakan Privasi</Text>
        <Text style={styles.text}>
          Nusapedia dapat memperbarui Kebijakan Privasi ini secara berkala untuk menyesuaikan dengan perubahan hukum
          atau kebutuhan bisnis. Pengguna akan diberitahu melalui aplikasi apabila terjadi perubahan signifikan.
        </Text>

        <Text style={styles.subtitle}>10. Kontak dan Pertanyaan</Text>
        <Text style={styles.text}>
          Jika pengguna memiliki pertanyaan atau keluhan terkait pengelolaan data pribadi, dapat menghubungi kami
          melalui layanan bantuan resmi di dalam aplikasi Nusapedia atau melalui alamat email support@nusapedia.com.
        </Text>
      </ScrollView>

      {/* BAGIAN BAWAH */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setIsChecked(!isChecked)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
            {isChecked && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text style={styles.checkboxText}>
            Saya telah membaca dan menyetujui Kebijakan Privasi Nusapedia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.agreeButton,
            { backgroundColor: isChecked ? "#841849" : "#C0B9B9" },
          ]}
          onPress={handleAgree}
          disabled={!isChecked}
          activeOpacity={0.8}
        >
          <Text style={styles.agreeText}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#841849",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 12,
    height: 95,
  },
  backButton: { marginRight: 6 },
  headerTitle: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
  content: { padding: 20 },
  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
  },
  updated: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 13.5,
    color: "#000",
    marginTop: 12,
    marginBottom: 4,
  },
  text: {
    fontFamily: "PoppinsMedium",
    fontSize: 11.5,
    color: "#4B4848",
    lineHeight: 20,
    marginBottom: 8,
    textAlign: "justify",
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    padding: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#841849",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#841849",
  },
  checkboxText: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    color: "#333",
    flex: 1,
  },
  agreeButton: {
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
  },
  agreeText: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
  },
});

export default KebijakanPrivasi;