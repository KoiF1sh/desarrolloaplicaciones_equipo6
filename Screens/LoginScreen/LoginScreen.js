import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import Header from '../HomeScreen/Header';
import Footer from '../HomeScreen/Footer';
import Banner from './Banner';
import Body from './Body';

const LoginScreen = (props,{ navigation }) => {
  return (
    <View>
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginScreen