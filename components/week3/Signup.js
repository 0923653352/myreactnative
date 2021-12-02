import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Signup() {
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: 10,
      }}
    >
      {/* //กบ */}
      <TextInput placeholder="Input ID" />
      <TextInput placeholder="Input Email" />
      <TextInput placeholder="Input Address" />
      <Button title="Sign UP" color="red" />
    </View>
  );
}
