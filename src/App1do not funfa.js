import React,{useState} from "react";
import './App.css'

const tabelaIMC=()=>{
  return(
    <div >
        <table border='1' style={{borderCollapse: 'collapse'}}>
          <thead>
            <tr><th>Classificação</th><th>IMC</th></tr>
          </thead>
          <tbody>
            <tr><td>Abaixo do Peso</td><td>Abaixo de 18,5</td></tr>
            <tr><td>Abaixo do Normal</td><td>Entre 18,5 e 24,9 </td></tr>
            <tr><td>Sobrepeso</td><td>Entre 25 e 29,9 </td></tr>
            <tr><td>Obesidade de Grau I</td><td>Entre 30 e 34,9 </td></tr>
            <tr><td>Obesidade de Grau II</td><td>Entre 35 e 39,9 </td></tr>
            <tr><td>Obesidade de Grau III ou morbida</td><td>Acima de 40 </td></tr>
          </tbody>
        </table>
      </div>

  )
}

const fpeso=(p,sp)=>{
  return(
    <div>
      <label>Informe seu peso: <input id="input_p" className="input_calc" type="text" value={p} onChange={(e)=>{sp(e.target.value)}} ></input></label><br/>
      </div>
  )
}
const faltura=(a,sa)=>{
  return(
    <div>
      <label>Informe sua altura: <input className="input_calc" type="text" value={a} onChange={(e)=>sa(e.target.value)} ></input></label><br/>
      </div>
  )
}

const fcalcular=(a,p,sr)=>{
    const calc=()=>{
      sr(p/(a*a))
    }
    return(
      <div>
        <button className="button_calc" onClick={calc}>Calcular</button>
      </div>
    )
}
const fresultado=(r)=>{
  return(
    <div >
      <p id="result_calc">Resultado: {r.toFixed(2)}</p>
    </div>
  )
}

export default function App() {
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return (
    <>
    <div className="div_input">
    {fpeso(peso,setPeso)}
    {faltura(altura,setAltura)}
    {fcalcular(peso,altura,setResultado)}
    {fresultado(resultado)}
    {tabelaIMC()}
    </div>
    </> 
  );
}


