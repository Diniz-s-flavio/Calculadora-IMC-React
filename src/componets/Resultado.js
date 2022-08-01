import React,{useState} from "react";


export default class Resultado extends React.Component{
    constructor(){
        super()
    }
    render(){
    return(
        <div>
          <p id="result_calc">Resultado: {this.props.r.toFixed(2)}</p>
        </div>
      )
    }
}