import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home/Home";
import Profil from "./src/screens/profile/profil";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SignupPage from './src/screens/SignupScreen/SignupScreen';
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profil"
        activeColor="#3B6EBC"
        inactiveColor="#3e2465"
      >
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
