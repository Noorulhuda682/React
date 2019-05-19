import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Kid from './Component/Kid'
import Teacher from './Component/Teacher'
import Judge from './Component/Judge'


class App extends Component {
  constructor(){
    super();
    this.state = {
      volume : 0
    }
    console.log(this.state.volume);
  this.updateSteps = this.updateSteps.bind(this)
  this.updateEmotion = this.updateEmotion.bind(this)
  this.qualifiedRecFunc = this.qualifiedRecFunc.bind(this)
  }
  static getDerivedStateFromProps(){
    return{
      volume : 5
    }
  }

updateSteps(steps){
//  console.log('updatedteps==============>',steps);
 this.setState({
   furtherSteps : steps
 })
}

updateEmotion(emotion){
  console.log('updatEmotion==============>',emotion);
 this.setState({
   applauded : emotion
 })
}

qualifiedRecFunc(){
  this.setState({
    qualified : true
  })
}


leaveKid(){
 this.setState({leaveKid : false})
}

  render() {
    const {volume,furtherSteps,qualified,leaveKid} = this.state;
    console.log(volume);
    // console.log(furtherSteps);

    return (
      <div className="App">
        <header className="App-header">
    {leaveKid && <Kid dressColor='yellow' furtherSteps={furtherSteps}   applauded={this.state.applauded} qualified={qualified}/> }
      { qualified && <button onClick={this.leaveKid.bind(this)}>Leave Kid</button> }

<hr  style={{width:'700px'}}/>
      <Teacher updateSteps={this.updateSteps}/>

    {leaveKid && <Judge   updateEmotion={this.updateEmotion} qualifiedRecFunc={this.qualifiedRecFunc}/> }
        </header>
        
      </div>
    );
  }
}

export default App;

