import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CarItems from './components/CarItems';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItems name={"Model X"} desc={"starting from $62,491"} img={require('./assets/images/ModelX.jpeg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
