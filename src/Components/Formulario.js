import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { FirebaseContext } from '../Context/FirebaseContext';

const Formulario = () => {
    const {animal, desactivado, enviar, guardarCambios} = useContext(FirebaseContext)
    return (
        <div className="Formulario">
            <h1 className='Separar3'> Registro Animal </h1>
            <div className="Contenedor2">
                <form onSubmit={enviar}>
                    <div>
                        <label htmlFor="matricula">Matricula</label>
                        <input className='input'
                            type="text"
                            placeholder="Ejm. A130, A3312, B111 ..."
                            onChange={guardarCambios}
                            value={animal.matricula}
                            name="matricula"
                            disabled={desactivado}
                        />
                    </div>

                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            placeholder="Ejm. Jose ..."
                            onChange={guardarCambios}
                            value={animal.nombre}
                            name="nombre"
                        />
                    </div>

                    <div>
                        <label htmlFor="especie">Especie:</label>
                        <input
                            type="text"
                            placeholder="Ejm. Tigre, Leon, Zebra ..."
                            onChange={guardarCambios}
                            value={animal.especie}
                            name="especie"
                        />
                    </div>

                    <div>
                        <label htmlFor="clase">Clase:</label>
                        <input
                            type="text"
                            placeholder="Ejm. Mamifero, Aves, Reptiles ..."
                            onChange={guardarCambios}
                            value={animal.clase}
                            name="clase"
                        />
                    </div>

                    <div>
                        <label htmlFor="sexo">Sexo:</label>
                        <select name="sexo" value={animal.sexo} onChange={guardarCambios}>
                            <option value="Selecciona">Selecciona</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="habitat">Habitat:</label>
                        <input
                            type="text"
                            placeholder="Ejm. Desierto, Bosque, Sabana, Selva ..."
                            onChange={guardarCambios}
                            value={animal.habitat}
                            name="habitat"
                        />
                    </div>

                    <div className="Separar2">
                        <label htmlFor="alimentacion">Alimentacion:</label>
                        <input
                            type="text"
                            placeholder="Ejm. Carnivoro, Herbivoro, Omnivoro ..."
                            onChange={guardarCambios}
                            value={animal.alimentacion}
                            name="alimentacion"
                        />
                    </div>
                    <button >Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;