import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => {
    //Hook useState
    const [animalesLista, setAnimalesLista] = useState(() => {
        const listaAnimal = localStorage.getItem("Animal")
        return listaAnimal ? JSON.parse(listaAnimal) : [];
    })

    /*{ matricula: "A3312", nombre:"Amelia", especie: "Borrego cimarrón", clase: 'Mamifero', sexo: "Femenino", habitat:'Desierto' , alimentacion: 'Hervibora'},
    { matricula: "A200", nombre:"Roger", especie: "Canguro rojo", clase: 'Mamifero', sexo: "Masculino", habitat:'Sabana' , alimentacion: 'Hervibora'},
    { matricula: "A300", nombre:"Tony", especie: "Tigre", clase: 'Mamifero', sexo: "Masculino", habitat:'Selva' , alimentacion: 'Carnivora' , cantidad: 4},
    { matricula: "A15", nombre:"Zulu", especie: "Elefante africano", clase: 'Mamifero', sexo: "Femenino", habitat:'Sabana', alimentacion: 'Hervibora'},*/

    const [desactivado, setDesactivado] = useState(false)
    const [animal, setAnimal] = useState({
        matricula: "",
        nombre: "",
        especie: "",
        clase: "",
        sexo: "",
        habitat: "",
        alimentacion: ""
    })

    const guardarCambios = (e) => {
        setAnimal({
            ...animal,
            [e.target.name]: e.target.value
        })
    }

    const enviar = (e, index) => {
        e.preventDefault();

        const { matricula, nombre, especie, clase, sexo, habitat, alimentacion } = animal;

        const vacios = (matricula.length === 0 || nombre.length === 0 || especie.length === 0 || clase.length === 0 || habitat.length === 0 || alimentacion.length === 0 || sexo.length === 0 || sexo === "Selecciona")

        if (!vacios) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Animal agregado',
                showConfirmButton: false,
                timer: 1500
            })

            let temporal = animalesLista;

            if (desactivado === true) {
                temporal = temporal.filter(a => a.matricula !== matricula)
            }

            setAnimalesLista([
                ...temporal,
                animal
            ])
            setAnimal({
                matricula: "",
                nombre: "",
                especie: "",
                clase: "",
                sexo: "",
                habitat: "",
                alimentacion: ""
            })
            setDesactivado(false)
        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Llena todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }

    }

    const eliminar = (id) => {
        const temporal = animalesLista.filter(a => a.matricula !== id)

        setAnimalesLista(temporal)

    }

    const modificar = (id) => {
        const temporal = animalesLista.find(a => a.matricula === id);

        setAnimal({
            matricula: temporal.matricula,
            nombre: temporal.nombre,
            especie: temporal.especie,
            clase: temporal.clase,
            sexo: temporal.sexo,
            habitat: temporal.habitat,
            alimentacion: temporal.alimentacion,
        })
        setDesactivado(true)
    }

    // useEffect
    useEffect(() => {
        localStorage.setItem("Animales", JSON.stringify(animalesLista))
        if (animalesLista.length === 0) {
            localStorage.removeItem("Animales")
        }
    }, [animalesLista])

    return (
        <FirebaseContext.Provider value={{
            animal,
            animalesLista,
            desactivado,
            guardarCambios,
            enviar,
            eliminar,
            modificar
        }}> {props.children}
        </FirebaseContext.Provider>
    );
}

export default FirebaseProvider;