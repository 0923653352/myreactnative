import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section5() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View style={{ borderWidth: 0.5, marginTop: 15, margin: 10 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <View>
          <FontAwesome name="wifi" size={20} color="blue" />
          <Text>wifi</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <FontAwesome name="coffee" size={20} color="blue" />
          <Text>coffee</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <FontAwesome name="bath" size={20} color="blue" />
          <Text>bath</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <FontAwesome name="car" size={20} color="blue" />
          <Text>car</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <FontAwesome name="paw" size={20} color="blue" />
          <Text>paw</Text>
        </View>
      </View>
    </View>
  );
}
