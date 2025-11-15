// src/screens/EditProfil.tsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { UserContext } from "../context/UserContext";

const EditProfil: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext); // Siap untuk i18n di masa depan
  const { user, setUser } = useContext(UserContext);

  const isDark = theme === "dark";

  const [nama, setNama] = useState(user.nama);
  const [email, setEmail] = useState(user.email);
  const [telepon, setTelepon] = useState(user.telepon);
  const [prodi, setProdi] = useState(user.prodi);

  const handleSave = () => {
    if (!nama || !email || !telepon || !prodi) {
      Alert.alert("Peringatan", "Harap isi semua field");
      return;
    }

    setUser({ ...user, nama, email, telepon, prodi });
    Alert.alert("Berhasil", "Profil berhasil diperbarui");
    navigation.goBack();
  };

  const inputStyle = {
    backgroundColor: isDark ? "#1E1E1E" : "#f5f5f5",
    color: isDark ? "#fff" : "#000",
  };

  const labelStyle = { color: isDark ? "#fff" : "#333" };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={user.foto} style={styles.avatar} />
          <Text style={[styles.title, { color: isDark ? "#fff" : "#841849" }]}>Edit Profil</Text>
        </View>

        <View style={styles.form}>
          {/** Nama */}
          <Text style={[styles.label, labelStyle]}>Nama</Text>
          <TextInput style={[styles.input, inputStyle]} value={nama} onChangeText={setNama} />

          {/** Email */}
          <Text style={[styles.label, labelStyle]}>Email</Text>
          <TextInput
            style={[styles.input, inputStyle]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/** Telepon */}
          <Text style={[styles.label, labelStyle]}>Telepon</Text>
          <TextInput
            style={[styles.input, inputStyle]}
            value={telepon}
            onChangeText={setTelepon}
            keyboardType="phone-pad"
          />

          {/** Prodi */}
          <Text style={[styles.label, labelStyle]}>Prodi</Text>
          <TextInput style={[styles.input, inputStyle]} value={prodi} onChangeText={setProdi} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { padding: 16 },
  header: { alignItems: "center", marginBottom: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  title: { fontSize: 20, fontFamily: "PoppinsSemiBold" },
  form: { marginBottom: 24 },
  label: { fontSize: 14, fontFamily: "PoppinsSemiBold", marginBottom: 6 },
  input: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#841849",
    marginHorizontal: 6,
    marginBottom: 24,
  },
  buttonText: { color: "#fff", fontSize: 16, fontFamily: "PoppinsMedium" },
});

export default EditProfil;