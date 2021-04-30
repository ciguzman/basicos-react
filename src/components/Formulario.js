import {Fragment,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

//en vez de recibir el prop y ponerle prop.crearcita ya lo destructuramos
const Formulario = ({crearCita}) => {

    // Crear State de Cita
    const [ cita, actualizarCita ] = useState({
        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError ] = useState(false);


    // Funcion que se ejecuta cada que el usuario escribe en un imput
    const actualizarState = e => { // le pasamos un evento (e)
        actualizarCita({ //como el state es un objeto abrimos las llaves
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extrayendo los valores de cita
    const { mascota, propietario, fecha, hora, sintomas } = cita; 

    // Cuando el usuario precione agregar cita
    const submitCita = e =>{
        e.preventDefault();

        // 1.-Validar
        
        if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true);
            return;

        }

        // Eliminar el mensaje si todo bien
        actualizarError(false);

        // 2.-Asignar un ID
        cita.id = uuidv4();

        // 3.-Crear la cita
        crearCita(cita);  // Funcion llegada de prop del componente principal app.js

        // 4.-Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }); //se reinician los inputs porque pusismos este valor en los values
    }

    return ( 
        <Fragment>
            <h2> Crear Cita </h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label> Nombre Mascota </label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label> Nombre Dueño </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label> Fecha </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label> Hora </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label> Sintomas </label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
// Mera documentacion y checkin
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;