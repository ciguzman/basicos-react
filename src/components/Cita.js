import PropTypes from 'prop-types';



// Con destructuracion para no escribir props.eliminarcita
const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) } //como arrow fuction para que espere al onclick y manda de regreso a la funcion del app.js
        >Eliminar &times;</button>
    </div>
)
 
Cita.propTypes = {
    //el key no se documenta
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}


export default Cita;