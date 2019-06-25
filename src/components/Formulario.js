import React from 'react';

function Formulario() {

  const handleChange = (e) => {
    //Cambiar el state
  }


  return(
    <form>
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
        <input type="submont" className="waver-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />
      </div>
    </form>
  )
}

export default Formulario;