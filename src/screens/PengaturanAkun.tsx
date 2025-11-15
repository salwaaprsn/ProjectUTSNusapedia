// src/screens/PengaturanAkun.tsx
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Animated,
  Switch,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../../translations";

const PengaturanAkun = () => {
  const { theme, toggleTheme, fadeAnim } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const isDark = theme === "dark";

  const [nama, setNama] = useState("Salwa Aprilia Santi");
  const [email, setEmail] = useState("salwa@nusaputra.ac.id");
  const [prodi, setProdi] = useState("Teknik Informatika");
  const [telepon, setTelepon] = useState("081234567890");

  const handleSave = () => {
    console.log("Data disimpan:", { nama, email, prodi, telepon });
    Alert.alert("✅ Sukses", "Perubahan berhasil disimpan!");
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#0D0D0D" : "#FFFFFF", opacity: fadeAnim },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Foto Profil */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.changePhotoBtn}>
            <Text
              style={[
                styles.changePhotoText,
                { color: isDark ? "#EEE" : "#007AFF", fontFamily: "PoppinsMedium" },
              ]}
            >
              Ubah Foto
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <Text style={[styles.label, { color: isDark ? "#CCC" : "#333" }]}>
            Nama Lengkap
          </Text>
          <TextInput
            value={nama}
            onChangeText={setNama}
            style={[
              styles.input,
              {
                color: isDark ? "#FFF" : "#000",
                borderColor: isDark ? "#555" : "#DDD",
                fontFamily: "PoppinsMedium",
              },
            ]}
            placeholder="Masukkan nama"
            placeholderTextColor={isDark ? "#777" : "#AAA"}
          />

          <Text style={[styles.label, { color: isDark ? "#CCC" : "#333" }]}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[
              styles.input,
              {
                color: isDark ? "#FFF" : "#000",
                borderColor: isDark ? "#555" : "#DDD",
                fontFamily: "PoppinsMedium",
              },
            ]}
            placeholder="Masukkan email"
            placeholderTextColor={isDark ? "#777" : "#AAA"}
          />

          <Text style={[styles.label, { color: isDark ? "#CCC" : "#333" }]}>
            Program Studi
          </Text>
          <TextInput
            value={prodi}
            onChangeText={setProdi}
            style={[
              styles.input,
              {
                color: isDark ? "#FFF" : "#000",
                borderColor: isDark ? "#555" : "#DDD",
                fontFamily: "PoppinsMedium",
              },
            ]}
            placeholder="Masukkan program studi"
            placeholderTextColor={isDark ? "#777" : "#AAA"}
          />

          <Text style={[styles.label, { color: isDark ? "#CCC" : "#333" }]}>
            Nomor Telepon
          </Text>
          <TextInput
            value={telepon}
            onChangeText={setTelepon}
            keyboardType="phone-pad"
            style={[
              styles.input,
              {
                color: isDark ? "#FFF" : "#000",
                borderColor: isDark ? "#555" : "#DDD",
                fontFamily: "PoppinsMedium",
              },
            ]}
            placeholder="Masukkan nomor telepon"
            placeholderTextColor={isDark ? "#777" : "#AAA"}
          />
        </View>

        {/* Tema dan Bahasa */}
        <View style={styles.switchContainer}>
          <Text
            style={[
              styles.switchLabel,
              { color: isDark ? "#FFF" : "#000", fontFamily: "PoppinsMedium" },
            ]}
          >
            {t.temaAplikasi}
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#CCC", true: "#841849" }}
            thumbColor={"#FFF"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text
            style={[
              styles.switchLabel,
              { color: isDark ? "#FFF" : "#000", fontFamily: "PoppinsMedium" },
            ]}
          >
            {t.bahasa}
          </Text>
          <TouchableOpacity onPress={toggleLanguage}>
            <Text
              style={{
                color: "#841849",
                fontFamily: "PoppinsMedium",
                fontSize: 14,
              }}
            >
              {language === "Indonesia" ? "English" : "Bahasa Indonesia"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Simpan */}
        <TouchableOpacity
          style={[
            styles.saveButton,
            { backgroundColor: isDark ? "#841849" : "#841849" },
          ]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>💾 Simpan Perubahan</Text>
        </TouchableOpacity>

        {/* Versi */}
        <Text
          style={[
            styles.versionText,
            { color: isDark ? "#999" : "#555" },
          ]}
        >
          {t.versi}
        </Text>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, alignItems: "center" },
  profileSection: { alignItems: "center", marginBottom: 25 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  changePhotoBtn: { marginTop: 10 },
  changePhotoText: { fontSize: 14 },
  form: { width: "100%", marginBottom: 30 },
  label: { fontSize: 14, marginBottom: 6, fontFamily: "PoppinsMedium" },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  switchLabel: { fontSize: 15 },
  saveButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFF",
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
  versionText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 13,
    fontFamily: "PoppinsMedium",
  },
});

export default PengaturanAkun;