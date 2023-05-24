import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import Header from '../HomeScreen/Header';
import Banner from '../HomeScreen/Banner';
import Footer from '../HomeScreen/Footer';
import Body from './Body'

const WelcomeScreen = (props,{ navigation }) => {
  return (
    <View>
      <Header/>
      <Banner/>
      <Body navigation={props.navigation}/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

export default WelcomeScreen