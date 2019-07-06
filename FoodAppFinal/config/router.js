import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'


import DetailScreen from '../components/DetailScreen'
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import StartPag from '../screens/StartPage';
import Loader from '../components/Loader';
import UserView from '../components/UserView';
import Navbar from '../components/Navbar';
import RadioOptions from '../components/RadioOptions';
import Restaurent from '../components/Restaurent';
import RestaurentSU from '../screens/RestaurentSU';
// import MyReq from '../components/MyReq';




function Navigations() {
    return (
        //this.props.history.push('/dashboard')
        <Router>
            {/* optional */}
            {/* <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul> */}
            {/* optional */}

            
            <div>
                {/* <Route exact path="/"   component={StartPag} /> */}
                {/* <Route path="/SignUp"   component={SignUp}   /> */}
                {/* <Route path="/Login"    component={Login}    />
                <Route path="/UserView" component={UserView} />
                <Route path="/RestaurentSU" component={RestaurentSU} />
                <Route path="/RadioOptions" component={RadioOptions} />
                <Route path="/Loader" component={Loader} />
                <Route path="/Restaurent" component={Restaurent} />
                <Route path="/MyReq" component={MyReq} /> */}
 
                {/*
                <Route exact path="/profile" component={Profile} />
                <Route path="/profile/:username" component={IndividualProfile} />
                this.props.match.params.username */}
            </div>
        </Router>
    );
}

export default Navigations