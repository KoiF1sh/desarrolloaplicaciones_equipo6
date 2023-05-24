import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { MembersContext } from '../../Context/MembersContext';
import { firebase } from '../../Settings/ConfigFirebase';
import { ref, update } from 'firebase/database';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';
import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validations = Yup.object().shape({
    matricula: Yup.string().required('*'),
    nombre: Yup.string().required('*'),
    habitat: Yup.string().required('*'),
})

const Body = ({navigation }) => { 
    const { recinto, listaRecinto, setRecinto, setListaRecinto } = useContext(MembersContext);
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 10 }}>
                <Formik
                    initialValues={recinto}
                    onSubmit={(values, { resetForm }) => {
                        update(ref(firebase, 'Recintos/' + recinto.matricula), recinto)
                        .then(() => {
                            alert("Enviado")
                        })
                        const temporal = listaRecinto.filter(al=>al.matricula!=recinto.matricula);
                        setListaRecinto([...temporal, recinto]);
                        resetForm({
                            matricula: "",
                            nombre: "",
                            habitat: "",
                        })
                        navigation.navigate('Listado Recinto')
                    }}
                    validationSchema={validations}
                    validate={(values) => {
                        setRecinto(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (
                        <View>
                            <Text>Nota: Todos los campos son obligatorios </Text>
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Matricula       </Text>
                                <TextInput
                                    style={styles.textinput}
                                    onChangeText={handleChange('matricula')}
                                    onBlur={handleBlur('matricula')}
                                    placeholder="Ejm. A130, A3312, B111 ..."
                                    value={values.matricula}
                                />
                                {errors.matricula && <Text style={styles.texterror}>{errors.matricula}</Text>}
                            </View>
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Nombre         </Text>
                                <TextInput
                                    style={styles.textinput}
                                    onChangeText={handleChange('nombre')}
                                    onBlur={handleBlur('nombre')}
                                    placeholder="Ejm. Recinto Este 1, Recinto Sur 2 ..."
                                    value={values.nombre}
                                />
                                {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                            </View>                          
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Habitat          </Text>
                                <View style={styles.picker}>
                                    <Picker
                                        mode="dialog"
                                        style={{ height: 40, backgroundColor: 'white' }}
                                        selectedValue={values.habitat}
                                        onValueChange={(v) =>
                                            setFieldValue('habitat', v)
                                        }
                                    >
                                        <Picker.Item color="grey" label="Selecciona" value="" />
                                        <Picker.Item color="black" label="Desierto" value="Desierto" />
                                        <Picker.Item color="black" label="Sabana" value="Sabana" />
                                        <Picker.Item color="black" label="Bosque" value="Bosque" />
                                        <Picker.Item color="black" label="Oceano" value="Oceano" />
                                        <Picker.Item color="black" label="Selva" value="Selva" />
                                        <Picker.Item color="black" label="Polar" value="Polar" />
                                        <Picker.Item color="black" label="Domestico" value="Domestico" />
                                    </Picker>
                                </View>
                                {errors.habitat && <Text style={styles.texterror}>{errors.habitat}</Text>}
                            </View>

                            <View style={styles.contenedor1}>
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleSubmit}
                                    title="Enviar"
                                />
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleReset}
                                    title="Limpiar"
                                />
                            </View>
                        </View>
                    )

                    }
                </Formik>
            </View>
        </View>
    )
}
export default Body

const styles = StyleSheet.create({
    container: {
        height: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contenedor1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingTop: 10,
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
        backgroundColor: 'black',
        color: 'black',
        marginTop: 10,
        borderRadius: 10
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