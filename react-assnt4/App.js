import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    toggle : false,
    toggleText : "HELLO WORLD",
    email : "noor@gmail.com",password : "noor12",user : false,form : false
   }

  changeText(){
    this.state.toggle === false ? this.setState({ toggle : true }) : this.setState({  toggle : false })
 
    if(this.state.toggle == false) {
     this.setState({
      toggleText : "HELLO WORLD"
     })
   }
   else{
    this.setState({
      toggleText : "HELLO PAKISTAN"
     })
   }
  }

  logIn(){
    return(
      <div>
        <h2>LOG IN PAGE</h2>
        <br/>
        <input value={this.state.email} onChange={e=>{this.setState({ email : e.target.value })}} placeholder="Eneter email here"/><br/><br/>
        <input value={this.state.password} onChange={e=>{this.setState({ password : e.target.value })}} placeholder="Eneter password here"/><br/><br/>
        <button onClick={e =>{ this.setState({
          user : true
        }) }}> LogIn
        </button>
      </div>
    )
  }
  
  employee(){
    return(
      <div>
        <h1>
          Employee Page
        </h1><br/><br/>
        <button onClick={()=>{this.setState({ form : true }) }}>
          Add Form
        </button>
    
      </div>
    )
  }
  
  employeeForm(){
    return(
      <div>
        <h1>
          Employee Form
        </h1>
        <button onClick={()=>{this.setState({ user : false,form : false }) }}>
          logOut
        </button><br/><br/><br/>
        <input placeholder="Enter your name" />
        <button onClick={()=>{this.setState({ form : false }) }}>
          Add 
        </button>
      </div>
    )
  }
  
  


  render() {
    const {user,form} = this.state

    return (
      <div className="App">
        {/* =================== QUESTIONO 01 ======================= */}
        <br/><br/><br/>
        <button className="chTextBtn" onClick={()=>{ this.changeText()}}>{this.state.toggleText}</button>



        {/* // ====================== QUESTION 03 ============================= */}
          {!user && this.logIn() }
          {user && !form && this.employee() }
          {user && form && this.employeeForm()}
      </div>
     
    );
  }
}

export default App;
