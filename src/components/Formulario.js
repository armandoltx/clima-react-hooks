import React, {useState} from 'react';

function Formulario({datosConsulta}) {

  // state del componente
  // busqueda =state, guardarBusqueda = this.setState({})
  const [busqueda, guardarBusqueda] = useState({
    ciudad : '',
    pais  : ''
  }) 

  const handleChange = (e) => {
    // Cambiar el state antes usabamos this.setState({})
    guardarBusqueda({
      ...busqueda, // se hace copia del state para manterner referencia del campo ciudad al cambiar el campo pais
      [e.target.name] : e.target.value
    })
    //  console.log(e);
    //  console.log(e.target);
    //  console.log(e.target.name);
    //  console.log(e.target.value);
    // console.log(busqueda); // antes era console.log(this.state); para ver el state
  }

  const consultarClima = (e) => {
    // prevenir el comportamiento default y quedarnos en el form
    e.preventDefault();
    // pasar hacia el componente principal la busqueda del usuario, el state
    datosConsulta(busqueda);
  }


  return(
    <form
      onSubmit={consultarClima}
    >
      <div className="input-field col s12">
        <input
        type="text"
        name="ciudad"
        id="ciudad"
        onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name="pais">
          <option value="">Selecciona un Pais</option>
          <option value="AU">Australia</option>
          <option value="ES">España</option>
          <option value="MX">Mexico</option>
          <option value="CS">Costa Rica</option>
          <option value="US">USA</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input type="submit" className="waver-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />
      </div>
    </form>
  )
}

export default Formulario;