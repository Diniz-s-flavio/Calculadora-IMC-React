import React,{useState} from "react";
import './App.css'

export default function App() {
  const [peso,setPeso]=useState()
  const [altura,setAltura]=useState()

  return (
    <>
      <div className="div_input">
      <label>Informe sua altura: </label><input className="input_calc" type="float" value={altura} onChange={(e)=>setAltura(e.target.value)} ></input><br/>
      <label>Informe seu peso: </label><input id="input_p" className="input_calc" type="float" value={peso} onChange={(e)=>setPeso(e.target.value)} ></input><br/>

      <button className="button_calc">Calcular</button>
      <p id="result_calc">Resultado: </p>
      </div>

      <div className="div_input">
        <table>
          <thead>
            <th>Classificação</th><th>IMC</th>
          </thead>
          <tbody>
            <tr>Abaixo do Peso</tr><tr>Abaixo de 18,5</tr>
          </tbody>
        </table>
      </div>

    </>
    
  );
}


