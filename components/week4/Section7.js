import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section7() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1, padding: 15 }}>
      <View>
        <Text style={{ fontSize: 20 }}>Room Type</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{
              flex: 1,
              resizeMode: "cover",
              width: 90,
              height: 140,
              marginTop: 10,
            }}
            source={require("../../assets/room-8.jpg")}
          />
        </View>
        <View>
          <Text style={{ paddingLeft: 10, marginTop: 10, fontSize: 15 }}>
            Standard Twin Room
          </Text>
        </View>
      </View>
      <View style={{ paddingLeft: 100, marginTop: -40, fontSize: 20 }}>
        <Text style={{ color: "red" }}>$399.99</Text>
      </View>
      <View style={{ paddingLeft: 100, marginTop: -1, fontSize: 20 }}>
        <Text style={{ color: "blue" }}>Hurry Up! This is your last room!</Text>
      </View>
    </View>
  );
}
