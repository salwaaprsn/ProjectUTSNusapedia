import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import semua halaman
import Masuk from "./Masuk";
import PemulihanAkun from "./PemulihanAkun";
import Daftar from "./Daftar";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Masuk"
        screenOptions={{ headerShown: false }} // biar header custom kamu yang tampil
      >
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="PemulihanAkun" component={PemulihanAkun} />
        <Stack.Screen name="Daftar" component={Daftar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;