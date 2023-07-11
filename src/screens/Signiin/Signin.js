import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import logo from '../../../assets/logo.png';
import Custominput from '../../components/CustomInput/Custominput';
const Signin = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    return(
        <View style={styles.root}>
          <Text style={styles.text}>Login</Text>
          <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
          
          <Custominput placeholder={"Username"} value={username} setValue={setUsername} />
          <Custominput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
        </View>
    );
    
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        
    },
    logo: {
        width: 90,
        height: 90,
        
    },
    text: {
        color: '#4180C8',
    }

});

export default Signin;