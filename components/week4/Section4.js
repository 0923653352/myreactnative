import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section4() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1, marginLeft: 20 }}>
      <View>
        <Text style={{ fontSize: 20 }}>Hotel Description</Text>
      </View>
      <View>
        <Text>
          218 Austen Mountain consectetur adipiscing. sed eiusmod tempor
          incidunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
