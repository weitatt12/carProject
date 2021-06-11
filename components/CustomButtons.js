import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const CustomButtons = (props) => {
    const { type, onPress } = props;

    const backgroundColor = type == "primary" ? "#171A20CC" : "#FFFFFF";
    const textColor = type == "primary" ? "#FFFFFF" : "#171A20";
    

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor:backgroundColor}]} onPress={() => onPress() }>
                <Text style={[styles.text, {color:textColor}]}>{props.body}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding:10,
    },
    button: {
        backgroundColor:'lightgrey',
        color:'#fff',
        borderRadius:20,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 12,
        fontWeight:'500',
        textTransform:'uppercase',
        
    }
})

export default CustomButtons;