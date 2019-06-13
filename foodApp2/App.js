import React from 'react';
import logo from './logo.svg';
import './App.css';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import StartPag from './screens/StartPage';


class App extends React.Component {
  state = {
    showProfile: false
  }

  afterLogin() {
    this.setState({ showProfile: true });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <StartPag/>
             {/* <SignUp/> */}
             {/* <Login/> */}
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
