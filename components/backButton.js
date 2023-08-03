//No funciona al importarlo en otra view
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function BackButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.botonVolver} onPress={onPress}>
      <Text style={{ color: "white" }}>Volver</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  botonVolver: {
    alignSelf: "flex-end",
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "mediumpurple",
    borderRadius: 10,
  },
});
export default BackButton;
