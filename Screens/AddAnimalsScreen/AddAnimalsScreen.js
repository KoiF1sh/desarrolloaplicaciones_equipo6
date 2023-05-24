import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import Header from '../HomeScreen/Header';
import Banner from './Banner';
import Body from './Body';

const AddAnimalsScreen = (props,{navigation }) => {
  return (
    <View>
      <Header/>
      <Banner/>
      <Body navigation={props.navigation} status={props.status}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default AddAnimalsScreen