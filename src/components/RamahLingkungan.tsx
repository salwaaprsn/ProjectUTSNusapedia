import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RamahLingkungan = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/ramahlingkungan.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ramah Lingkungan</Text>

      <Text style={styles.description}>
        Kurangi penggunaan kertas dengan membaca versi digital. Bersama
        Nusapedia, kamu ikut menjaga bumi kita!
      </Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Masuk" as never)}
      >
        <Text style={styles.buttonPrimaryText}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.navigate("Daftar" as never)}
      >
        <Text style={styles.buttonOutlineText}>Belum punya akun? Daftar dulu</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Dengan masuk atau mendaftar, kamu menyetujui{" "}
        <Text style={styles.linkText}>Ketentuan Layanan</Text> dan{" "}
        <Text style={styles.linkText}>Kebijakan Privasi</Text>.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 35,
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: "#4B4848",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 320,
    marginBottom: 30,
  },
  buttonPrimary: {
    width: "85%",
    backgroundColor: "#841849",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonPrimaryText: {
    fontFamily: "PoppinsBold",
    color: "#FFFFFF",
    fontSize: 16,
  },
  buttonOutline: {
    width: "85%",
    borderWidth: 2,
    borderColor: "#841849",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonOutlineText: {
    fontFamily: "PoppinsBold",
    color: "#841849",
    fontSize: 16,
    textAlign: "center",
  },
  footerText: {
    fontFamily: "PoppinsRegular",
    fontSize: 11,
    color: "#4B4848",
    textAlign: "center",
    maxWidth: 320,
  },
  linkText: {
    fontFamily: "PoppinsBold",
    color: "#841849",
  },
});

export default RamahLingkungan;