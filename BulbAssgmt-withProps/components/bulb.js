import React, { Component } from 'react';



class Bulb extends Component {
    
  render() {
    return (
      <div className="App">
        <img src={this.props.address} className="bulb" alt="bulb"/>
      </div>
    );
  }
}

export default Bulb;
