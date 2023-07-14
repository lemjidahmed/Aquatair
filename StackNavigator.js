import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./src/screens/Signiin/Signin";
import SignupPage from "./src/screens/SignupScreen/SignupScreen";
import Profil from "./src/screens/Profil/Profil";
import HomeInfos from "./src/screens/HomeInfos/HomeInfos";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="Profil" component={Profil} />   
        <Stack.Screen name="HomeInfos" component={HomeInfos} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});