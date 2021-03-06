import React from 'react';
import RadioOption from'./RadioOptions.css';
import RadioButton from '@material-ui/core/Radio';

class RadioOptions extends React.Component {
    state = {
      reg_radio:false,radioVal1:false,radioVal2:false
    }
  
  
    changeRadio(e){
  console.log(e.target.value);
  if(e.target.value === 'option1'){ 
      this.setState({radioVal1:true,radioVal2:false})
     }
  if(e.target.value === 'option2'){
       this.setState({radioVal1:false,radioVal2:true}) 
    }
        
    }
  
    render() {
      return (
        
        <div className='prnt-radio-block'>
        <div  className='radio-block'>
             <h4>
               How do you want to be register
             </h4>
             <div>
               Customer       
               
               <RadioButton 
               style={{marginTop:'-2px',marginLeft:'30px'}}
                type='radio'
                 value='option1' 
                  checked={this.state.radioVal1} onClick={(e)=>{this.changeRadio(e)}} />
             </div>
             <div>
                Restaurent 
                <RadioButton 
                style={{marginTop:'-2px',marginLeft:'25px'}}
                 type='radio'
                  value='option2'
                  checked={this.state.radioVal2} onClick={(e)=>{this.changeRadio(e)}}  />
             </div>
          
        </div>

      </div>  

      
      );
    }
  }
  
  export default RadioOptions;
  
       
       
       
       
        