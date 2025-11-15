import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const PemulihanAkun = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.trim()) {
      Alert.alert("Kesalahan", "Mohon masukkan email terlebih dahulu.");
      return;
    }

    // simulasi proses kirim email
    setTimeout(() => {
      Alert.alert("Berhasil!", "Email berhasil dikirim ke " + email);
      console.log("Pemulihan dikirim ke:", email);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pemulihan Akun</Text>
      </View>

      <Image
        source={require("../assets/images/sad.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Pemulihan Akun</Text>
      <Text style={styles.subtitle}>
        Masukkan email Anda yang sudah terdaftar kemudian ikuti langkah pada
        email yang Kami kirimkan.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email yang sudah terdaftar"
          placeholderTextColor="#B9B9B9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", alignItems: "center" },
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
  image: { width: 100, height: 100, marginTop: 60 },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: "#000",
    marginTop: 25,
  },
  subtitle: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  inputContainer: { width: "86%" },
  label: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 13,
    color: "#000",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    marginBottom: 16,
  },
  button: {
    width: "86%",
    backgroundColor: "#841849",
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "PoppinsMedium",
    fontSize: 15,
  },
});

export default PemulihanAkun;