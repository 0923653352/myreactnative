import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

export default function Ex2() {
  const navigation = useNavigation();
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* //กบ */}
        <View style={{ backgroundColor: "#50E3C2", width: 100 }}></View>
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Ex3");
        }}
      />
    </View>
  );
}
