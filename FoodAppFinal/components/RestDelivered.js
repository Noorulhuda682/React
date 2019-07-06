import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

class RestDelivered extends React.Component {
   constructor(){
      super();
      this.state = {
         pendingRecieving:[]
      }
   }

   async componentDidMount() {
      const restUid = this.props.user.uid
      console.log(this.props.user.name);
        firebase.database().ref('REQUESTED/' + restUid).child('Delivered/').once('value', (data) => {
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








    render() {
      const {pendingRecieving} = this.state;
       return (
        <div>
{/* =======================================================    REQUEST PAGE  ================================================================= */}     
            <div className='restaurent'>
               <h1 style={{color:'rgb(156, 13, 120)'}}>DeliveredView</h1>
{/* ============================    TABS  ===================================== */}
             
{/* ============================    ALL REQUESTS  ===================================== */}
               <h4 style={{textAlign:'center'}}>Requests in DeliveredRequests</h4>
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
                                 // onClick={(e)=>{this.Delivered(e)}}
                                 style={{background:'rgb(169, 212, 207)',outline:'none'}}
                                  >Finished</button>
                              </div>  
                            </div>
                            )
                  })}
                  
               {/* <div className='requests-childs'>
                    <img src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                     <strong>Vegtarian Role</strong>
               </div> */}
   
               </div>
            </div>

        </div>
      
        )
    }
}

export default RestDelivered;
