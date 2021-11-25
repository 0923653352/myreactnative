import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ex12() {
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        flexDirection: "row",
      }}
    >
      {/* //กบ */}
      <View
        style={{ backgroundColor: "#50E3C2", width: 130, height: 900 }}
      ></View>
      <View
        style={{ backgroundColor: "#4A90E2", width: 130, height: 900 }}
      ></View>
      <View
        style={{ backgroundColor: "#9013FE", width: 130, height: 900 }}
      ></View>
    </View>
  );
}
