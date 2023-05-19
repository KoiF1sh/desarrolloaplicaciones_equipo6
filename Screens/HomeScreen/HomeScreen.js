import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ActivityIndicator, Button } from 'react-native';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Banner from './Banner';

const HomeScreen = (props,{ navigation }) => {
  return (
    <View>
      <Header />
      <Banner />
      <Body
          navigation={props.navigation}
      />
      <Footer />
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen