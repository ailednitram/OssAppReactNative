import * as React from "react";
import MapView from "react-native-maps";

function Mapa() {
  const [origin, setOrigin] = React.useState({
    latitude: -65.40957680315852,
    longitude: -24.789018197641866,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      ></MapView>
    </View>
  );
}

function MapaScreen() {
  return (
    <Stack.Navigator style={{ flex: 1 }}>
      <Stack.Screen name="Navig" component={MapNavigation} />
      <Stack.Screen name="Mapa" component={Mapa} />
    </Stack.Navigator>
  );
}
function MapNavigation({ navigation }) {
  return (
    <View style={{ flex: 1, width: 412, justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Mapa")}>
        <Text>Ver mapa del Teatro</Text>
      </TouchableOpacity>
    </View>
  );
}
