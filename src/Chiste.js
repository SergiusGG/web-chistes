import React, {Component} from "react";
import styled from "styled-components";
import img from "./img.jpg";
import img2 from "./img2.svg";

const Styleapp = styled.div`

  background-image:url(${img}) ;
  width:1800px;
  height:960px;
  

`;

const Styledbutton = styled.button`
background-color:#00DEDE;
color: white;
width: 150px;
height:40px;
border:none;
border-radius:10%;
font-size:.8rem;
font-weight:bold;

`;

const Style = styled.div`

  text-align: center;
  font-size: 1.2rem;
  width: 600px;
  margin-left:600px;
  margin-top:60px;
  background-color: white;
  padding:50px;
  display: inline-block;
  border-radius:8%;
    border: 1px solid;
    box-shadow: 3px 5px 4px 4px gray;

`;
 const Img= styled.img`
     width:30px;
     margin-left:15px;
 
 `;

const Title = styled.h1`
  display:inline;
  padding-bottom:30px;
`

const Text = styled.p`
margin-top:60px;
font-weight:bold;

`

export default class Chiste extends Component{

state ={
    joke:[]
}

fetchData(){

    fetch("https://icanhazdadjoke.com/",
    {
        headers:{
            "Accept": "application/json"
        }})
        .then((response) => response.json())
        .then((data) => {
            console.log(data.joke)
            this.setState({joke: data.joke});
         } )
}

render(){

    return(
        <Styleapp>
        <Style>
            
            <Title>Chistepedia</Title>
             <Img src={img2}/>
             <Text>
            {this.state.joke && <div key={this.state.joke}>{this.state.joke}</div>
            }</Text>
            <br/>
            <Styledbutton onClick={() => this.fetchData()}
            >
            Siguiente chiste    
            </Styledbutton>

           
        </Style>
        </Styleapp>



    )


}
}

