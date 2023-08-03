import React from "react";
import { View, Text } from "react-native";
import BackButton from "../components/backButton";
function Historia({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "salmon" }}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 20 }}>Historia</Text>
    </View>
  );
}

export default Historia;
