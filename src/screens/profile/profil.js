import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header/Header";


export default function Profil({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 36, color: "#3B6EBC" }}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="edit" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Modifier profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.TouchableOpacity}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="bell" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Notifications</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="tool" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Mes Aquatairs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.TouchableOpacity}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="help-circle" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Aide</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="flag" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Réclamation</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate("Signin")}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="log-out" size={24} color="black" />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={{ fontSize: 24 }}>Déconnexion</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  profileContainer: { flex: 3, justifyContent: "center", alignItems: "center" },
  TouchableOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  subContainer: {
    justifyContent: "space-around",
    borderRadius: "6.25%",
    backgroundColor: "lightgray",
    width: "95%",
    height: "95%",
  },
});
