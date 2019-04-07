import React, { Component } from 'react';



class SwitchOn extends Component {
constructor(props){
    super();
}
       
  render() {
    return (
      <div className="App">
        <button onClick={()=>{ this.props.func("title1")} }>
            {this.props.title}
        </button>
      </div>
    );
  }
}

export default SwitchOn;
