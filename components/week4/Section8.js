import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section8() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column" }}>
          <View>
            <Text>qweqwe</Text>
          </View>
          <View>
            <Text>qweqwe</Text>
          </View>
          <View>
            <Text>qwewq</Text>
          </View>
          <View>
            <Button title="Sign UP" color="red" />
          </View>
        </View>
      </View>
    </View>
  );
}
