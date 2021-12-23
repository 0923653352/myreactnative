import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
  return (
    <View style={props.style}>
      <Text>Tour</Text>
      <Text style={{ color: "gray" }}>Let find out what most interest</Text>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row" }}>
          {/* <TourItem />
          <TourItem />
          <TourItem /> */}
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
              <Text style={{ fontSize: 20, color: "white" }}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
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
              <Text style={{ fontSize: 20, color: "white" }}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
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
              <Text style={{ fontSize: 20, color: "white" }}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
