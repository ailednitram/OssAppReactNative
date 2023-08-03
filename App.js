import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Nav from "./views/navigation";
import Next from "./views/nextView";
import Historia from "./views/historiaView";
import Integrantes from "./views/integrantesView";
import Produccion from "./views/produccionView";
import Videos from "./views/videosView";
import Musica from "./views/musicaView";
import Contacto from "./views/contactoView";
import Social from "./views/socialView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Nav} />
      <Stack.Screen name="Next" component={Next} />
      <Stack.Screen name="Historia" component={Historia} />
      <Stack.Screen name="Integrantes" component={Integrantes} />
      <Stack.Screen name="Produccion" component={Produccion} />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgb(130,40,82)", "rgb(82,37,96)"]}
        style={styles.logoContainer}
      >
        <Image
          style={styles.logo}
          source={require("./assets/logossblanco.png")}
        />
        <Text style={styles.title}>Orquesta Sinfónica de Salta</Text>
      </LinearGradient>
      <View style={styles.photosContainer}>
        <ScrollView horizontal pagingEnabled={true}>
          <Image
            style={styles.scrollImage}
            source={require("./assets/01scrollImage.jpg")}
          />
          <Image
            style={styles.scrollImage}
            source={require("./assets/02scrollImage.jpeg")}
          />
          <Image
            style={styles.scrollImage}
            source={require("./assets/hidalgo.png")}
          />
          <Image
            style={styles.scrollImage}
            source={require("./assets/03scrollImage.jpeg")}
          />
          <Image
            style={styles.scrollImage}
            source={require("./assets/04scrollImage.jpeg")}
          />
          <Image
            style={styles.scrollImage}
            source={require("./assets/05scrollImage.jpeg")}
          />
        </ScrollView>
      </View>
      <HomeStackScreen />
    </View>
  );
}

function Mas(navigation) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgb(130,40,82)", "rgb(82,37,96)"]}
        style={{ justifyContent: "center", width: " 100%", height: "100%" }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("Social")}
        >
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "Videos") {
              iconName = "ios-videocam";
            } else if (route.name === "Musica") {
              iconName = "ios-play";
            } else if (route.name === "Contacto") {
              iconName = "ios-mail";
            } else if (route.name === "Mas") {
              iconName = "ios-ellipsis-horizontal";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Musica" component={Musica} />
        <Tab.Screen name="Contacto" component={Contacto} />
        <Tab.Screen name="Mas" component={Mas} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
//***** STYLES *******

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    marginBottom: 15,
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "white",
  },
  photosContainer: {
    flex: 1,
  },
  scrollImage: {
    width: 412,
    height: "100%",
    resizeMode: "cover",
  },

  mainMenuContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  masItems: {
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "white",
    marginVertical: 15,
    alignSelf: "center",
  },
});
