import React, { useState} from 'react';
import { CheckBox,View, TextInput, Button, Image, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  
  const [error, setError] = useState(false);

  const [NomUtilisateur, setNomUtilisateur] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const navigation = useNavigation();
  
  const handleSignin = () => {
    // Effectuez ici votre logique d'inscription
    console.log('Email:', email);
    console.log('Password:', password);
    setAcceptedPrivacyPolicy(true);

    console.log('Privacy Policy Accepted:', acceptedPrivacyPolicy);

  };


  const handleLoginClick = () => {
    setIsLoginClicked(true);
    if (NomUtilisateur.trim() === '') {
      setError('NomUtilisateur');
    } else if (password.trim() === '') {
      setError('password');
    } else {
      navigation.navigate("Tab");
      setNomUtilisateur('');
      setPassword('');
      setError(null);
      setIsLoginClicked(false);
      // Perform login logic here
    }
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
            value={NomUtilisateur}
            required
            onChangeText={text => setNomUtilisateur(text)}
            onBlur={() => {
               if (isLoginClicked && NomUtilisateur.trim() === '') { setError('NomUtilisateur');}
            }}
        />
        {error === 'NomUtilisateur' && <Text style={{ color: 'red' }}>NomUtilisateur is required!</Text>}
        </View>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Mot de passe</Text><br />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          secureTextEntry
          required
          onChangeText={text => setPassword(text)}
          onBlur={() => {
            if (isLoginClicked && password.trim() === '') {setError('password');}
           }}
        />
        {error === 'password' && <Text style={{ color: 'red' }}>Password is required!</Text>}
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
        onPress={() => {
          handleLoginClick()
        }}/>
        </View>

        <br /><br /><br /><br />
        <View style={styles.signupContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate("SignupPage")}>
        <Text style={{ color: 'black', textDecorationLine: 'underline'}}>
        Vous n’avez pas de compte? Inscrivez-vous ...
        </Text>
       </TouchableOpacity>
       </View>
    

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
signupContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default Signin;
