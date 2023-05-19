import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react';

const Footer = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Copyright © Todos los derechos reservados</Text>
        </View>
    )
}
export default Footer

const styles = StyleSheet.create({
    container: {
      color: '#fff',
      backgroundColor: '#2b4c40',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 50,
    },

    titleText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
  });