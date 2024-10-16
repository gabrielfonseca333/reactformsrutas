import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();
    n = 0;
 

  state = {
    numeros: []
  };

  peticionForm = (e) => {
    e.preventDefault(e);
    console.log("Petición lista");
    let numero = parseInt(this.cajaNumero.current.value);
    this.n = numero;
    let aux = [];
    
    console.log(numero);

    //que va a pasar?
    for (var i = 1; i <= 10; i++) {
      var resultado = i * numero;
      aux.push(resultado);
      console.log(aux);
      
    }
    //actualizar el estado del estate
    this.setState({
        numeros:aux
    })
  };

  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>
        <form onSubmit={this.peticionForm}>
          <label>
            Introduce el número que quieres ver la tabla de multiplicar
          </label>
          <input type="text" ref={this.cajaNumero}></input>
          <button>Enviar</button>
        </form>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.numeros.map((numero, index) => {
                return (
                  <tr>
                    <td>
                        {this.n} * {index + 1}
                    </td>
                    <td>{numero}</td>
                  </tr>
                );
              })

              //codigo react
              //debo crear los tr y los td
              //claro, necesito que el valor sea
              //actualizado con el state para que esto se actualice
            }
          </tbody>
        </table>
      </div>
    );
  }
}
