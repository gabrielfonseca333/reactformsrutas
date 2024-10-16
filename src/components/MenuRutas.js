import React, { Component } from "react";

var estilo_lista = {
  padding:"10px",
  border:"1px solid black",
  margin:"10px",
  
}

export default class MenuRutas extends Component {

  

  render() {
    return (

      <div
        style={{
          border: "solid 1px gold",
          backgroundColor:"lightgoldenrodyellow",
          padding: "20px",
          textAlign: "center",
          width: "50%",
          position: "absolute",
          left: "25%",
        }}
      >
        <ul style={{listStyle:"none"}}>
          <li style={estilo_lista}>
            <a href="/">Home</a>
          </li>
          <li style={estilo_lista}>
            <a href="/cine">Cine</a>
          </li>
          <li style={estilo_lista}>
            <a href="/musica">Musica</a>
          </li>
          <li style={estilo_lista}>
            <a href="/collatz">Collatz</a>
          </li>
          <li style={estilo_lista}>
            <a href="/tablamultiplicar">Tabla Multiplicar</a>
          </li>
          <li style={estilo_lista}>
            <a href="/tablamultiplicar2">Tabla Multiplicar 2</a>
          </li>
          <li style={estilo_lista}>
            <a href="/seleccionmultiple">Seleccion Multiple</a>
          </li>
        </ul>
      </div>
    );
  }
}
