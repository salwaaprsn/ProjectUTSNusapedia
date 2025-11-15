import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Temukan Buku Favoritmu",
    description:
      "Ribuan buku seru siap kamu pinjam langsung dari perpustakaan. Semua ada di genggaman lewat Nusapedia!",
    image: require("../assets/images/temukanbukufavoritmu.jpg"),
  },
  {
    id: "2",
    title: "Fleksibel dan Praktis",
    description:
      "Mau baca buku fisik atau digital? Pilih cara yang paling nyaman. Nusapedia bikin semuanya jadi mudah!",
    image: require("../assets/images/fleksibeldanpraktis.jpg"),
  },
  {
    id: "3",
    title: "Ramah Lingkungan",
    description:
      "Catatan peminjaman otomatis dan tanpa kertas. Yuk, ikut jaga lingkungan sambil terus membaca di Nusapedia!",
    image: require("../assets/images/ramahlingkungan.jpg"),
  },
];

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  // biar index update-nya pas scroll selesai (bukan pas scroll jalan)
  const handleMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("Masuk" as never);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />

      <View style={styles.indicatorWrapper}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? "Mulai" : "Selanjutnya"}
          </Text>
        </TouchableOpacity>

        <Text
          style={[styles.footerText, { textAlign: "center", paddingHorizontal: 30 }]}
        >
          Dengan masuk atau mendaftar, kamu menyetujui{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("KetentuanLayanan" as never)}
          >
            Ketentuan Layanan
          </Text>{" "}
          dan{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("KebijakanPrivasi" as never)}
          >
            Kebijakan Privasi
          </Text>
          .
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", justifyContent: "space-between" },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    height: height * 0.7,
  },
  image: { width: 300, height: 240, marginBottom: 25 },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    color: "#4B4848",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 320,
  },
  indicatorWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -20,
    marginBottom: 150,
    gap: 6,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#C0B9B9" },
  activeDot: { backgroundColor: "#841849" },
  bottomWrapper: { alignItems: "center", paddingHorizontal: 15, marginBottom: 25 },
  buttonPrimary: {
    width: "96%",
    backgroundColor: "#841849",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: { fontFamily: "PoppinsMedium", fontSize: 15, color: "#fff" },
  footerText: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: "#4B4848",
    lineHeight: 17,
  },
  linkText: {
    color: "#841849",
    fontFamily: "PoppinsBold",
    textDecorationLine: "underline",
  },
});

export default OnBoarding;