import { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); //convierte a un string que se pueda manipular
  if(!citasIniciales){
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas ] = useState(citasIniciales);


  // Use effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => { //como el document ready de jquery o el dom de js, se ejecuta cuando se crea el componente o cuando se actualiza algo
    
    //cada que cambia se ve el state para actuar en localStorege
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
    
  }, [citas, citasIniciales]); // se le pasa un arreglo vacio para que no se cicle en las apis (en caso de ser apis)
  // En este caso le pasamos citas para que cada que el state de citas cambie, se vuelva a ejecutar


  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([ //funcion para modificar el state
      ...citas,
      cita
    ]);
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //  Mensaje condicional de titulo
  const titulo = citas.length === 0  ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita} //le enviamos la funcioon como prop para que de alla nos la devuelvan
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
