import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";

export default function TourItem(props) {
  return (
    <View style={{ marginRight: 10 }}>
      <Image
        style={{ width: 250, height: 150, borderRadius: 10 }}
        source={{ uri: "https://reactjs.org/logo-og.png" }}
      />
      {/* marginTop, height, paddingHorizontal, backgroundColor,  
      opacity, borderBottomLeftRadius, borderBottomRightRadius */}
      <View
        style={{
          width: 250,
          marginTop: -30,
          height: 30,
          paddingHorizontal: 10,
          backgroundColor: "black",
          opacity: 0.5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Tour in Somewhere</Text>
      </View>
    </View>
  );
}
