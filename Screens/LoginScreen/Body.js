import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import React from 'react';

const Body = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                    style={styles.img}
                    source={require('./src/Images/User0.png')}
            />
            <Text style={styles.texto0}>Bienvenido
            </Text>
            <Text style={styles.texto1}>Ingresa tus credenciales de socio</Text>
            <View>
                <TextInput
                    style={styles.textinput}
                    placeholder="Correo"
                />
                <TextInput
                    style={styles.textinput}
                    placeholder="Clave"
                />
            </View>
            <Text style={styles.texto0}>Aviso
            </Text>
            <Text style={styles.texto1}>Si todavia no eres socio, entonces puedes registrarte.</Text>
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
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
    },
    texto1: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    texto2: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        fontSize: 12,
        color: '#4630EB',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
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
        marginTop: 15,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    textinput:{
        borderRadius:10, 
        height: 40,
        width: 250,
        borderColor: 'gray', 
        borderWidth: 1, 
        margin:5, 
        paddingLeft:15, 
        backgroundColor:'white',
        elevation: 5,
    },
});