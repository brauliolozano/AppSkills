import React from "react";
import {
    TouchableOpacity, 
    TouchableOpactyProps,
    Text, 
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpactyProps{
    title: string
}

export function Button({ title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        {...rest} 
        >
            <Text style={styles.buttonText}>
                {title}</Text>    
        </TouchableOpacity> 
        )  
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});