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

const FleksibelDanPraktis = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/fleksibeldanpraktis.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Fleksibel dan Praktis</Text>

      <Text style={styles.description}>
        Mau baca buku fisik atau digital? Pilih cara yang paling nyaman.
        Nusapedia bikin semuanya jadi mudah!
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
  ...require("./TemukanBukuFavoritmu").default.styles,
});

export default FleksibelDanPraktis;