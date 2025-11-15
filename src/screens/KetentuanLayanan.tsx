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

const KetentuanLayanan = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    if (isChecked) {
      navigation.goBack(); // bisa diganti ke navigation.navigate("Masuk")
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
        <Text style={styles.headerTitle}>Ketentuan Layanan</Text>
      </View>

      {/* KONTEN */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        <Text style={styles.title}>KETENTUAN PENGGUNAAN APLIKASI NUSAPEDIA</Text>
        <Text style={styles.updated}>Diperbaharui tanggal 10 November 2025</Text>

        <Text style={styles.text}>
          Dokumen ini menjelaskan hak, kewajiban, serta batas tanggung jawab antara pengguna dan pengelola aplikasi
          Nusapedia. Dengan mengakses atau menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan
          menyetujui seluruh ketentuan yang berlaku tanpa syarat apa pun.
        </Text>

        <Text style={styles.subtitle}>1. Ruang Lingkup Layanan</Text>
        <Text style={styles.text}>
          Ketentuan ini berlaku untuk seluruh fitur dan layanan yang disediakan oleh Nusapedia, baik dalam bentuk
          aplikasi seluler, situs web, maupun media digital lain yang dikelola secara resmi oleh tim Nusapedia.
        </Text>

        <Text style={styles.subtitle}>2. Pendaftaran dan Keamanan Akun</Text>
        <Text style={styles.text}>
          Pengguna wajib memberikan informasi yang akurat saat melakukan pendaftaran. Anda bertanggung jawab penuh
          terhadap keamanan akun, termasuk menjaga kerahasiaan kata sandi dan mencegah penyalahgunaan akun.
        </Text>

        <Text style={styles.subtitle}>3. Hak Kekayaan Intelektual</Text>
        <Text style={styles.text}>
          Seluruh konten yang terdapat di aplikasi ini—termasuk teks, gambar, ikon, logo, serta perangkat lunak—merupakan
          milik eksklusif Nusapedia dan dilindungi oleh hukum yang berlaku. Pengguna dilarang menyalin atau
          memodifikasi konten tanpa izin tertulis.
        </Text>

        <Text style={styles.subtitle}>4. Kewajiban Pengguna</Text>
        <Text style={styles.text}>
          Pengguna diwajibkan menggunakan layanan dengan itikad baik dan tidak melakukan pelanggaran hukum, penipuan,
          atau penyebaran konten yang melanggar hak orang lain. Aktivitas yang merugikan pihak ketiga akan dikenai
          sanksi sesuai peraturan.
        </Text>

        <Text style={styles.subtitle}>5. Penggunaan Data dan Privasi</Text>
        <Text style={styles.text}>
          Kami mengelola data pribadi pengguna sesuai dengan Kebijakan Privasi Nusapedia. Data yang dikumpulkan
          digunakan untuk meningkatkan kualitas layanan dan tidak akan disebarkan tanpa persetujuan pengguna.
        </Text>

        <Text style={styles.subtitle}>6. Pembatasan Tanggung Jawab</Text>
        <Text style={styles.text}>
          Nusapedia tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan pengguna, gangguan teknis,
          atau akses tidak sah oleh pihak ketiga. Pengguna diharapkan memahami risiko penggunaan layanan digital.
        </Text>

        <Text style={styles.subtitle}>7. Perubahan dan Pembaruan Layanan</Text>
        <Text style={styles.text}>
          Kami berhak untuk melakukan modifikasi, penyesuaian, atau penghentian sebagian maupun seluruh layanan
          sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Pengguna diimbau meninjau dokumen ini secara berkala.
        </Text>

        <Text style={styles.subtitle}>8. Penghentian Akses</Text>
        <Text style={styles.text}>
          Nusapedia berhak menangguhkan atau menonaktifkan akun pengguna yang terindikasi melanggar ketentuan, melakukan
          penyalahgunaan, atau mengganggu kenyamanan pengguna lain tanpa kewajiban memberikan kompensasi apa pun.
        </Text>

        <Text style={styles.subtitle}>9. Hukum yang Berlaku</Text>
        <Text style={styles.text}>
          Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Segala sengketa akan diselesaikan
          melalui musyawarah, dan apabila tidak tercapai kesepakatan, akan diserahkan kepada pengadilan yang berwenang.
        </Text>

        <Text style={styles.subtitle}>10. Persetujuan Pengguna</Text>
        <Text style={styles.text}>
          Dengan melanjutkan penggunaan aplikasi Nusapedia, pengguna menyatakan telah membaca, memahami, dan menyetujui
          seluruh isi Ketentuan Layanan ini secara sadar dan tanpa paksaan dari pihak mana pun.
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
            Saya telah membaca dan menyetujui Ketentuan Layanan Nusapedia
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

export default KetentuanLayanan;