import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contenedor1}>
                <Image
                    style={styles.img}
                    source={require('./src/Images/Kangaroo1.png')}
                />
                <Text style={styles.titleText}>Zoologico de Ismael</Text>
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: 50,
    },
    contenedor1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        gap: 10
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
    },
    img: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }
});