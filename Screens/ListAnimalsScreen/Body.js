import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { MembersContext } from '../../Context/MembersContext';
import { Button, Header, ListItem } from 'react-native-elements';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../Settings/ConfigFirebase';
import { onValue, ref, set } from 'firebase/database';

const Body = ({ navigation }) => {
    const { listaAnimal, setAnimal, setListaAnimal } = useContext(MembersContext);
    const eliminar = (id) => {
        set(ref(firebase, 'Animales/' + id), null)
            .then(() => {
                alert("Eliminado")
            })
            .catch((error) => {
                // The write failed...
            });
        const temporal = listaAnimal.filter((item) => {
            return item.matricula !== id;
        })
        setListaAnimal(temporal)
    }
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Listado Animal', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{
                    icon: 'add-circle', color: '#fff', onPress: () => {
                        setAnimal({
                            matricula: null,
                            nombre: "",
                            especie: "",
                            clase: "",
                            sexo: "",
                            habitat: "",
                            alimentacion: "",
                        })
                        navigation.navigate('Registro Animal', { status: "add" })
                    }
                }}
                containerStyle={{ backgroundColor: '#000' }}
            />
            <ScrollView>
                {
                    listaAnimal.length > 0
                        ?
                        listaAnimal.map((a, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Content style={styles.contenedor1}>
                                        <ListItem.Title>{a.matricula}</ListItem.Title>
                                        <ListItem.Title>{a.nombre}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Content style={styles.contenedor1}>
                                        <ListItem.Subtitle>{a.especie}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{a.clase}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{a.sexo}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{a.habitat}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{a.alimentacion}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem.Content>
                                <View style={styles.buttons}>
                                    <Ionicons name='ios-trash' size={30} color={'red'} onPress={() => eliminar(a.matricula)} />
                                    <Ionicons name='md-create' size={30} color={'#2b4c40'} onPress={() => {
                                        setAnimal({
                                            matricula: a.matricula.toString(),
                                            nombre: a.nombre,
                                            especie: a.especie,
                                            clase: a.clase,
                                            sexo: a.sexo,
                                            habitat: a.habitat,
                                            alimentacion: a.alimentacion,
                                        })
                                        navigation.navigate('WelcomeScreen')
                                    }} />

                                </View>
                            </ListItem>
                        ))
                        :
                        <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>No hay animales registrados</Text>
                }
            </ScrollView>
        </View>
    )
}
export default Body

const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 0,

    },
    contenedor1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
    texto3: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
    },
    texterror: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        verticalAlign: 'middle',
        color: 'red'
    },
    buttons: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        marginTop: 15,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textinput: {
        borderRadius: 10,
        height: 35,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 5,
    },
    picker: {
        margin: 5,
        height: 35,
        width: 250,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        overflow: 'hidden',
        elevation: 5,
        paddingBottom: 50,
    },
});