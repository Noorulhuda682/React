import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizeApp from './component/quizeApp';
import Result   from './component/result';

class App extends Component {
  constructor(){
    super();
    this.state = {
      quizestart : false, data : null,showResult : false,startPg : false
    }    
    this.getStudentData = this.getStudentData.bind(this);
    this.restartRecieve = this.restartRecieve.bind(this)
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=10')
    .then((res)=>  res.json() )
       .then((data)=>{
         this.setState({
           data : data,   result : false,
         })
       })
  }


  restartRecieve(s){
 console.log(s);
 
       this.setState({   quizestart : true,    t : 0,showResult : false,startPg : false})
  }

  start(){
    this.setState({
      quizestart : true
    })
  }

  getStudentData(studentData){
    console.log(studentData);
    this.setState({studentData,showResult : true,startPg:true,quizestart:false})
  }
  

  render() {
    
    const {quizestart,data,studentData,showResult,startPg} = this.state;
    console.log(data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>MyQuizeApp</h3>
        </header>
        
        <br/>
        {quizestart && <QuizeApp data={data}     getStudentData={this.getStudentData}    /> }
  
       {!quizestart && !startPg &&
       <div>
           <h2 style={{color: 'dodgerblue'}}>Quize Description</h2>
           <hr/>
           <div>
             <li><strong>  This quize containes 10 questions.</strong></li>
             <li><strong> Each question carry equal marks .</strong></li>
             <li><strong> The quize total time    is 2 minutes.</strong></li>
           </div>
           <br/><br/><br/><br/>
           <button className='start' onClick={this.start.bind(this)}>StartQuize</button>
        </div>   
        
       }

        
        
       













        {showResult && < Result studentData={studentData}  restartRecieve={this.restartRecieve} />}
      </div>
    );
  }
}

export default App;