import React,{useState} from "react";


export default function TabelaIMC(){
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  <th>
                    Classificação
                  </th>
                <th>
                  IMC
                </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abaixo do Peso</td>
                  <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                  <td>Abaixo do Normal</td>
                  <td>Entre 18,5 e 24,9 </td>
                </tr>
                <tr>
                  <td>Sobrepeso</td>
                  <td>Entre 25 e 29,9 </td>
                </tr>
                <tr>
                  <td>Obesidade de Grau I</td>
                  <td>Entre 30 e 34,9 </td>
                </tr>
                <tr>
                <td>Obesidade de Grau II</td>
                <td>Entre 35 e 39,9 </td>
                </tr>
                <tr>
                  <td>Obesidade de Grau III ou morbida</td>
                  <td>Acima de 40 </td>
                </tr>
              </tbody>
            </table>
      )
}