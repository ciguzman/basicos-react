import {Fragment} from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2> Crear Cita </h2>

            <form>
                <label> Nombre Mascota </label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                    placeholder="Nombre Mascota"
                />

                <label> Nombre Dueño </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                    placeholder="Nombre del Dueño de la mascota"
                />

                <label> Fecha </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                />

                <label> Hora </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                />

                <label> Sintomas </label>
                <textarea
                    className="u-full-width"//tome todo el espacio disponible (de esqueleton)
                    name="sintomas"
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"//tome todo el espacio disponible (de esqueleton)
                >Agrer Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;