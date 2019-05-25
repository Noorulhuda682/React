import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';

class Login extends React.Component {
   constructor(){
       super();
       this.state = {
           name : '',email : '',checkboxValue : false
       }
   }
    componentDidMount() {
        if(this.props.user && this.props.user.name && this.props.user.checkboxValue ) {
            this.props.afterLogin();
        }
    
    }

    login() {
        //firebase api
        
        const user = { 
            name: this.state.name, 
            email: this.state.email, 
            checkboxValue : this.state.checkboxValue,
            profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        }

        console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        this.props.afterLogin();
    }

    changeCheck(){
        
        this.setState({checkboxValue : !this.state.checkboxValue})
        console.log('checkboxValue===>',this.state.checkboxValue,this.state.name,this.state.email);
        
    }

    render() {
        return (
            <div>
               <h1>Log In</h1>

                <input placeholder="Name" value={this.state.name} onChange={(e)=>{this.setState({name : e.target.value })}} /><br/>
                <input placeholder="Email" value={this.state.email} onChange={(e)=>{this.setState({email : e.target.value })}} /><br/>

                <input className='ch-Box' type='checkbox' onClick={this.changeCheck.bind(this)} />
                <span className='ch-Box-text'> Remember Me....... </span>

                <button onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
