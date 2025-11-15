import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Beranda from "../screens/Beranda";
import Jelajahi from "../screens/Jelajahi";
import Perpustakaan from "../screens/Perpustakaan";
import AkunStack from "./AkunStack";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../../translations";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const colors = {
    background: theme === "light" ? "#fff" : "#121212",
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#841849",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { height: 60, paddingBottom: 5, backgroundColor: colors.background },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{ tabBarLabel: t.beranda, tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Jelajahi"
        component={Jelajahi}
        options={{ tabBarLabel: t.jelajahi, tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Perpustakaan"
        component={Perpustakaan}
        options={{ tabBarLabel: t.perpustakaan, tabBarIcon: ({ color, size }) => <Ionicons name="book-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Akun"
        component={AkunStack}
        options={{ tabBarLabel: t.akun, tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}