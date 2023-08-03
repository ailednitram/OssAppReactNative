import React from "react";
import { View, Text } from "react-native";
import BackButton from "../components/backButton";

function Integrantes({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "mediumpurple" }}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 20 }}>Integrantes</Text>
    </View>
  );
}
export default Integrantes;
