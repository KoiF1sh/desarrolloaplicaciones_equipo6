import React, { createContext, useState, useEffect } from 'react';
export const MembersContext = createContext();
import { firebase } from '../Settings/ConfigFirebase';
import { onValue, ref, set } from 'firebase/database';

const MembersProvider = (props) => {
    const [recinto, setRecinto] = useState({
        matricula: "",
        nombre: "",
        habitat: "",
    })
    const [animal, setAnimal] = useState({
        matricula: "",
        nombre: "",
        especie: "",
        clase: "",
        sexo: "",
        habitat: "",
        alimentacion: "",
    })
    const [listaRecinto, setListaRecinto] = useState([]);
    const [listaAnimal, setListaAnimal] = useState([]);
    useEffect(() => {

        let animalLista = [];
        const dbRef = ref(firebase, 'Animales');
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((row) => {
                animalLista.push({
                    matricula: row.key,
                    nombre: row.val().nombre,
                    especie: row.val().especie,
                    clase: row.val().clase,
                    sexo: row.val().sexo,
                    habitat: row.val().habitat,
                    alimentacion: row.val().alimentacion,
                })
            });
            setListaAnimal(animalLista)
        }, {
            onlyOnce: true
        });

        let recintoLista = [];
        const dbRef2 = ref(firebase, 'Recintos');
        onValue(dbRef2, (snapshot) => {
            snapshot.forEach((row) => {
                recintoLista.push({
                    matricula: row.key,
                    nombre: row.val().nombre,
                    habitat: row.val().habitat,
                })
            });
            setListaRecinto(recintoLista)
        }, {
            onlyOnce: true
        });

    }, []);
    return (
        <MembersContext.Provider
            value={{
                recinto,
                listaRecinto,
                animal,
                listaAnimal,
                setRecinto,
                setListaRecinto,
                setAnimal,
                setListaAnimal,
            }}
        >
            {props.children}
        </MembersContext.Provider>
    )
}

export default MembersProvider