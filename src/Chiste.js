import React, {Component} from "react";



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
        <div>
            <h1>Web de chistes</h1>
            {this.state.joke && <div key={this.state.joke}>{this.state.joke}</div>
            }
            <br/>
            <button onClick={() => this.fetchData()}
            >
            Siguiente chiste    
            </button>


        </div>



    )


}
}

