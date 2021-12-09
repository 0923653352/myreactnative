import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Review() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      {/* //กบ */}
      {/* view ที่ 1 */}
      <View style={{ flexDirection: "row", padding: 15 }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 50 / 2 }}
          source={require("../../assets/profile-2.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Steve Garrett</Text>
          <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
        </View>
      </View>
      {/* view ที่ 2 */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 3 / 2 }}
          source={require("../../assets/trip-2.jpg")}
        />
      </View>
      {/* view ที่ 3 */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, paddingLeft: 10 }}>
          Overseas Adventure Travel In Nepal
        </Text>
        <Text style={{ color: "#444444" }}>
          Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in
          Tokyo. Located in one of the uprising areas of Tokyo
        </Text>
      </View>
    </View>
  );
}
