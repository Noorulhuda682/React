import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';
import SignUpCss from './SignUp.css'
// import {signIn} from '../config/firebase3'
import * as firebase from 'firebase';
import 'firebase/firestore';


class Login extends React.Component {
    state = {
        todos: [],user:''
    }

    async componentDidMount() {
        console.log('i am after ====>');
        this.props.update_todos();
        // if(this.props.user && this.props.user.name) {
        //     this.props.afterLogin()
        // }
    }
     signIn() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                // localStorage.setItem("userAuth", JSON.stringify(success))
                this.props.history.push('/Loader')
                firebase.database().ref('Users/')
                    .once('value', (data) => {
                        let forArr = data.val();
                        for (var key in forArr) {
                            // if (key == success.user.uid) {
                            //     document.getElementById('profName').innerHTML = forArr[key].name;
                            //     document.getElementById('profImg').src = forArr[key].img;
                            // }
                            // console.log(key);
                            // console.log(forArr[key].name);
                            if(email === forArr[key].email && password === forArr[key].password ){
                                forArr[key].uid = key
                                this.state.user = forArr[key];
                                this.login(this.state.user);
                                this.props.history.push('/UserView')
                            }
                            // else{
                            //     this.props.history.push('/')
                            // }
                        }
                    })
            })
            .catch(function (error) {
                var Message = error.message;
                console.log(Message);
            });

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                // localStorage.setItem("userAuth", JSON.stringify(success))
                this.props.history.push('/Loader')
                firebase.database().ref('Restaurents/')
                    .once('value', (data) => {
                        let forArr = data.val();
                        for (var key in forArr) {
                            // if (key == success.user.uid) {
                            //     document.getElementById('profName').innerHTML = forArr[key].name;
                            //     document.getElementById('profImg').src = forArr[key].img;
                            // }
                            console.log(key);
                            console.log(forArr[key].name);
                            if(email === forArr[key].email && password === forArr[key].password ){
                                forArr[key].uid = key
                                this.state.user = forArr[key];
                                this.login(this.state.user);
                                this.props.history.push('/Restaurent')
                            }
                            else{
                                // this.props.history.push('/')
                            }
                        }
                    })
            })
            .catch(function (error) {
                var Message = error.message;
                console.log(Message);
                // this.props.history.push('/')
            });
    }
    

    login(user) {
        // var ret = signIn();
        // console.log(ret);
        //firebase ap
        // const user = { 
        //     name: 'kashif', 
        //     age: 40, 
        //     profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        // }

        // console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        // this.props.afterLogin();
    }

    render() {
        const { todos ,user} = this.props;
console.log('userlogin====>',user);

        return (
            <div className="parent-box">
                <br/><br/><br/>
                <p style={{fontFamily:'sans-serif'}}>Welcome</p>
                <br/><br/>
                <h2>Sign In</h2>
                {/* <h2>{user.name}</h2> */}

              
               <div className="white-box">
               <br/><br/><br/><br/><br/><br/><br/>
                   <div className='signup-childs'>
                      <strong>Email</strong><br/><br/>
                      <input id="email" placeholder='Enter email'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/><br/>
                      <input type='password' id="password" placeholder='Enter password'/>
                   </div>
 
                     {/* <div>
                    {todos.map(elem => {
                     return <h1 style={{color:'black'}}>{elem.text}</h1>
                 })}
                    </div>  */}

                   <div className='signup-childs btn-box' onClick={this.signIn.bind(this)}>
                      <span className='signup-btn' >Sign In</span>
                   </div>

                   <br/><br/>

                   <div className='signup-textline'>
                       Don't have an account ?
                    <span onClick={()=>this.props.history.push('/SignUp')}>Sign Up</span>
                   </div>

                   <br/><br/><br/><br/>
               </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('we====>');
    return {
        user: state.user,
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    console.log('we====>');
    
    return {
        store_user: (user) => dispatch(update_user(user)),
        update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
