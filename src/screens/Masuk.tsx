import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type MasukScreenProp = NativeStackNavigationProp<RootStackParamList, "Masuk">;

const Masuk = () => {
  const navigation = useNavigation<MasukScreenProp>();
  const [emailOrNim, setEmailOrNim] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!emailOrNim || !password) {
      Alert.alert("Error", "Harap isi semua kolom!");
      return;
    }
    // navigasi ke Beranda
    navigation.navigate("Beranda");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
          <Text style={styles.headerTitle}>Masuk dan Verifikasi</Text>
        </View>

        {/* Image */}
        <Image
          source={require("../assets/images/masuk.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Selamat datang di Nusapedia!</Text>
        <Text style={styles.subtitle}>
          Masuk atau daftar hanya dengan beberapa langkah mudah.
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email atau NIM Pengguna</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Email atau NIM Pengguna"
            placeholderTextColor="#B9B9B9"
            value={emailOrNim}
            onChangeText={setEmailOrNim}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan kata sandi"
            placeholderTextColor="#B9B9B9"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("PemulihanAkun")}
          >
            <Text style={styles.forgot}>Lupa Kata Sandi</Text>
          </TouchableOpacity>
        </View>

        {/* Button */}
        <View style={{ width: "100%", paddingHorizontal: 16, marginTop: 10 }}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Belum punya akun?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Daftar")}
          >
            Daftar
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 40,
  },
  header: {
    width: "100%",
    backgroundColor: "#841849",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 60,
    paddingTop: 55,
    paddingBottom: 12,
    height: 95,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
    marginLeft: 8,
  },
  image: { width: 250, height: 180, marginTop: 30, alignSelf: "center" },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: "#000",
    marginTop: 25,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  inputContainer: { width: "100%", paddingHorizontal: 16 },
  label: { fontFamily: "PoppinsSemiBold", fontSize: 13, color: "#000", marginBottom: 6 },
  input: { width: "100%", borderColor: "#E0E0E0", borderWidth: 1, borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontFamily: "PoppinsMedium", fontSize: 12, marginBottom: 16, color: "#000" },
  forgot: { alignSelf: "flex-end", color: "#841849", fontFamily: "PoppinsSemiBold", fontSize: 13, marginBottom: 20 },
  button: { width: "100%", backgroundColor: "#841849", borderRadius: 30, alignItems: "center", paddingVertical: 12 },
  buttonText: { color: "#fff", fontFamily: "PoppinsMedium", fontSize: 15 },
  footer: { fontFamily: "PoppinsMedium", fontSize: 13, color: "#444", marginTop: 15, textAlign: "center" },
  link: { color: "#841849", fontFamily: "PoppinsSemiBold" },
});

export default Masuk;