// src/screens/Akun.tsx
import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Animated,
  BackHandler,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../../translations";

interface MenuItemProps {
  icon: string;
  text: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <TouchableOpacity
      style={[styles.menuItem, { borderBottomColor: isDark ? "#333" : "#eee" }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={22}
        color={isDark ? "#E0E0E0" : "#841849"}
        style={styles.icon}
      />
      <Text style={[styles.menuText, { color: isDark ? "#fff" : "#333" }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const Akun: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme, setThemeManually } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { language, setLanguageManually } = useContext(LanguageContext);
  const isDark = theme === "dark";
  const t = translations[language];

  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const fadeAnimModal = useRef(new Animated.Value(0)).current;

  const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true);
    Animated.parallel([
      Animated.timing(fadeAnimModal, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    Animated.parallel([
      Animated.timing(fadeAnimModal, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
    ]).start(() => setter(false));
  };

  const selectTheme = (mode: "light" | "dark") => {
    setThemeManually(mode);
    closeModal(setThemeModalVisible);
  };

  const handleLogout = () => {
    Alert.alert(t.keluarAkun, t.konfirmasiKeluar, [
      { text: t.batal, style: "cancel" },
      { text: t.ya, onPress: () => BackHandler.exitApp() },
    ]);
  };

  const renderModalButton = (
    key: string,
    icon: string,
    text: string,
    onPress: () => void
  ) => (
    <TouchableOpacity
      key={key}
      activeOpacity={0.8}
      style={[
        styles.modalButton,
        {
          backgroundColor: pressedButton === key ? "#FDE2E4" : "#fff",
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
      onPressIn={() => setPressedButton(key)}
      onPressOut={() => setPressedButton(null)}
      onPress={onPress}
    >
      <Text style={styles.modalIcon}>{icon}</Text>
      <Text style={styles.modalText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#121212" : "#fff" }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={[styles.header, { backgroundColor: isDark ? "#1E1E1E" : "#F9E6EB" }]}>
          <Image source={user.foto} style={styles.profileImage} />
          <Text style={[styles.profileName, { color: isDark ? "#fff" : "#841849" }]}>{user.nama}</Text>
          <Text style={[styles.profileEmail, { color: isDark ? "#ccc" : "#555" }]}>{user.email}</Text>
        </View>

        {/* AKTIVITAS */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#841849" }]}>{t.aktivitas}</Text>
          <MenuItem icon="book-outline" text={t.riwayatBaca} onPress={() => navigation.navigate("RiwayatBaca")} />
          <MenuItem icon="heart-outline" text={t.wishlist} onPress={() => navigation.navigate("Wishlist")} />
        </View>

        {/* PENGATURAN */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#841849" }]}>{t.pengaturan}</Text>
          <MenuItem
            icon="color-palette-outline"
            text={`${t.temaAplikasi} (${theme === "light" ? "🌞 Terang" : "🌙 Gelap"})`}
            onPress={() => openModal(setThemeModalVisible)}
          />
          <MenuItem
            icon="globe-outline"
            text={`${t.bahasa}: ${language === "Indonesia" ? "Bahasa Indonesia" : "English"}`}
            onPress={() => openModal(setLanguageModalVisible)}
          />
        </View>

        {/* BANTUAN */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#841849" }]}>{t.bantuan}</Text>
          <MenuItem icon="help-circle-outline" text={t.bantuanFAQ} onPress={() => navigation.navigate("BantuanFAQ")} />
          <MenuItem icon="information-circle-outline" text={t.tentangAplikasi} onPress={() => navigation.navigate("TentangAplikasi")} />
        </View>

        {/* AKSI */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: isDark ? "#fff" : "#841849" }]}>{t.aksi}</Text>
          <MenuItem icon="create-outline" text={t.editProfil} onPress={() => navigation.navigate("EditProfil")} />
          <MenuItem icon="log-out-outline" text={t.keluarAkun} onPress={handleLogout} />
        </View>

        <Text style={[styles.versionText, { color: isDark ? "#aaa" : "#888" }]}>{t.versi}</Text>
      </ScrollView>

      {/* MODAL TEMA */}
      <Modal transparent visible={themeModalVisible} animationType="fade" onRequestClose={() => closeModal(setThemeModalVisible)}>
        <View style={styles.modalOverlay} pointerEvents="box-none">
          <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }], opacity: fadeAnimModal }]} pointerEvents="auto">
            <Text style={styles.modalTitle}>{t.pilihTema || "Pilih Tema"}</Text>
            {renderModalButton("lightTheme", "🌞", "Terang", () => selectTheme("light"))}
            {renderModalButton("darkTheme", "🌙", "Gelap", () => selectTheme("dark"))}
          </Animated.View>
        </View>
      </Modal>

      {/* MODAL BAHASA */}
      <Modal transparent visible={languageModalVisible} animationType="fade" onRequestClose={() => closeModal(setLanguageModalVisible)}>
        <View style={styles.modalOverlay} pointerEvents="box-none">
          <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }], opacity: fadeAnimModal }]} pointerEvents="auto">
            <Text style={styles.modalTitle}>{t.pilihBahasa || "Pilih Bahasa"}</Text>
            {renderModalButton("indonesiaLang", "🇮🇩", "Bahasa Indonesia", () => { setLanguageManually("Indonesia"); closeModal(setLanguageModalVisible); })}
            {renderModalButton("englishLang", "🇺🇸", "English", () => { setLanguageManually("English"); closeModal(setLanguageModalVisible); })}
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: "center", justifyContent: "center", paddingVertical: 30, borderBottomWidth: 1 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  profileName: { fontSize: 16, fontFamily: "PoppinsSemiBold" },
  profileEmail: { fontSize: 14, fontFamily: "PoppinsMedium" },
  sectionContainer: { marginTop: 24 },
  sectionTitle: { fontSize: 16, fontFamily: "PoppinsSemiBold", marginBottom: 8, marginLeft: 16 },
  menuItem: { flexDirection: "row", alignItems: "center", paddingVertical: 14, paddingHorizontal: 20, borderBottomWidth: 1 },
  icon: { marginRight: 12 },
  menuText: { fontSize: 15, fontFamily: "PoppinsMedium" },
  versionText: { textAlign: "center", fontSize: 13, fontFamily: "PoppinsMedium", marginVertical: 30 },

  // Modal
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)" },
  modalContent: { width: 250, backgroundColor: "#fff", borderRadius: 12, padding: 20 },
  modalTitle: { fontSize: 16, fontFamily: "PoppinsSemiBold", marginBottom: 12, textAlign: "center" },
  modalButton: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, marginVertical: 6, alignItems: "center" },
  modalIcon: { fontSize: 18, marginRight: 8 },
  modalText: { fontSize: 15, fontFamily: "PoppinsMedium" },
});

export default Akun;