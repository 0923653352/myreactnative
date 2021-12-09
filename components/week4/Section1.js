import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section1() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 50,

            flex: 1,
            resizeMode: "cover",
            aspectRatio: 3 / 2,
          }}
          source={require("../../assets/room-6.jpg")}
        />
      </View>
    </View>
  );
}
