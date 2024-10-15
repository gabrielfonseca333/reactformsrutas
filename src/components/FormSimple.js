import React, { Component } from "react";

export default class FormSimple extends Component {
  //Necesitamos declarar una variables de referencia para cada control dentro de react
  cajaNombre = React.createRef();
  cajaEdad = React.createRef();

  state = {
    user: null,
  };

  //para porcesar la peticion necesitamos un metodo que reciba Event (e)
  peticionForm = (e) => {
    /*la primera linea sera siempre detener 
    la propafacion del evento submit */
    e.preventDefault();
    console.log("Petición lista");
    let nombre = this.cajaNombre.current.value;
    let edad = parseInt(this.cajaEdad.current.value);
    this.setState({
      user: {
        nombre: nombre,
        edad: edad,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Formulario Simple React</h1>
        <form onSubmit={this.peticionForm}>
          <label>Nombre: </label>
          <input type="text" ref={this.cajaNombre} />
          <br />
          <label>Edad: </label>
          <input type="text" ref={this.cajaEdad} />
          <br />
          <button>Enviar datos</button>
          <hr />
          {this.state.user && (
            <div>
              <h3 style={{color:"blue"}}>{this.state.user.nombre}</h3>
              <h3 style={{color:"blue"}}>{this.state.user.edad}</h3>
            </div>
          )}
        </form>
      </div>
    );
  }
}
