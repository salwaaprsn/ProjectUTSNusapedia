import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "./src/components/Icon";
import OnBoarding from "./src/screens/OnBoarding";
import Masuk from "./src/screens/Masuk";
import Daftar from "./src/screens/Daftar";
import PemulihanAkun from "./src/screens/PemulihanAkun";
import KebijakanPrivasi from "./src/screens/KebijakanPrivasi";
import KetentuanLayanan from "./src/screens/KetentuanLayanan";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

import { ThemeProvider } from "./src/context/ThemeContext";
import { LanguageProvider } from "./src/context/LanguageContext";
import { UserProvider } from "./src/context/UserContext";

import DetailBuku from "./src/screens/DetailBuku";
import ListBuku from "./src/screens/ListBuku";

// --------------------------------------------------
// N A V I G A T I O N   T Y P E S
// --------------------------------------------------

export type RootStackParamList = {
  Icon: undefined;
  OnBoarding: undefined;
  Masuk: undefined;
  Daftar: undefined;
  PemulihanAkun: undefined;
  Beranda: undefined;
  DetailBuku: { item: any };

  // PARAMETER YANG BENAR UNTUK LISTBUKU
  ListBuku: { 
    label: string; 
    data: any[];
  };

  KebijakanPrivasi: undefined;
  KetentuanLayanan: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// --------------------------------------------------
// A P P
// --------------------------------------------------

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider>
        <LanguageProvider>
          <UserProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Icon"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="Icon" component={Icon} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Masuk" component={Masuk} />
                <Stack.Screen name="Daftar" component={Daftar} />
                <Stack.Screen name="PemulihanAkun" component={PemulihanAkun} />
                <Stack.Screen name="Beranda" component={BottomTabNavigator} />
                <Stack.Screen name="DetailBuku" component={DetailBuku} />
                <Stack.Screen name="ListBuku" component={ListBuku} />
                <Stack.Screen name="KebijakanPrivasi" component={KebijakanPrivasi} />
                <Stack.Screen name="KetentuanLayanan" component={KetentuanLayanan} />
              </Stack.Navigator>
            </NavigationContainer>
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
});

export default App;