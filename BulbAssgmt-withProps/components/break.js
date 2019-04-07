import React, { Component } from 'react';



class Breake extends Component {
constructor(props){
    super();
}
       
  render() {
    return (
      <div className="App">
        <button onClick={()=>{ this.props.func('title2')} }>
            {this.props.title}
        </button>
      </div>
    );
  }
}

export default Breake;
