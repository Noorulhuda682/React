import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';
import SignUpCss from './SignUp.css'

class Login extends React.Component {
    state = {
        todos: []
    }

    async componentDidMount() {
        this.props.update_todos();

        if(this.props.user && this.props.user.name) {
            // this.props.afterLogin()
        }
    }

    login() {
        //firebase api
        
        const user = { 
            name: 'kashif', 
            age: 40, 
            profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        }

        console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        this.props.afterLogin();
    }

    render() {
        const { todos } = this.props;

        return (
            <div className="parent-box">
                <br/><br/><br/>
                <p style={{fontFamily:'sans-serif'}}>Welcome</p>
                <h2>Sign In</h2>
              
               <div className="white-box">
                   <div className='signup-childs'>
                      <strong>Email</strong><br/><br/>
                      <input placeholder='Enter email'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/><br/>
                      <input placeholder='Enter password'/>
                   </div>

                   <div className='signup-childs btn-box'>
                      <span className='signup-btn'>Sign In</span>
                   </div>

                   <br/><br/>

                   <div className='signup-textline'>
                       Don't have an account ? <span>Sign In</span>
                   </div>

                   <br/><br/><br/><br/>
               </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user)),
        update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
