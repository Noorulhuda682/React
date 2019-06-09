import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './Config/firebase';


class App extends Component {
  constructor (){
    super ()
    this.state = {
      name:'',email:'',password:'',logIn : false
    }
  }
  signup(){
    
   console.log(this.state.name);
   

  }
  render() {
      return (
      <div>
       {!this.state.logIn && <div>
          <h1> 
            REGISTRATION
          </h1>
          <br/>
        
          FULLNAME:
          <input type="text" value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})} placeholder='FULLNAME'/>
          <br/>
          EMAIL:
          <input type="email"value={this.state.email} onChange={(e)=>this.setState({email : e.target.value})} placeholder='EMAIL'/> 
          <br/>
          AGE:
          <input type="text" placeholder='AGE'/>
          <br/>
          
          PASSWORD:
          <input type="password" value={this.state.password} onChange={(e)=>this.setState({password : e.target.value})} placeholder='PASSWORD'/> 
          <br/>
             
         CONFIRM PASSWORD:
          <input type="password" placeholder='CONFIRM PASSWORD'/>   
          <br/>  
      <button onClick={this.signup.bind(this)}>SIGNUP</button>
                     
           </div>}


 {this.state.logIn && <div>
          <h1> 
            REGISTRATION
          </h1>
          <br/>

          EMAIL:
          <input type="email"value={this.state.email} onChange={(e)=>this.setState({email : e.target.value})} placeholder='EMAIL'/> 
          <br/>

          
          PASSWORD:
          <input type="password" value={this.state.password} onChange={(e)=>this.setState({password : e.target.value})} placeholder='PASSWORD'/> 
          <br/>
             
  
      <button onClick={this.login.bind(this)}>LOGIN</button>
                     
           </div>}





        </div>
    );
  }
}

export default App;
