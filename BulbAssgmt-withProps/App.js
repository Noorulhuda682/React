import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bulb from './components/bulb'
import SwitchOn from './components/switchOn'
import SwitchOff from './components/switchOff'
import Breake from './components/break'

class App extends Component {
  constructor(){
    super();
    this.changBulb =  this.changBulb.bind(this)
    this.reChangeBulb =  this.reChangeBulb.bind(this)
  }
  state = {
    bulb : 'https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg',
    title1 : true,
    title2 : true,
  }
  

  
  changBulb(e){
    if(e == 'title1' ){
    this.setState({
      bulb : 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn', 
      title1 : false,
      })
    }
    if(e == 'title2' ){
      this.setState({
        bulb : 'https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736', 
        title2 : false,
        })
    }
    // console.log("working function=====>"+e);
  }


  reChangeBulb(e){
    if(e == 'title1' ){
      this.setState({
        bulb : 'https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg', 
        title1 : true,
        })
      }
      if(e == 'title2' ){
        this.setState({
          bulb : 'https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg', 
          title2 : true,
          })
      }
      console.log("working function=====>"+e);
    
  }




  render() {
    const {bulb,title1,title2} = this.state
    return (
      <div className="App">
      {this.state.val}
        <header className="App-header">
                     <Bulb address={bulb} />
     { title1 &&     <SwitchOn  title="SwitchOn"  func={this.changBulb} />  } 
     { !title1 &&    <SwitchOff title="SwitchOff" func={this.reChangeBulb} tt="title1" /> }

     { title2 &&     <Breake  title="Breake"      func={this.changBulb} />  } 
     { !title2 &&    <SwitchOff title="SwitchOff" func={this.reChangeBulb} tt="title2" /> }

         <br/>as
         <br/>
         <br/>
         <img src={logo} className="App-logo" alt="logo" />
        </header>

      </div>
    );
  }
}

export default App;
