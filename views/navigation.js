import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Divider from "../divider";
function Nav({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Next")}>
        <Text style={styles.touchableTitle}>Próximos conciertos</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate("Historia")}>
        <Text style={styles.touchableTitle}>Historia</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate("Integrantes")}>
        <Text style={styles.touchableTitle}>Integrantes</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate("Produccion")}>
        <Text style={styles.touchableTitle}>Producción</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  touchableTitle: {
    fontSize: 18,
    color: "#000",
    padding: 8,
    marginLeft: 20,
  },
});
export default Nav;
