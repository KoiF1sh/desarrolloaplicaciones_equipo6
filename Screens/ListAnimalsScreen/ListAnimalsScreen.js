import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import Header from '../HomeScreen/Header';
import Body from './Body';

const ListAnimalsScreen = (props,{ navigation }) => {
  return (
    <View>
      <Header/>
      <Body navigation={props.navigation}  />
      <StatusBar style="auto" />
    </View>
  );
}

export default ListAnimalsScreen