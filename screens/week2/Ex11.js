import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Ex11() {
  const navigation = useNavigation();
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,

        flexWrap: "wrap",
      }}
    >
      {/* //กบ */}
      <View
        style={{ backgroundColor: "#4A90E2", width: 500, height: 350 }}
      ></View>
      <View style={{ backgroundColor: "#50E3C2", width: 500, height: 315 }}>
        {" "}
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate("Ex12");
          }}
        />
      </View>
    </View>
  );
}
