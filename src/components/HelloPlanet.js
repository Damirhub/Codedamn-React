import React from 'react';

export class HelloPlanet extends React.Component{


    constructor () {
        super() 
        this.state = {
            counter: 0
        }
 
    setInterval (()=>{
        this.setState ({counter: this.state.counter + 1})
    }, 100)



    }

  render () {
    
    return (
        <div>
            <h3> 
            Hey your number is {this.state.counter}
            <br />
            Hey your number is {this.state.counter }
            
             </h3>
         </div>
        )
    }
}