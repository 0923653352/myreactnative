import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section5() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <FontAwesome title="Hotel" name="building" size={30} color="red" />
        <FontAwesome title="Tour" name="map-marker" size={30} color="red" />
        <FontAwesome title="Car" name="car" size={30} color="red" />
        <FontAwesome title="Filght" name="plane" size={30} color="red" />
      </View>
    </View>
  );
}
