import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Icon: undefined;
  OnBoarding: undefined;
  Masuk: undefined;
  PemulihanAkun: undefined;
  Daftar: undefined;
};

const Icon = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnBoarding");
    }, 2000); // delay 2 detik sebelum pindah
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>N</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#841849",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 120,
    color: "#fff",
    fontFamily: "ProtestGuerrilla", // nama font custom kamu
  },
});

export default Icon;