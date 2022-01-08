import React, { Component } from 'react';
import './squares.css';

class Squares extends React.Component {
	render() {
		return (
    
    <div class="square-container">
  <div class="square">
    <div class="content"></div>
  </div>
  <div class="square">
    <div class="content spread"></div>
  </div>
  <div class="square">
    <div class="content column"></div>
  </div>
</div>
   );
}
}

export default Squares;