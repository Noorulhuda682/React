import React from 'react';
import { connect } from 'react-redux';
import SignUpCss from './SignUp.css'
import {Register} from '../config/firebase'
export default class SignUp extends React.Component {

    SignUp(){
        console.log('working');
        Register()
        // this.props.history.push('/UserView')
    }
    
    render() {
        return (
            <div className="parent-box">
                <br/><br/>
                <p style={{fontFamily:'sans-serif'}}>Welcome</p>
                <br/>
                <h2 className='SignUp'>SignUp</h2>
              
               <div className="white-box">
                   <div className='signup-childs'>
                      <strong>Name</strong><br/>
                      <input id='name' placeholder='Enter name'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Email</strong><br/>
                      <input id="email" placeholder='Enter email'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/>
                      <input id="password" type="password" placeholder='Enter password'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Country</strong><br/>
                      <input id="country" type="text" placeholder='Enter Country'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>City</strong><br/>
                      <input id="city" type="text" placeholder='Enter City'/>
                   </div>
                  
                   <div className='signup-childs'>
                      <strong>Picture</strong><br/>
                      <input type="file" id="img"  />
                   </div>

                   <div className='signup-childs btn-box' onClick={()=> this.SignUp(this)}> 
                      <span className='signup-btn'  >SignUp</span>
                   </div>

                   <br/><br/>

                   <br/><br/><br/><br/>
               </div>

            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps, null)(Profile);
