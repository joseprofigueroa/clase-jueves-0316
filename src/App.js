import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import UserData from "./components/UserData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      edad: "",
      ciudad: "",
      pais: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <UserForm
              onFormSubmit={this.handleFormSubmit}
              onInputChange={this.handleInputChange}
              nombre={this.state.nombre}
              apellido={this.state.apellido}
              edad={this.state.edad}
              ciudad={this.state.ciudad}
              pais={this.state.pais}
            />
          </div>
          <div className="col-md-6">
            <UserData
              nombre={this.state.nombre}
              apellido={this.state.apellido}
              edad={this.state.edad}
              ciudad={this.state.ciudad}
              pais={this.state.pais}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
