import React, { Component } from 'react';

class Result extends Component {
   constructor(props){
       super(props);

   }

 
  render() {
      const {studentData} = this.props
      console.log(studentData);
      
         return (
      <div>
        <div>
            <h1 style={{color: 'dodgerblue'}}>Result</h1>
            <h2>
                Score : {studentData.percentage}%
            </h2>
            <h2>Correct answers : {studentData.correct}</h2>
            <h2>Incorrect answers : {studentData.incorrect} </h2>
            { studentData.correct < 5 &&
            <h1>Status : Fail</h1> }
             { studentData.correct >= 5 &&
            <h1>Status : Pass</h1> }
            <button className='start'onClick={()=>{ this.props.restartRecieve("restart working=====>") }} >Restart</button>
        </div> 
      </div>
    );
  }
}

export default Result;



 