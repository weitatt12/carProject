import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

import CustomButtons from './CustomButtons';

const CarItems = (props) => {
    return(
        <View style={styles.carContainer}>

            <ImageBackground source={props.car.img} style={styles.imgBackground} />

            <View style={styles.carTitles}>
                <Text style={styles.carTitle}>{props.car.name}</Text>
                <Text style={styles.carSubtitle}>
                    {props.car.desc} {" "}
                    <Text style={styles.speDesc}>{props.car.speDesc}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <CustomButtons type="primary" body={"Custom Order"} onPress={() => {console.warn("custom order pressed")}} />
                <CustomButtons type="secondary" body={"existing inventory"} onPress={() => {console.warn("Existing Inventory pressed")}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carContainer: {
        width:'100%',
        height:Dimensions.get("window").height,
    },
    carTitles:{
        marginTop:'30%',
        alignItems:'center',
    },
    carTitle: {
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center'
    },
    carSubtitle: {
        fontSize:15,
        color:'#5c5e62',

    },
    imgBackground: {
        width:'100%',
        height: '100%',
        resizeMode:'cover',
        position:'absolute'
    },
    buttonsContainer: {
        position:"absolute",
        bottom:50,
        width:"100%",
    },
    speDesc: {
        textDecorationLine:"underline",
    },
})

export default CarItems