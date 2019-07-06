import React from 'react';
import './App.css';
import RadioOptions from './components/RadioOptions';


import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import StartPag from './screens/StartPage';
import Loader from './components/Loader';
import UserView from './components/UserView';
import Navbar from './components/Navbar';
import ChatPage from './components/ChatPage';
import DetailScreen from './components/DetailScreen';
// import MyRequests from './components/MyReq';
import Navigations from './config/router'





class App extends React.Component {
  state = {
    showProfile: false,
  }

  afterLogin() {
    this.setState({ showProfile: true });
  }


  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Navbar/>
    <br/>
          {/* <ChatPage/> */}
          <Navigations />
          {/* <MyRequests /> */}
        {/* <RadioOptions/> */}
            {/* <DetailScreen /> */}
             {/* <UserView/> */}
             {/* <Loader /> */}
             {/* <StartPag/> */}
             {/* <SignUp/> */}
             {/* <Login/> */}
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
