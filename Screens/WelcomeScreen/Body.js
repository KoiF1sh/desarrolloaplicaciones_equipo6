import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

const Body = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('./src/Images/Animals0.jpg')}
            />
            <Text style={styles.texto1}>Saludos socio, le agradecemos su instancia. Como 
            parte de nuestra familia, ¡estamos ansiosos por comenzar este nuevo 
            viaje con usted.
            </Text>
            <Text style={styles.texto1}> Opciones.</Text>
            <View style={styles.contenedor1}>
                <Button
                    title="Ir a la seccion de animales >"
                    color={'#000'}
                    onPress={() => navigation.navigate('AddAnimalsScreen')}
                />
                <Button
                    title='Ir a la seccion de recintos  >'
                    color={'#000'}
                    onPress={() => navigation.navigate('AddEnclosureScreen')}
                />
            </View>
        </View>
    )
}
export default Body

const styles = StyleSheet.create({
    container: {
        color: '#fff',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '85%',
    },
    contenedor1: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
        gap: 10
    },
    texto0: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
    },
    texto1: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    boton1: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: 16,
    },
    img: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
    },
});