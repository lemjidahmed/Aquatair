import React, { useState } from 'react';
import { CheckBox,View, TextInput, Button, Image, Text, StyleSheet, Linking } from 'react-native';


const Signin = () => {
  const [NomUtilisateur, setNomUtilisateur] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const handleSignup = () => {
    // Effectuez ici votre logique d'inscription
    console.log('Email:', email);
    console.log('Password:', password);
    setAcceptedPrivacyPolicy(true);

    console.log('Privacy Policy Accepted:', acceptedPrivacyPolicy);

  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>

      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <View style={styles.card}>
      <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nom d'utilisateur</Text><br />
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            onChangeText={(text) => setNomUtilisateur(text)}
            value={NomUtilisateur}
        />
        </View>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mot de passe</Text><br />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        </View>


        <br />
    <View style={styles.div}>
        <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label1}>Se souvenir de moi</Text>
      </View>
    </View>
        
       <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('')}>
      Mot de passe oublié?
       </Text>
    </View>

       <br /><br />
        <View style={styles.screenContainer}>
        <Button  
       
        title={"Login"} 
        onPress={() => {}} />
        </View>

        <br /><br /><br /><br />
        <Text style={{color: 'black'}}
      onPress={() => Linking.openURL('')}>
      Vous n’avez pas de compte? Inscrivez-vous ...
       </Text>
    

      </View>

      
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color :'#3C6FBC',
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
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#D2E4FF',
    backgroundColor: "#D2E4FF",
    placeholderTextColor : "#868889",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:40,
  },
  
  screenContainer:{
    backgroundColor: '#3B6EBC',
    marginTop: 10,
    },

checkboxContainer: {
  flexDirection: 'row',
  marginBottom: 20,
},
checkbox: {
  alignSelf: 'center',
},
div: {
    flex:1,
    flexDirection: "row", 
    alignContent: "space-between",
},
});

export default Signin;
