import React from 'react';
import { connect } from 'react-redux';
import  {AddFood} from '../config/firebase2'
import  {progressFunc} from '../config/firebase3'

import RestaurentCss from './Restaurent.css'
import Loader from './Loader'
import Navbar from './Navbar';
import RestProgress from './RestProgress'
import RestDelivered from './RestDelivered'
import * as firebase from 'firebase';
import 'firebase/firestore';

class Restaurent extends React.Component {
    constructor(){
        super();
        this.state = {
          option1 : true,option2 : false, option3 : false,
          color1:'rgb(202, 11, 177)',borderColor1 : 'rgb(202, 11, 177)',1:'rgb(202, 11, 177)' ,
          color2:'gray',borderColor2 : 'white',2:'gray',color3:'gray',borderColor3 : 'white',3:'gray',
          pending:true,progress:false,delivered:false,
          foodUpload:false,user:'',pendingRecieving:[]
        }
      }

      async componentDidMount() {
        const restUid = this.props.user.uid
        // firebase.database().ref('REQUESTED/').once('value', (data) => {
          firebase.database().ref('REQUESTED/' + restUid).child('Pending/').once('value', (data) => {
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
      progress(e){
      const userId = e.target.parentNode.parentNode.id;
      const foodName = e.target.className;
      const restUid = this.props.user.uid;
      progressFunc(restUid,foodName,userId)
      }

      AddFoods(){ 
        try{
           AddFood(this.props.user);
        }
        catch{
          this.setState({foodUpload:true})
        }
        finally{
          this.setState({foodUpload:false})
        }

       }

     changeOption(e){
console.log(e.target.innerHTML);

        if(e.target.innerHTML ===  'Pending'){ 
          this.setState({color1:'rgb(202, 11, 177)' ,borderColor1 : 'rgb(202, 11, 177)',iconColor1:'rgb(202, 11, 177)',
                          color2:'gray',borderColor2 : 'white',iconColor2:'gray',
                          color3:'gray',borderColor3 : 'white',iconColor3:'gray',pending:true,progress:false,delivered:false
          }) 
        }
        if(e.target.innerHTML ===  'Progress'){ 
          this.setState({ color2:'rgb(202, 11, 177)',borderColor2 : 'rgb(202, 11, 177)',iconColor2:'rgb(202, 11, 177)',
                          color1:'gray',borderColor1 : 'white',iconColor1:'gray',
                          color3:'gray',borderColor3 : 'white',iconColor3:'gray',pending:false,progress:true,delivered:false
          }) 
        }
        if(e.target.innerHTML === 'Delivered'){ 
          this.setState({ color3:'rgb(202, 11, 177)',borderColor3 : 'rgb(202, 11, 177)',iconColor3:'rgb(202, 11, 177)',
                          color1:'gray',borderColor1 : 'white',iconColor1:'gray',
                          color2:'gray',borderColor2 : 'white',iconColor2:'gray',pending:false,progress:false,delivered:true
                          
          }) 
        }
      }


    render() {
        const {color1,borderColor1,color2,borderColor2,color3,borderColor3,iconColor1,iconColor2,pendingRecieving} = this.state;
        const {user} = this.props
        // console.log('pendingRecieving====>',pendingRecieving);
      
        
        console.log('userlogin',user);
        return (
        <div>
{/* ==================================  ADD PRODUCT =======================================  */}
 {this.state.foodUpload && <div className='apload-form' >
           <div className='apload-form-child'>
             <span style={{color:'black',position:'relative',marginRight:'310px',top:'10px'}}>
               <i  onClick={()=>{this.setState({foodUpload : false })}} class="fa fa-times"style={{color:'black'}} aria-hidden="true"></i>
              </span>
             <div className="white-box">
               <h3 style={{color:'magenta',position:'relative',marginTop:'-5px'}}>food uploading</h3>
               <br/>
                   <div className='signup-childs'>
                      <strong>Food Name</strong><br/>
                      <input id='name' placeholder='Enter Food Item name'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Category</strong><br/>
                      <input id="category" placeholder='Enter Food Category'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Price</strong><br/>
                      <input id="price" type="text" placeholder='Enter Price'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Food Picture</strong><br/>
                      <input type="file" id="img" />
                   </div>
                   <div className='signup-childs'>
                      <strong>Dsicription</strong><br/>
                      <input id="discription" type="text" placeholder='Enter Dsicription'/>
                   </div>
                  
                   <div className='signup-childs btn-box' onClick={this.AddFoods.bind(this)}>
                      <span className='signup-btn' style={{fontFamily:'arial'}} >+ADD TO MYLIST</span>
                   </div>
              </div>
            </div>
   </div>}
           
   <br/><br/><br/>
          <div className='add-food' onClick={()=>{this.setState({foodUpload : true })}}>
          <button>+Add Food</button>
          </div>
          <br/>

{/* ================================== RESTAURENT TABS ================================================ */}
              <div className='flex'>
                   <div className='flex-child' value="option1"
                   style={{color : color1,borderColor : borderColor1 }}
                   onClick={(e)=>this.changeOption(e)}
                   >Pending</div>
                   <div className='flex-child' value="option2"
                   style={{color : color2,borderColor : borderColor2 }}
                   onClick={(e)=>this.changeOption(e)}
                   >Progress</div>
                   <div className='flex-child' value="option3"
                   style={{color : color3,borderColor : borderColor3 }}
                   onClick={(e)=>this.changeOption(e)}
                   >Delivered</div>
               </div>
               <br/><br/><br/>
               
        {this.state.progress && <RestProgress user={user}/> }
        {this.state.delivered  &&  <RestDelivered user={user}/>}
{/* =======================================================    REQUEST PAGE  ================================================================= */}     
         {this.state.pending &&    <div className='restaurent'>
               <h1 style={{color:'rgb(156, 13, 120)'}}>RestaurentView</h1>
{/* ============================    TABS  ===================================== */}
             
{/* ============================    ALL REQUESTS  ===================================== */}
              <h4 style={{textAlign:'center'}}>Requests In Pending</h4>
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
                                <button className={e.foodItemRequested.foodName}  onClick={(e)=>{this.progress(e)}} >Progress</button>
                              </div>  
                            </div>
                            )
                  })}
                  {/* <div className='requests-childs'>
                    <img className='img1'  src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                     <strong>Vegtarian Role</strong>
                     <strong>Requested By</strong>
                  </div>
                  <div className='requests-childs'>
                    <img className='img1' src='https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                     <strong>+Noor khan</strong>
                  </div>
                  <div className='requests-childs'>
                    <img className='img1' src='https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY='/>
                     <strong>+Noor khan</strong>
                  </div>
                  <div className='requests-childs'>
                    <img className='img1' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                     <strong>Vegetarian Burger</strong>
                  </div> */}
               </div>
            </div>
        }

        </div>
      
        )
    }
}
const mapStateToProps = state => {
  console.log('we====>');
  return {
      user: state.user,
  }
}

export default connect(mapStateToProps)(Restaurent);
