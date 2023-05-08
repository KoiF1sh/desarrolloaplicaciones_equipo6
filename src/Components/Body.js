import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { FirebaseContext } from '../Context/FirebaseContext';

const Body = () => {
    const {animalesLista, eliminar, modificar} = useContext(FirebaseContext)
    return (
        <div className="Body">
            <div>
                <h1 className='Separar3'> Listado Animal </h1>              
                    {animalesLista.length === 0
                        ?
                        <h1> No hay animales registrados </h1>
                        :
                        <>
                            <h4> Total de animales registrados: {animalesLista.length} </h4>
                            <div className="Contenedor2">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Matricula</th>
                                        <th>Nombre</th>
                                        <th>Especie</th>
                                        <th>Clase</th>
                                        <th>Sexo</th>
                                        <th>Habitat</th>
                                        <th>Alimentacion</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        animalesLista.map((r, index) =>
                                            <tr key={index}>
                                                <td>{r.matricula}</td>
                                                <td>{r.nombre}</td>
                                                <td>{r.especie}</td>
                                                <td>{r.clase}</td>
                                                <td>{r.sexo}</td>
                                                <td>{r.habitat}</td>
                                                <td>{r.alimentacion}</td>
                                                <td><Button onClick={()=>eliminar(r.matricula)} variant="danger">Eliminar</Button></td>
                                                <td><Button onClick={()=>modificar(r.matricula)} variant="warning">Modificar</Button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                            </div>
                        </>
                    }
            </div>
        </div>
    )
        ;
}

export default Body;
