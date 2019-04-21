import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizeApp from './component/quizeApp'

class App extends Component {
  constructor(){
    super();
    this.state = {
      quizestart : false,
      data : null,
      t : 0,
    }    
   
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=10')
    .then((res)=>  res.json() )
       .then((data)=>{
         this.setState({
           data : data,
          
         })
          
       })
  }

 

 


  start(){
    this.setState({
      quizestart : true
    })
  }
  
 


  render() {
    
    const {quizestart,data} = this.state;
    console.log(data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>QuizeApp</h3>
        </header>
        
        <br/>
        {quizestart && <QuizeApp data={data} 
           
        /> }


        <br/><br/><br/><br/>
        {!quizestart && <button className='start' onClick={this.start.bind(this)}>StartQuize</button>}
      </div>
    );
  }
}

export default App;
