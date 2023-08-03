import React from "react";
import { View } from "react-native";

function Divider() {
  return (
    <View
      style={{
        alignItems: "flex-end",
        width: "80%",
        marginLeft: 30,
        height: 2,
        backgroundColor: "lightgray",
      }}
    ></View>
  );
}

export default Divider;
