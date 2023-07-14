import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import {
  CheckBox,
  View,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet, TouchableOpacity
} from "react-native";
const  HomeInfos = () => {
    const [Superficie, setSuperficie] = useState("");
    const [NbreChambre, setNbreChambre] = useState("");
    const [NbreOccup, setNbreOccup] = useState("");
    const [Equipement, setEquipement] = useState("");
    const [AppareilsMenagers, setAppareilMenagers] = useState("");
    const [Comportementconsomm, setComportementconsom] = useState("");
    const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();
  

    const handleEnreg = () => {
        if (Superficie === "") {
          alert("Veuillez entrer la superficie de ta maison");
          return;
        }
        if (NbreChambre === "") {
          alert("Veuillez entrer le nombre de chambres");
          return;
        }
        if (NbreOccup === "") {
          alert("Veuillez entrer le nombre d’occupants");
          return;
        }
        if (Equipement === "") {
          alert("Veuillez entrer l'equipements de la maison");
          return;
        }
        if (AppareilsMenagers === "") {
          alert("Veuillez entrer au moin un appareil ménager");
          return;
        }
        if (Comportementconsomm === "") {
            alert("Veuillez entrer vos comportements de consommation d'eau");
            return;
      }else{navigation.navigate("Signin")}
    }
      
  return (
    <View style={{flex:1}}>
        <Header />
        <View style={styles.container}>
      
      <Text style={styles.title}>Compléter les informations </Text>
      <Text style={styles.title}>relatives à votre maison </Text>
      <View style={styles.card}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Superficie de la maison</Text>
          <TextInput
            style={styles.input}
            placeholder="Exemple : 150"
            onChangeText={(text) => setSuperficie(text)}
            value={Superficie}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nombre de chambres</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de chambres"
            onChangeText={(text) => setNbreChambre(text)}
            value={NbreChambre}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nombre d’occupants</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre d’occupants"
            onChangeText={(text) => setNbreOccup(text)}
            value={NbreOccup}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Equipements de la maison</Text>
          <TextInput
            style={styles.input}
            placeholder="Exemple : Jardin avec un systéme d'irrigation automatique, piscine"
            onChangeText={(text) => setEquipement(text)}
            value={Equipement}
            
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Appareils ménagers</Text>
          <TextInput
            style={styles.input}
            placeholder="Exemple : lave-linge, lave-vaisselle"
            onChangeText={(text) => setAppareilMenagers(text)}
            value={AppareilsMenagers}
            
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Comportements de consommation d'eau</Text>
          <TextInput
            style={styles.input}
            placeholder="Veuillez écrire une description qui montre les habitudes de consommation d’eau"
            onChangeText={(text) => setComportementconsom(text)}
            value={Comportementconsomm}
          />
        </View>
        
        <View style={styles.screenContainer}>
          <Button title={"Enregistrer"} onPress={handleEnreg} />{" "}
        </View>
      </View>
    </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3C6FBC",
  },
  fieldContainer: {
    marginBottom: 0,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#D2E4FF",
    backgroundColor: "#D2E4FF",
    placeholderTextColor: "#868889",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
  screenContainer: {
    backgroundColor: "#3B6EBC",
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeInfos;