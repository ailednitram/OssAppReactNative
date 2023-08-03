import React from "react";
import { View, Text } from "react-native";
import BackButton from "../components/backButton";

function Next({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style={{ fontSize: 20, marginLeft: 20 }}>
        Próximos conciertos de la OSS
      </Text>
    </View>
  );
}

export default Next;
