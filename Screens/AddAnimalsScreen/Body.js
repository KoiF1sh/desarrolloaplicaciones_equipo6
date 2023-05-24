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
    especie: Yup.string().required('*'),
    clase: Yup.string().required('*'),
    sexo: Yup.string().required('*'),
    habitat: Yup.string().required('*'),
    alimentacion: Yup.string().required('*'),
})

export default function Body ({status,navigation}) {
    const { animal, listaAnimal, setAnimal, setListaAnimal } = useContext(MembersContext);
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 10 }}>
                <Formik
                    initialValues={animal}
                    onSubmit={(values, { resetForm }) => {
                        update(ref(firebase, 'Animales/' + animal.matricula), animal)
                        .then(() => {
                            alert("Enviado")
                        })
                        const temporal = listaAnimal.filter(al=>al.matricula!=animal.matricula);
                        setListaAnimal([...temporal, animal]);
                        resetForm({
                            matricula: "",
                            nombre: "",
                            especie: "",
                            clase: "",
                            sexo: "",
                            habitat: "",
                            alimentacion: "",
                        })
                        navigation.navigate('Listado Animal')
                    }}
                    validationSchema={validations}
                    validate={(values) => {
                        setAnimal(values)
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
                                    placeholder="Ejm. Jose ..."
                                    value={values.nombre}
                                />
                                {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                            </View>
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Especie         </Text>
                                <TextInput
                                    style={styles.textinput}
                                    onChangeText={handleChange('especie')}
                                    onBlur={handleBlur('especie')}
                                    placeholder="Ejm. Tigre, Leon, Zebra ..."
                                    value={values.especie}
                                />
                                {errors.especie && <Text style={styles.texterror}>{errors.especie}</Text>}
                            </View>
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Clase             </Text>
                                <View style={styles.picker}>
                                    <Picker
                                        mode="dialog"
                                        style={{ height: 40, backgroundColor: 'white' }}
                                        selectedValue={values.clase}
                                        onValueChange={(v) =>
                                            setFieldValue('clase', v)
                                        }
                                    >
                                        <Picker.Item color="grey" label="Selecciona" value="" />
                                        <Picker.Item color="black" label="Mamiferos" value="Mamiferos" />
                                        <Picker.Item color="black" label="Reptiles" value="Reptiles" />
                                        <Picker.Item color="black" label="Anfibios" value="Anfibios" />
                                        <Picker.Item color="black" label="Peces" value="Peces" />
                                        <Picker.Item color="black" label="Aves" value="Aves" />
                                    </Picker>
                                </View>
                                {errors.clase && <Text style={styles.texterror}>{errors.clase}</Text>}
                            </View>
                            <View style={styles.contenedor1}>
                                <Text style={styles.texto3}> Sexo              </Text>
                                <View style={styles.picker}>
                                    <Picker
                                        mode="dialog"
                                        style={{ height: 40, backgroundColor: 'white' }}
                                        selectedValue={values.sexo}
                                        onValueChange={(v) =>
                                            setFieldValue('sexo', v)
                                        }
                                    >
                                        <Picker.Item color="grey" label="Selecciona" value="" />
                                        <Picker.Item color="black" label="Masculino" value="Masculino" />
                                        <Picker.Item color="black" label="Femenino" value="Femenino" />
                                    </Picker>
                                </View>
                                {errors.sexo && <Text style={styles.texterror}>{errors.sexo}</Text>}
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
                                <Text style={styles.texto3}>Alimentacion</Text>
                                <View style={styles.picker}>
                                    <Picker
                                        mode="dialog"
                                        style={{ height: 40, backgroundColor: 'white' }}
                                        selectedValue={values.alimentacion}
                                        onValueChange={(v) =>
                                            setFieldValue('alimentacion', v)
                                        }
                                    >
                                        <Picker.Item color="grey" label="Selecciona" value="" />
                                        <Picker.Item color="black" label="Herbivora" value="Herbivora" />
                                        <Picker.Item color="black" label="Omnívora" value="Omnívora" />
                                        <Picker.Item color="black" label="Carnivora" value="Carnivora" />
                                    </Picker>
                                </View>
                                {errors.alimentacion && <Text style={styles.texterror}>{errors.alimentacion}</Text>}
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