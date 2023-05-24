import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform} from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react';

const Banner = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Bienvenido usuario de {Platform.OS}</Text>
        </View>
    )
}
export default Banner

const styles = StyleSheet.create({
    container: {
      color: '#fff',
      backgroundColor: '#272727',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 40,
    },

    text1: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
  });