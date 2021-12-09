import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Hotel() {
  return (
    //บ่อน้ำ
    <View style={{ flex: 1 }}>
      {/* //กบ */}
      {/* view ก้อนที่ 1 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Image
          style={{
            flex: 1,
            resizeMode: "cover",
            aspectRatio: 5 / 2,
            borderRadius: 20,
          }}
          source={require("../../assets/room-1.jpg")}
        />
      </View>
      {/* view ก้อนที่ 2 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <FontAwesome name="map-marker" size={32} color="red" />
        <Text style={{ fontSize: 20 }}>553 Cislason Radial</Text>
      </View>
      {/* view ก้อนที่ 3 */}
      <View>
        <Text style={{ fontSize: 30, marginTop: 10 }}>Boston Hotel</Text>
      </View>
      {/* view ก้อนที่ 4 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={32} color="orange" />
          <FontAwesome name="star" size={32} color="orange" />
          <FontAwesome name="star" size={32} color="orange" />
          <FontAwesome name="star" size={32} color="orange" />
          <FontAwesome name="star-half" size={32} color="orange" />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "gray" }}>100 Reviews</Text>
        </View>
      </View>
      {/* view ก้อนที่ 5 */}
      <View>
        <Text style={{ fontSize: 30, color: "red" }}>$125</Text>
      </View>
    </View>
  );
}
