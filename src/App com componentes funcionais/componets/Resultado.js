import React,{useState} from "react";


export default function Resultado(props){
    return(
        <div>
          <p id="result_calc">Resultado: {props.r.toFixed(2)}</p>
        </div>
      )
}