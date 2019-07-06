import React,{Component} from 'react';
import './Navbar.css';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'


// import DetailScreen from './components/DetailScreen'
import Login from '../screens/Login';
// import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import StartPag from '../screens/StartPage';
// import Loader from '../components/Loader';
import UserView from '../components/UserView';
// import Navbar from '../components/Navbar';
import RadioOptions from '../components/RadioOptions';
import Restaurent from '../components/Restaurent';
import RestaurentSU from '../screens/RestaurentSU';
// import MyReq from '../components/MyReq';




class Navbar extends Component{

constructor(){
    super();
    this.state = {
        navState : false
    }
}

    toggle(){
        if(this.state.navState === false){
            this.setState({navState : true})
        }
        else{
            this.setState({navState : false})
        }
    }
  render(){
  return (
    <Router>
    <div>
      <nav>
         <h1 className='toggler'>
             <span  className='icon' onClick={this.toggle.bind(this)}>
             <i class="fa fa-bars" aria-hidden="true"></i> </span>
             <strong className='logo'><i class="fa fa-cutlery" style={{marginRight:'5px',color:'rgb(11, 213, 240)'}}  aria-hidden="true"></i>foodfinder</strong>
         </h1>
         <span className='brand'>
        </span>
        {!this.state.navState &&
             <ul className='nav1'>
             <strong className='logo-full'><i class="fa fa-cutlery"   aria-hidden="true"></i>foodfinder</strong>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/">STARTPAGE</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/SignUp">SIGNUP</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/RestaurentSU">RESTAURENTSIGNUP</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/Login">LOGOUT</Link></a></li>
         </ul>}
         {this.state.navState && <ul>
             <li className='profile' >
                 {/* <h3><img src='https://images.pexels.com/photos/2355519/pexels-photo-2355519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/></h3>
                 <div>Noor ul huda</div>  */}
              <strong className='logo' style={{color:'rgb(194, 10, 148'}}>
                 <i class="fa fa-cutlery" style={{marginRight:'5px',color:'rgb(11, 213, 240)'}} 
                  aria-hidden="true"></i>foodfinder
              </strong>
             </li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/" >STARTPAGE</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/SignUp">SIGNUP</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/RestaurentSU">RESTAURENTSIGNUP</Link></a></li>
             <li><a className='list-item' ><Link style={{textDecoration:'none'}} to="/Login">LOGOUT</Link></a></li>
         </ul>}
      </nav>

                <Route exact path="/"   component={StartPag} />
                <Route path="/SignUp"   component={SignUp}   />
                <Route path="/Login"    component={Login}    />
                <Route path="/RadioOptions"    component={RadioOptions}    />
                <Route path="/UserView" component={UserView} />
                <Route path="/Restaurent" component={Restaurent} />
                <Route path="/RestaurentSU" component={RestaurentSU} />
            
                  {/* <div className='back-overlay2'></div>
       <div className='back-overlay'>
          <div className='discr-header' >
            <h2 className='overlay-header'>Hello, I am Noor</h2>
            <br/>
            <p style={{fontFamily:'helvetica'}}>working as a web designer in the saylani mass training program with one year experiance</p>
            <br/><br/>
            <h3>Get service of greate web applications</h3>
            <br/>
            <button className='overlay-button'>learn more</button>
          </div>
        </div>*/}

      </div> 
      </Router>
  );
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
        // update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
