import React from 'react';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';

import UserViewCss from './UserView.css'
import Navbar from './Navbar'
import Tabs from './Tabs'
import MYGRID from '../screens/MYGRID'
import {orderFoods} from '../config/firebase3'

import * as firebase from 'firebase';
import 'firebase/firestore';


class UserView extends React.Component {
    constructor(){
        super();
        this.state = {
            restaurents:true,myrequest:false,availableRestaurents:[],foodList:[]
        }
        this.changeOption = this.changeOption.bind(this)
        this.orderFood = this.orderFood.bind(this)
    }


    async componentDidMount() {
        firebase.database().ref('Restaurents/').once('value', (data) => {
            const  pureData  = data.val();
                    console.log('data====>',pureData);
                    const temp = []
                    for(var key in pureData){
                        pureData[key].uid = key
                        // console.log(pureData[key]);
                        temp.push(pureData[key])
                        
                    }    
                     this.setState({availableRestaurents:temp})
            })
            console.log('food todos',this.props.todos);
            const foodList = []
            this.props.todos.map((e)=>{
                  console.log(e);
                  for(var key in e){
                       console.log('key===>',key,'and value',e[key]);
                       foodList.push(e[key])
                  }
                })    
                this.setState({foodList})
    }
   changeOption(e){
       console.log(e);
       if( e =='restaurents'){
           this.setState({restaurents:true,myrequest:false})
       }
       if( e =='myrequest'){
           this.setState({restaurents:false,myrequest:true})
       }
   }
   orderFood(e){
       const restUid  = e.target.className;
       const foodImg  = e.target.parentNode.parentNode.childNodes[0].childNodes[0].src;
       const foodName = e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML 
    //    console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0].src);
    //    console.log(e.target.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML);
       const userData = this.props.user
       console.log(userData.uid);
       try{
        orderFoods(restUid,foodImg,foodName,userData);
       } 
       catch{
         console.log('unsuccessfull');
       }
       finally{
        console.log('sucessfull');  
       }
   }

    render() {
         const   { restaurents,myrequest,availableRestaurents,foodList} = this.state;
        return (
         <div>

        {restaurents &&  <div className='userview-box'>

              <div className='search-box'>
              <i  class="fa fa-search" aria-hidden="true"></i>
              <input  placeholder='        Search'/>
              </div>  
           <div className='prnt-product'>
{/* =============================================   RESTAURENT BLOACK ========================================== */}
             <br/><br/><br/>
             <div className='restaurent-block'>
                 <h4>Top Restaurents</h4>
                   <MYGRID Restaurents={availableRestaurents}/>
             </div>
{/* =============================================   FOOD BLOACK ========================================== */}
             <div className='food-block'> 
             <br/>
               <h4>Top Foods</h4>
                {          foodList.map((e)=>{
                                //   console.log('1 loop',e);
                                //    console.log('and value',e.useruid);
                                    return (
                                    <div className='child-product'>
                                      <div className='restaurent-name'>
                                          <img  src={e.img}/>
                                      </div>
                                      <div className='restaurent-items'>
                                        <h3>{e.name}</h3>
                                        <h5>Price : <span>Rs. {e.price} {e.description}</span></h5>
                                        <button
                                        onClick={(e)=>{this.orderFood(e)}}
                                         className={e.useruid} >Order</button>
                                      </div>
                                    </div>
                                   )
                                
                           })
                }

              </div>   
           </div>
          </div>
          }

        {myrequest && <div className='my-request'
           style={{height:'50vh',background:'#f2f2f2'}}>
            <h3 style={{color:'black'}}>
                My Requests
            </h3>
           <br/><br/><br/>
           <div className='requests-box'>
               <div>
                   No Request yet
               </div>
           </div>

         </div>}



           <div className='footer'>
              <Tabs changeOption={this.changeOption}/>
           </div>           

         </div>
        )   
    }
}

const mapStateToProps = state => {
    // console.log(state.todos);
    return {
        todos: state.todos,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    console.log('we====>');
    return {
        update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);

