// src/context/LanguageContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LanguageContextType {
  language: "Indonesia" | "English";
  toggleLanguage: () => void;
  setLanguageManually: (lang: "Indonesia" | "English") => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "Indonesia",
  toggleLanguage: () => {},
  setLanguageManually: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"Indonesia" | "English">("Indonesia");

  // Load language from AsyncStorage on mount
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLang = await AsyncStorage.getItem("appLanguage");
        if (storedLang === "Indonesia" || storedLang === "English") {
          setLanguage(storedLang);
        }
      } catch (err) {
        console.error("Gagal memuat bahasa:", err);
      }
    };
    loadLanguage();
  }, []);

  const toggleLanguage = async () => {
    try {
      const newLang = language === "Indonesia" ? "English" : "Indonesia";
      setLanguage(newLang);
      await AsyncStorage.setItem("appLanguage", newLang);
    } catch (err) {
      console.error("Gagal menyimpan bahasa:", err);
    }
  };

  const setLanguageManually = async (lang: "Indonesia" | "English") => {
    try {
      setLanguage(lang);
      await AsyncStorage.setItem("appLanguage", lang);
    } catch (err) {
      console.error("Gagal menyimpan bahasa:", err);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguageManually }}>
      {children}
    </LanguageContext.Provider>
  );
};