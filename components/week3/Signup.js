import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Signup() {
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        padding: 10,
      }}
    >
      {/* //กบ */}
      <TextInput
        style={{ fontSize: 20, marginTop: 10 }}
        placeholder="Input ID"
      />
      <TextInput
        style={{ fontSize: 20, marginTop: 10 }}
        placeholder="Input Email"
      />
      <TextInput
        style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}
        placeholder="Input Address"
      />
      <Button title="Sign UP" color="red" />
    </View>
  );
}
