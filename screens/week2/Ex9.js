import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Ex9() {
  const navigation = useNavigation();
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      {/* //กบ */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ backgroundColor: "#50E3C2", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#50E3C2", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#50E3C2", width: 100, height: 100 }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ backgroundColor: "#4A90E2", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#4A90E2", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#4A90E2", width: 100, height: 100 }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ backgroundColor: "#9013FE", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#9013FE", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "#9013FE", width: 100, height: 100 }}
        ></View>
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Ex10");
        }}
      />
    </View>
  );
}
