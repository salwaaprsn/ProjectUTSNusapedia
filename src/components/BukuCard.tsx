import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Book } from "../data/DataBuku";

interface Props {
  item: Book;
  onPress: () => void;
}

const BukuCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.cover} style={styles.cover} />
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      <Text numberOfLines={1} style={styles.author}>{item.author}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { width: 110, marginRight: 14 },
  cover: { width: "100%", height: 150, borderRadius: 10, marginBottom: 6 },
  title: { fontSize: 12, fontFamily: "PoppinsMedium" },
  author: { fontSize: 10, fontFamily: "PoppinsRegular", color: "#777" },
});

export default BukuCard;