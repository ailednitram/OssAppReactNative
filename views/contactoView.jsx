import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

function Contacto() {
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <Text style={styles.title}>Teatro Provincial Juan Carlos Saravia</Text>
      <Text style={styles.subtitle}>Zuviría 70</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL("tel:+54 387 422-4515")}
        >
          <Text style={styles.contactoLinks}>Teléfono</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.contactoLinks}>Ver mapa</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <Image
          source={require("../assets/teatro1.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/teatro3.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/teatro4.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/teatro5.jpeg")}
          style={styles.contactoScrollImage}
        />
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: 1,
          marginVertical: 30,
          backgroundColor: "lightgray",
        }}
      />

      <Text style={styles.title}>Casa de la Cultura</Text>
      <Text style={styles.subtitle}>Caseros 460</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL("tel:+54-387-4220999")}
        >
          <Text style={styles.contactoLinks}>Teléfono</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.contactoLinks}>Fax</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <Image
          source={require("../assets/cultura1.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/cultura2.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/cultura3.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/cultura4.jpeg")}
          style={styles.contactoScrollImage}
        />
        <Image
          source={require("../assets/cultura5.jpeg")}
          style={styles.contactoScrollImage}
        />
      </ScrollView>
      <View
        style={{
          justifyItems: "space-evenly",
          paddingVertical: 20,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}>
          Correos electrónicos
        </Text>
        <Text style={styles.subtitle}>Producción</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:ossalta@gmail.com")}
        >
          <Text style={styles.correosLinks}>ossalta@gmail.com</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Administración Artística</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:adar.ossalta@gmail.com")}
        >
          <Text style={styles.correosLinks}>adar.ossalta@gmail.com</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Coordinación de Prensa</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:prensa@cultura.gov.ar")}
        >
          <Text style={styles.correosLinks}>prensa@cultura.gov.ar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Contacto;

const styles = StyleSheet.create({
  contactoScrollImage: {
    width: 140,
    height: 140,
    resizeMode: "cover",
    borderRadius: 20,
    marginTop: 20,
    marginRight: 5,
  },
  contactoLinks: {
    color: "rgb(82,37,96)",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  correosLinks: {
    color: "rgb(82,37,96)",
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
    marginVertical: 5,
  },
});
