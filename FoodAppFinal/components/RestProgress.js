import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {DeliveredFunc} from '../config/firebase3'
class RestProgress extends React.Component {
   constructor(){
      super();
      this.state = {
         pendingRecieving:[]
      }
   }

   async componentDidMount() {
      const restUid = this.props.user.uid
      console.log(this.props.user.name);
        firebase.database().ref('REQUESTED/' + restUid).child('Progress/').once('value', (data) => {
          const  pureData  = data.val();
          const temp = []
          console.log('data====>',pureData);
                  for(var key in pureData){
                      console.log(pureData[key]);
                      for(var key1 in pureData[key]){
                        console.log(key1);
                        console.log(pureData[key][key1]);
                        temp.push(pureData[key][key1])
                      }
                      this.setState({pendingRecieving:temp})
                  }    
          })
  }

  Delivered(e){
   const userId = e.target.parentNode.parentNode.id;
   const foodName = e.target.className;
   const restUid = this.props.user.uid;
   console.log('userId',userId,foodName,restUid);
   DeliveredFunc(restUid,foodName,userId)
   }
    render() {
       const {pendingRecieving} = this.state;

       return (
        <div>
            
{/* =======================================================    REQUEST PAGE  ================================================================= */}     
            <div className='restaurent'>
               <h1 style={{color:'rgb(156, 13, 120)'}}>ProgressView</h1>
{/* ============================    TABS  ===================================== */}
             
{/* ============================    ALL REQUESTS  ===================================== */}
               <h4 style={{textAlign:'center'}}>Requests In Progress</h4>
               <div className='requests'>
               { pendingRecieving.map((e)=>{
                      console.log(e.userRequested.uid);
                      return(<div className='requests-childs' id={e.userRequested.uid}>
                              <img className='img1' src={e.foodItemRequested.foodImg}/>
                              <strong>{e.foodItemRequested.foodName}</strong>
                              <div className='reqSet'>
                                <span>Requested by</span>
                                <img className='img2' src={e.userRequested.img}/>
                                <i>{e.userRequested.name}</i>
                                <button className={e.foodItemRequested.foodName} 
                                 onClick={(e)=>{this.Delivered(e)}} >Delivered</button>
                              </div>  
                            </div>
                            )
                  })}

               </div>
            </div>

        </div>
      
        )
    }
}

export default RestProgress;
