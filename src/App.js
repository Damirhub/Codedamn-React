import React from 'react';
import ReactDOM from 'react-dom';
import { HelloPlanet } from './components/HelloPlanet';



var obi = {
  num: 5
};

ReactDOM.render( 
<div>
  <HelloPlanet name = "Planjet" bobi = {obi.num}/>
  <h1>TESTING BRANCH</h1>

  <h1>TESTING ONE</h1>
  
  <h1>TESTING THREE</h1>
  </div>
  , document.getElementById('App7'));



export default HelloPlanet;