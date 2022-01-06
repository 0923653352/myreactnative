import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View  ,Button} from "react-native";

export default function Ex10() {
  const navigation = useNavigation();
  return (
    //บ่อน้ำ
    <View style={styles.MainContainer}>
      {/* //กบ */}
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate("Ex11");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    justifyContent: "center",

    // Set content's horizontal alignment.
    alignItems: "center",

    // Set hex color code here.
    backgroundColor: "#4A90E2",
  },
});
