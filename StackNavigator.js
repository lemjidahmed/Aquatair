import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home/Home";
import Profil from "./src/screens/Profil/Profil";


const Tab = createMaterialBottomTabNavigator();
const StackNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#3B6EBC"
    inactiveColor="#3e2465"
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profil" component={Profil} />
    
  </Tab.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});