import React from 'react';
import { render } from 'react-dom';



class App extends React.Component {

  render() {
     
    return (
      <div className = "container ">
        mdimsdim
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}





render( <App name = {"MIMIMI"}/>, document.getElementById('App7'));





export default App;