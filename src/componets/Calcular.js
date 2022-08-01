import React,{useState} from "react";


export default function Calcular(props){
    const calc=()=>{
        props.sr(props.p/(props.a*props.a))
      }
    return(
      <div>
        <button className="button_calc" onClick={calc}>Calcular</button>
      </div>
    )
}