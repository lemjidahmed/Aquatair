import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import Signin from "./src/screens/Signiin/Signin";
import SignupPage from "./src/screens/SignupScreen/SignupScreen";
import Profil from "./src/screens/Profil/Profil";
import HomeInfos from "./src/screens/HomeInfos/HomeInfos";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="HomeInfos" component={HomeInfos} />
        <Stack.Screen name="Tab" component={StackNavigator}/>
      </Stack.Group>
      
    </Stack.Navigator>
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
