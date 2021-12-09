import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import reactDom from "react-dom";

export default function Section3() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", padding: 15, marginTop: 20 }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>9.5</Text>
        </View>

        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "red" }}>Excellent</Text>
          <Text>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}
