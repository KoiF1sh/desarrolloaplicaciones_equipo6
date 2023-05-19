import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Acerca de nosotros</Text>
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
      minHeight: 50,
    },

    text1: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
  });