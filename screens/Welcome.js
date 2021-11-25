import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  //เปลี่ยนชื่อappเป็นwelcome
  return (
    <View style={styles.container}>
      {/* //style={{ fontSize: 20 }} เพิ่มขนาดตัวอักษร */}
      <Text style={{ fontSize: 20 }}>Welcome Nawathpol</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
