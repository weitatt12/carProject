import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';

import CarItems from './CarItems';
import Cars from './Cars';

const CarLists = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={Cars} 
                renderItem={({item}) => <CarItems car={item} /> } 
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"} 
                decelerationRate={"fast"} 
                snapToInterval={Dimensions.get("window").height} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
    }
})

export default CarLists;