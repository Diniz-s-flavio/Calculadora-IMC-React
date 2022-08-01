import React,{useState} from "react"
import './App.css'
import TabelaIMC from "./componets/TabelaIMC"
import Peso from "./componets/Peso"
import Altura from "./componets/Altura"
import Calcular from "./componets/Calcular"
import Resultado from "./componets/Resultado"


const fcalcular=(p,a,sr)=>{
    
}

const fresultado=(r)=>{
  
}

export default function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return (
    <>
    <div className="div_input">
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <TabelaIMC/>
    </div>
    </>
  );
}


