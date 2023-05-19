import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

const Body = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto0}>¿Quienes somos?
            </Text>
            <Text style={styles.texto1}>Somos una organización internacional de conservación sin fines de lucro. Integramos la salud y el cuidado de la vida silvestre, la ciencia
                y la educación para desarrollar soluciones de conservación sostenibles. La conservación está en el corazón de todo lo que hacemos. Y comienza
                con esa conexión que hacemos con las personas y la vida silvestre todos los días. Porque cuando la vida silvestre prospera, toda la vida prospera.
            </Text>
            <View style={styles.contenedor1}>
                <Button
                    title="Conocer mas >"
                    color={'#000'}
                    onPress={() => navigation.navigate('LearnScreen')}
                />
                <Button
                    title='Ir al sitio >'
                    color={'#000'}
                    onPress={() => navigation.navigate('LoginScreen')}
                />
            </View>
            {/* Proximamente
                <Text style={styles.texto0}>Conviértete en un aliado
                <View style={styles.contenedor1}>
                <Button
                    title='Registrarse >'
                    color={'#000'}
                />
                <Button
                    title='Iniciar Sesion >'
                    color={'#000'}
                />
                </View>
             */
            }

            <Image
                style={styles.img}
                source={require('./src/Images/Wolf0.gif')}
            />
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
        height: '83%',
    },
    contenedor1: {
        flexDirection: 'row',
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