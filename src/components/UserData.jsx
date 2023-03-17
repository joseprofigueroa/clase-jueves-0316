import React from 'react';

class UserData extends React.Component {
  render() {
    const { nombre, apellido, edad, ciudad, pais } = this.props;

    return (
      <div>
        <h2>User Data:</h2>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Apellido:</strong> {apellido}</p>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Ciudad:</strong> {ciudad}</p>
        <p><strong>País:</strong> {pais}</p>
      </div>
    );
  }
}

export default UserData;
