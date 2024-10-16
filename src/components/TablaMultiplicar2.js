import React, { Component } from "react";

export default class TablaMultiplicar2 extends Component {
  selectNumero = React.createRef();
  n = 0;

  state = {
    aleatorios: [],
    numeros: [],
  };

  test = () => {
    console.log("asdads");
  };

  cargarNumerosAleatorios = (e) => {
    e.preventDefault(e);

    //quiero un for que genere numeros aleatorios
    for (let i = 0; i < 10; i++) {
      // Genera un número aleatorio entre 1 y 100
      let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      this.state.aleatorios.push(numeroAleatorio);
    }
    this.setState({
      aleatorios: this.state.aleatorios,
    });
  };


  peticion = (e) => {
    e.preventDefault(e);
    console.log("Petición lista");
    let numero = parseInt(this.selectNumero.current.value);
    console.log(numero);
    this.n = numero;
    let aux = [];

    //que va a pasar?
    for (var i = 1; i <= 10; i++) {
      var resultado = i * numero;
      aux.push(resultado);
      console.log(aux);
    }
    //actualizar el estado del estate
    this.setState({
      numeros: aux,
    });
  };

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar 2</h1>
        <form>
          <label>Selecciona el número:</label>
          <select ref={this.selectNumero}>
            <option disabled>Selecciona numero</option>
            {
              //codigo react
              this.state.aleatorios.map((aleatorio, index) => {
                return <option key={index}>{aleatorio}</option>;
              })
            }
          </select>
          <button onClick={this.cargarNumerosAleatorios}>
            Cargar numeros aleatorios
          </button>
          <button onClick={this.peticion}>Mostrar tabla</button>
        </form>

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
                  <tr key={index}>
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
