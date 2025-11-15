// src/navigation/AkunStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Akun from "../screens/Akun";
import EditProfil from "../screens/EditProfil";
import RiwayatBaca from "../screens/RiwayatBaca";
import Wishlist from "../screens/Wishlist";
import BantuanFAQ from "../screens/BantuanFAQ";
import TentangAplikasi from "../screens/TentangAplikasi";

export type AkunStackParamList = {
  Akun: undefined;
  EditProfil: undefined;
  RiwayatBaca: undefined;
  Wishlist: undefined;
  BantuanFAQ: undefined;
  TentangAplikasi: undefined;
};

const Stack = createNativeStackNavigator<AkunStackParamList>();

const AkunStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Akun">
      <Stack.Screen name="Akun" component={Akun} />
      <Stack.Screen name="EditProfil" component={EditProfil} />
      <Stack.Screen name="RiwayatBaca" component={RiwayatBaca} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="BantuanFAQ" component={BantuanFAQ} />
      <Stack.Screen name="TentangAplikasi" component={TentangAplikasi} />
    </Stack.Navigator>
  );
};

export default AkunStack;