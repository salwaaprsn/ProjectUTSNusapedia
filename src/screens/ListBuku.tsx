// src/screens/ListBuku.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Book, allBooks } from "../data/databuku";

type Props = NativeStackScreenProps<RootStackParamList, "ListBuku">;

const ListBuku: React.FC<Props> = ({ route, navigation }) => {
  const { label, data } = route.params;

  const renderBook = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => navigation.navigate("DetailBuku", { item })}
    >
      <Image
        source={item.cover}
        style={styles.bookCover}
      />
      <Text numberOfLines={1} style={styles.bookTitle}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.bookAuthor}>
        {item.author}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{label}</Text>
      <FlatList
        data={data}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 16 },
  header: { fontSize: 20, fontWeight: "600", marginBottom: 12, marginLeft: 16 },
  bookCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    padding: 8,
  },
  bookCover: { width: "100%", height: 160, borderRadius: 8, marginBottom: 8 },
  bookTitle: { fontSize: 14, fontWeight: "500", color: "#222" },
  bookAuthor: { fontSize: 12, color: "#666" },
});

export default ListBuku;
