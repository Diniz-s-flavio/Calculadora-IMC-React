import React from "react";


export default class Calcular extends React.Component{
    constructor(){
        super()
        this.c=this.fcalc.bind(this)
    }
    fcalc=()=>{
        const r=this.props.p/(this.props.a*this.props.a)
        this.props.sr(r)
        console.log(r)
      }

    render(){
        return(
        <div>
            <button className="button_calc" onClick={this.c}>Calcular</button>
        </div>
        )
    }
}