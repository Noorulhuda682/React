import React from 'react';

export default class Judge extends React.Component {
    constructor(props) {
     super(props)
     this.state = {stars: 0, available: false}
     
    }
   
    shouldComponentUpdate(nextProps,nextState){
        console.log('prop======>',nextProps,'and  state =====>',nextState.stars)
        if(  nextState.stars <= 5){
            return true
        }
        else{
            return false
        }
        
      }
      
     
    applaud( ) {
      //Send this applaud status to Kid.js
      const applaud = true 
      this.props.updateEmotion(applaud)

    }

   
    provideStars() {
      const {stars} = this.state;
      if( stars+1 >= 5){
        console.log('wow',stars)
        this.props.qualifiedRecFunc();
      }
        this.setState({stars: stars + 1})
    
    }
   
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <h2>Judge</h2>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>

          <button type="button" onClick={this.provideStars.bind(this)}>
           Provide stars
          </button>
          <br/>

          Kid is available:  {available}

          Stars gained:  {stars}
          <hr style={{width:'700px'}}/>
        </div>
      );
    }
   }
   