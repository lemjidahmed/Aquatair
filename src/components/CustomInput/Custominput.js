import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const Custominput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(

        <View style={styles.container}>
          <TextInput value={value} onChangeText={setValue} placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry} />
        </View>

    );  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E4FF',
        width: '100%',
        padding:"5%",
        borderColor: '#e8e8e8',
        borderRadius: 5,
        marginVertical: 10, 
    },
    input: {
        
    },
});

export default Custominput