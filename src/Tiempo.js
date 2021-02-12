import React, {Component} from "react";
import styled from "styled-components";


const Texto = styled.p`
margin-left: 20px;
font-weight: bold;

`


class Tiempo extends Component{
    constructor(){
        super()
        this.state = {
            cielo:[]
        }

    }

    componentDidMount(){
        
        fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019")
        .then (response =>response.json())
        .then (data=>{
            this.setState({
                cielo:data.stateSky
            })
        } )

}

render(){
    return ( 

        <Texto>El estado del cielo es: {this.state.cielo.description}</Texto>
        

    )
}

}

export default Tiempo;