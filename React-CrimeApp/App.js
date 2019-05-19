import React,{Component} from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import List from './component/List';
import Crimes from './screens/Crimes'

class App extends Component {
  constructor(){
    super();
    this.state = {
      option1 : true,option2 : false, option3 : false,
      color1:'dodgerblue',borderColor1 : 'dodgerblue',
      color2:'gray',borderColor2 : 'white',
      color3:'gray',borderColor3 : 'white'
    }
  }

changeOption(e){
  // console.log(e.target.innerHTML);
  // console.log(e.target.className);
  
  if(e.target.className === 'option1'){ 
    
    this.setState({color1:'dodgerblue',borderColor1 : 'dodgerblue',
                    color2:'gray',borderColor2 : 'white',
                    color3:'gray',borderColor3 : 'white' }) 
  }
  if(e.target.className === 'option2'){ 
    this.setState({ color2:'dodgerblue',borderColor2 : 'dodgerblue',
                    color1:'gray',borderColor1 : 'white',
                    color3:'gray',borderColor3 : 'white' }) 
  }
  if(e.target.className === 'option3'){ 
    this.setState({ color3:'dodgerblue',borderColor3: 'dodgerblue',
                    color2:'gray',borderColor2 : 'white',
                    color1:'gray',borderColor1 : 'white' }) 
  }  

}

  render(){
    // const {option1,option2,option3,color1,borderColor1,color2,borderColor2,color3,borderColor3} = this.state
  return (
    <div className="App">
    <Crimes/>

      {/* <header className="App-header">
         
           <div className='option1' 
             style={{color : color1,borderColor : borderColor1 }}
           onClick={(e)=>this.changeOption(e)}
           >Dashboar</div>

           <div className='option2' 
           style={{color : color2,borderColor : borderColor2 }}
           onClick={(e)=>this.changeOption(e)}
           >Forces</div>

           <div className='option3' 
           style={{color : color3,borderColor : borderColor3 }}
           onClick={(e)=>this.changeOption(e)}
           >CrimeCatagories</div>
           

      </header> */}

      

      
       {/* <List/> */}
       {/* <Dashboard /> */}
      {/* <Forces />
      <Crimecatagoreis />
      */}
    </div>
  );
 }
}

export default App;
