import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

function Videos() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          //backgroundColor: "tan",
        }}
      >
        <Image
          style={styles.videosImage}
          source={require("../assets/00Afiche.jpeg")}
        />
        <Image
          style={styles.videosImage}
          source={require("../assets/01Afiche.jpeg")}
        />
        <Image
          style={styles.videosImage}
          source={require("../assets/02Afiche.jpeg")}
        />
        <Image
          style={styles.videosImage}
          source={require("../assets/03Afiche.jpeg")}
        />
      </View>
    </ScrollView>
  );
}

export default Videos;
const styles = StyleSheet.create({
  videosImage: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
