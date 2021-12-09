import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 10,
        padding: 20,
        marginTop: -30,
        borderWidth: 0.5,
        backgroundColor: "floralwhite",
        borderColor: "gray",
        borderRadius: 40,
      }}
    >
      <Text style={{ fontSize: 20 }}>Hilton San Franciso</Text>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          style={{ flexDirection: "row" }}
          name="star"
          size={32}
          color="orange"
        />
        <FontAwesome
          style={{ flexDirection: "row" }}
          name="star"
          size={32}
          color="orange"
        />
        <FontAwesome
          style={{ flexDirection: "row" }}
          name="star"
          size={32}
          color="orange"
        />
        <FontAwesome
          style={{ flexDirection: "row" }}
          name="star"
          size={32}
          color="orange"
        />
        <FontAwesome
          style={{ flexDirection: "row" }}
          name="star-half"
          size={32}
          color="orange"
        />
      </View>
      <Text>
        Facillites provided may range from a modest quality mattress in a small
        room to large suites
      </Text>
    </View>
  );
}
