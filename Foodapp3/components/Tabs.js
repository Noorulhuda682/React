import React from 'react';
import TabsStyle from './Tabs.css'
class Tabs extends React.Component {
    
    
        constructor(){
            super();
            this.state = {
              option1 : true,option2 : false, option3 : false,
              color1:'rgb(202, 11, 177)',borderColor1 : 'dodgerblue',iconColor1:'rgb(202, 11, 177)' ,
              color2:'gray',borderColor2 : 'white',iconColor2:'gray'
            }
          }
        
        changeOption(e){
          // console.log(e.target.innerHTML);
          // console.log(e.target.className);
          console.log('asd',e.target.className )
          if(e.target.className === 'option1' || e.target.className  === 'fa fa-cutlery' ){ 
            
            this.setState({color1:'rgb(202, 11, 177)' ,borderColor1 : 'rgb(202, 11, 177)',iconColor1:'rgb(202, 11, 177)',
                            color2:'gray',borderColor2 : 'white',iconColor2:'gray'
            }) 
          }
          if(e.target.className === 'option2' || e.target.className  === 'fa fa-user-o'){ 
            this.setState({ color2:'rgb(202, 11, 177)',borderColor2 : 'rgb(202, 11, 177)',iconColor2:'rgb(202, 11, 177)',
                            color1:'gray',borderColor1 : 'white',iconColor1:'gray'
            }) 
          }
        }



 render(){
    const {color1,borderColor1,color2,borderColor2,iconColor1,iconColor2} = this.state;
        return (
         <div className='footer-child' >
         <header className="App-headers">
         
         <div className='option1' 
           style={{color : color1,borderColor : borderColor1 }}
         onClick={(e)=>this.changeOption(e)}
         >
    <span className='reastaurent-icon' ><i class="fa fa-cutlery" style={{color:iconColor1}} aria-hidden="true"></i></span>

         Restaurents</div>

         <div className='option2' 
         style={{color : color2,borderColor : borderColor2 }}
         onClick={(e)=>this.changeOption(e)}
         > 
        <span className='user-icon'style={{color:'gray'}}> <i class="fa fa-user-o"  style={{color:iconColor2}} aria-hidden="true"></i></span>
         My Requests</div>
 

         </header>

         </div>
        )   
    }
}

export default Tabs;
