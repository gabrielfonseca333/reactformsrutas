import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {

    selectMultiple = React.createRef();

    state={
        seleccionados:""
    }

    mostrarMultiples=(e)=>{
        e.preventDefault();
        //dentro de un select multiple tenemos un array con todas
        //las options que existen. 
        let options = this.selectMultiple.current.options;
        let datos = "";
        //cada objeto option dentro del array contiene un atributo
        //para saber si esta seleccionado: selected, value, text
        console.log(options);
        for(var option of options){
            if(option.selected == true){
                datos += option.value + " ";
            }
        }

        //modificamos el state del Render()
        this.setState({
            seleccionados: datos
        })


    }


  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h2 style={{color:"blue"}}>{this.state.seleccionados} </h2>
        <form>
            <select size="5" multiple ref={this.selectMultiple}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
            </select>
            <br/>
            <button onClick={this.mostrarMultiples}>
                Mostrar seleccionados
            </button>
        </form>
      </div>
    )
  }
}
