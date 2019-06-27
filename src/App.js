import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import { id } from 'postcss-selector-parser';

function App() {

  //state principal
  // ciudad = state, guardarCiudad = this.setState()
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais ] = useState('');
  const [ error, guardarError ] = useState(false);

  const datosConsulta = (datos) => {
    // console.log("datosConsulta");
    // console.log(datos);

    // Validar que ambor campos esten
    if(datos.ciudad === '' || datos.pais === '') {
      guardarError(true);
      return;
    }

    // Ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }


  // Cargar un componente Condicionalmente

  let componente;
  if(error) {
    // hay un error
    componente = <Error mensaje='Ambos campos son obligatorios' />
  } else {
    // mostrar clima
    componente = null;
  }





  return (
    <div className="App">
      <Header titulo="Clima React App con Hooks" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta} 
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// ya no requerimos pasar this.datosConsulta en datosConsulta={datosConsulta} pq no estamos en un clase es una funcion (function App())

export default App;