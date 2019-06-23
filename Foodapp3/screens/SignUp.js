import React from 'react';
import { connect } from 'react-redux';
import SignUpCss from './SignUp.css'

export default class SignUp extends React.Component {

    SignUp(){
        console.log('working');
        
        this.props.history.push('/UserView')
    }
    
    render() {
        return (
            <div className="parent-box">
                <br/>
                <p style={{fontFamily:'sans-serif'}}>Welcome</p>
                <br/>
                <h2 className='SignUp'>SignUp</h2>
              
               <div className="white-box">
                   <div className='signup-childs'>
                      <strong>Name</strong><br/><br/>
                      <input placeholder='Enter name'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Email</strong><br/><br/>
                      <input placeholder='Enter email'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/><br/>
                      <input placeholder='Enter password'/>
                   </div>

                   <div className='signup-childs btn-box' onClick={()=> this.SignUp(this)}>
                      <span className='signup-btn'>SignUp</span>
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
