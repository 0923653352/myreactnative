import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section8() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 0.5,
          padding: 5,
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>Price</Text>
          <Text style={{ color: "red" }}>399.99</Text>
          <Text style={{ fontSize: 10 }}>Avg/Night</Text>
        </View>
        <View>
          <Button color="red" title="Book Now" />
        </View>
      </View>
    </View>
  );
}
