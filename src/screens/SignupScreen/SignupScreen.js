import React, { useState } from "react";
import {
  CheckBox,
  View,
  TextInput,
  Button,
  Image,
  Text,
  StyleSheet,
} from "react-native";

const SignupPage = () => {
  const [NomUtilisateur, setNomUtilisateur] = useState("");
  const [NumCompteur, setNumCompteur] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NumTel, setNumTel] = useState("");
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const handleSignup = () => {
    // Effectuer une validation des données d'inscription
    if (NomUtilisateur === "" || password === "") {
      Alert.alert("Veuillez remplir tous les champs");
      return;
    }

    // Effectuer l'enregistrement de l'utilisateur avec les données fournies
    // Remplacez cette logique par votre propre logique d'inscription

    // Réinitialiser les champs du formulaire
    setNomUtilisateur("");
    setPassword("");

    Alert.alert("Inscription réussie !");
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
            secureTextEntry
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
          <Button title={"Sign Up"} onPress={() => {}} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>J’ai déja un compte .</Text>
          <Text style={{ color: "blue" }} onPress={() => Linking.openURL("")}>
            Sign in
          </Text>
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
    backgroundColor: "#ffffff",
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
});

export default SignupPage;
