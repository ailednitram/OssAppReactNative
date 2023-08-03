import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "expo-linear-gradient";

function Mas() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgb(130,40,82)", "rgb(82,37,96)"]}
        style={{ justifyContent: "center", width: " 100%", height: "100%" }}
      >
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <Text style={styles.masItems}>Trivia Musical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <Text style={styles.masItems}>Metrónomo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <Text style={styles.masItems}>Afinador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}>
          <Text style={styles.masItems}>Social</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
export default Mas;

const styles = StyleSheet.create({
  masItems: {
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "white",
    marginVertical: 15,
    alignSelf: "center",
  },
});
