import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section6() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: "column" }}>
        <Text>Location</Text>
        <Text>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
          incididunt ut labore et…
        </Text>
        <Image
          style={{
            flex: 1,
            resizeMode: "cover",
            aspectRatio: 4 / 2,
            marginTop: 10,
          }}
          source={require("../../assets/map.jpg")}
        />
      </View>
    </View>
  );
}
