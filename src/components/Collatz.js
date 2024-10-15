import React, { Component } from 'react'

export default class Collatz extends Component {

    //variable para el input
    cajaNumero = React.createRef();

    state ={
        numeros: []
    }

    //Para procesar la peticion
    peticionForm=(e)=>{
        e.preventDefault();
        console.log("Peticion lista");
        let numero = parseInt(this.cajaNumero.current.value);
        this.setState({
            resultado:numero
        })

        while(numero != 1){

            if(numero%2==0){
                //es par
                console.log("el numero es par");
                numero = numero/2;
                this.state.numeros.push(numero);
                
            }else{
                //es impar
                console.log("el numero es impar");
                numero = (numero*3)+1;
                this.state.numeros.push(numero);
               
            }


        }

        this.setState({
            numeros:this.state.numeros
        })

        console.log(this.state.numeros);

        



    }



  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.peticionForm}>
            <label>Introduce un número: </label>
            <input type='text' ref={this.cajaNumero}></input>
            <button>
                Enviar
            </button>
        </form>
        
        <div>
            <ul>
                {
                
                    
                        this.state.numeros.map((numero, index)=>{
                            return(<li key={index}>{numero}</li>)
                        })
                    
                    

                    

                }
            </ul>
        </div>
      </div>
    )
  }
}
