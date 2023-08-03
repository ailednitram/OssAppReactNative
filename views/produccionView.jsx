import React from "react";
import { View, Text } from "react-native";
import BackButton from "../components/backButton";

function Produccion({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 20 }}>Producción</Text>
    </View>
  );
}

export default Produccion;
