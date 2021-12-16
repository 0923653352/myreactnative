import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
  // ""ข้อความ
  const [lol, setlol] = useState(0);
  const onPressButton = () => {
    let a = lol + 1;
    setlol(a);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "rows",
          padding: 20,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={onPressButton}>
          <FontAwesome name="heart" size={36} color="red" />
          <Text style={{ fontSize: 30 }}>{lol}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
