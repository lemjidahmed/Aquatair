import React, { useState } from "react";
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
const SignupPage = () => {
  const [NomUtilisateur, setNomUtilisateur] = useState("");
  const [NumCompteur, setNumCompteur] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NumTel, setNumTel] = useState("");
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const handleSignup = () => {
    if (NomUtilisateur === "") {
      alert("Veuillez entrer un nom d'utilisateur");
      return;
    }
    else if (NumCompteur === "") {
      alert("Veuillez entrer un numéro de compteur");
      return;
    }
    else if (Email === "") {
      alert("Veuillez entrer une adresse e-mail");
      return;
    }
    else if (password === "") {
      alert("Veuillez entrer un mot de passe");
      return;
    }
    // if (password !== confirmPassword) {
    //alert("Les mots de passe ne correspondent pas");
    //return;
    //}
    else if (NumTel === "") {
      alert("Veuillez entrer un numéro de téléphone");
      return;
    }
    else {
      navigation.navigate("HomeInfos");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <View style={styles.card}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nom d'utilisateur</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            onChangeText={(text) => setNomUtilisateur(text)}
            value={NomUtilisateur}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Numéro du compteur</Text>
          <TextInput
            style={styles.input}
            placeholder="Numéro du compteur"
            onChangeText={(text) => setNumCompteur(text)}
            value={NumCompteur}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
            value={Email}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Confirmer mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmer mot de passe"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Numéro de téléphone</Text>
          <TextInput
            style={styles.input}
            placeholder="Numéro de téléphone"
            onChangeText={(text) => setNumTel(text)}
            value={NumTel}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label1}>
              J'accepte les termes de confidentialité
            </Text>
          </View>
        </View>
        <View style={styles.screenContainer}>
          <Button title={"Sign Up"} onPress={handleSignup} />{" "}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>J’ai déja un compte .</Text>
          <View style={styles.signupContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Signin")}>
        <Text style={{ color: 'black', textDecorationLine: 'underline'}}>
       Sign in
        </Text>
       </TouchableOpacity>
       </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3C6FBC",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
export default SignupPage;