import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Menu() {
  return (
    //บ่อน้ำ
    <View
      style={{
        flex: 1,
        margin: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
      }}
    >
      {/* View ก้อนที่ 1  */}
      {/* margin , padding , borderRadius , borderWidth , borderColor */}
      <View>
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="What're you looking for?"
        />
      </View>
      {/* View ก้อนที่ 2  */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="Hotel" name="building" size={30} color="red" />
        <MyIcon title="Tour" name="map-marker" size={30} color="red" />
        <MyIcon title="Car" name="car" size={30} color="red" />
        <MyIcon title="Fiight" name="plane" size={30} color="red" />
      </View>
      {/* View ก้อนที่ 3  */}
      <View style={{ flexDirection: "row" }}>
        <MyIcon title="Cruise" name="ship" size={30} color="red" />
        <MyIcon title="Bus" name="bus" size={30} color="red" />
        <MyIcon title="Event" name="star" size={30} color="red" />
        <MyIcon title="More" name="ellipsis-h" size={30} color="red" />
      </View>
    </View>
  );
}
