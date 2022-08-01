import React,{useState} from "react";


export default function Altura(props){
    return(
        <div>
          <label>
            Altura
            <input className="input_calc" type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
          </label>
        </div>
      )
}