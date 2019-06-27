import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';


function App() {

  //state principal
  // ciudad = state, guardarCiudad = this.setState()
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais ] = useState('');
  const [ error, guardarError ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});

  // ciclo de vida ahora se usa useEffect es igual q componentDidMount, es decir, cuando el componente esta listo se ejecuta, pero tambien toma el de componenetDidUpdate, es decir, cuando haya cambios se ejecuta. Para prvernir la 1 vez, anadimos un if
  useEffect(() => {

    // prevenir ejecucion
    if(ciudad === '') return;

    const consultarApi = async () => {
      // crear url
      const appId = '409bc547bda57e3ff75d2d7edc6501c4';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

      // consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // console.log(resultado);
      guardarResultado(resultado);
    }

    consultarApi();
  },[ ciudad, pais ]);
  //la parte de [] es un arreglo de dependencias, es q parte del state tiene q estar escuchando para ejecutarse
  // en este caso queremos que escuche cuando tengamos la ciudad y el pais

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
  } else if(resultado.cod === '404') {
    componente = <Error mensaje='La Ciudad no existe en nuestro registro' />
  }else {
    // mostrar clima
    componente = <Clima 
                  resultado={resultado}
                 />;
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