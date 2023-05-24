import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

const Body = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto0}>Nuestra misión
            </Text>
            <Text style={styles.texto1}>Nos comprometemos a salvar especies en todo el mundo al unir nuestra experiencia en el cuidado de los animales y la ciencia de la
                conservación con nuestra dedicación para inspirar pasión por la naturaleza.
            </Text>
            <Text style={styles.texto0}>Nuestra visión
            </Text>
            <Text style={styles.texto1}>Un mundo donde toda vida prospera
            </Text>
            <Text style={styles.texto0}>Nuestros valores
            </Text>
            <View style={styles.contenedor1}>
                <Text style={styles.texto2}>Colaborar
                </Text>
                <Text style={styles.texto2}>Innovar
                </Text>
                <Text style={styles.texto2}>Inspirar
                </Text>
                <Text style={styles.texto2}>Preservar
                </Text>
            </View>
            <Text style={styles.texto1}>¿Quieres conocer de cerca a tu vida silvestre favorita, sentarte y relajarte o emprender una aventura desafiante? Entonces explora nuestra plataforma.
            </Text>
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
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
});