import React, { Component } from 'react';



class SwitchOff extends Component {
  render() {
      
    return (
      <div className="App">
        <button onClick={()=>{ this.props.func(this.props.tt) }}>
            {this.props.title}
        </button>
      </div>
    );
  }
}

export default SwitchOff;
