import React from "react";

const UserForm = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={props.nombre}
          onChange={props.onInputChange}
        />
      
      <br/>

      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          placeholder="Ingrese su apellido"
          value={props.apellido}
          onChange={props.onInputChange}
        />
      </div>

      <br/>

      <div className="form-group">
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          name="edad"
          placeholder="Ingrese su edad"
          value={props.edad}
          onChange={props.onInputChange}
        />
      </div>

      <br/>

      <div className="form-group">
        <label htmlFor="ciudad">Ciudad</label>
        <input
          type="text"
          className="form-control"
          id="ciudad"
          name="ciudad"
          placeholder="Ingrese su ciudad"
          value={props.ciudad}
          onChange={props.onInputChange}
        />
      </div>

      <br/>

      <div className="form-group">
        <label htmlFor="pais">País</label>
        <input
          type="text"
          className="form-control"
          id="pais"
          name="pais"
          placeholder="Ingrese su país"
          value={props.pais}
          onChange={props.onInputChange}
        />
      </div>

      <br/>
      
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default UserForm;