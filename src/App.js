import React from 'react';
import ReactDOM from 'react-dom';
import { HelloPlanet } from './components/HelloPlanet';



var obi = {
  num: 5
};

ReactDOM.render( 
<div>
  <HelloPlanet name = "Planjet" bobi = {obi.num}/>


  </div>
  , document.getElementById('App7'));



export default HelloPlanet;