import React from 'react';
// import { relative } from 'path';

export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false,infStun : false } ;
   this.qualified = this.qualified.bind(this)
 }

static getDerivedStateFromProps(props,state){

    if(state.infStun){
          return{
            startedPerforming : false
          } 
    }

    if( props.furtherSteps.length && state.danceSteps !== 5 ){
      return{ 
          danceSteps : state.danceSteps.concat(props.furtherSteps),
          startedPerforming : true,
      }
   }

   if( props.applauded ) {
         return{
             emotion : 'happy'
         }      
   } 
 console.log('checking=====>',state.startedPerforming)
  //  return true
   
}
  
  componentDidMount(){
    this.setState({
        danceSteps : ['step1','step2'],
    })
}
componentWillUnmount(){

}

 qualified() {
  //  if(this.props.qualified  === this.state.startedPerforming ){
    this.setState({
      startedPerforming : false,
      infStun : true
    })
  //  }
  //  console.log('kid Qualified')

 }

 componentDidUpdate(prevProps,prevState){
       console.log("stunning1",prevProps,'asd=====>',prevProps.qualified)
       console.log("stunning2",'asd=====>',this.props.qualified)
       console.log("stunning3",'asd=====>',this.state.startedPerforming)
      if( this.props.qualified  !== prevProps.qualified && this.state.startedPerforming ){
        this.qualified();
      }
      
     
      
 }



//  ============== RENDER CODE ==================
 render() {
   const {dressColor} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
   return (
   <div>
     <h2>Kids</h2>
     <div>dressColor { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>

    <div>Emotion: { emotion }</div> 

    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
    
 </div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
