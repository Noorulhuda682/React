import React from 'react';
import StartPage from './StartPage.css'

class StartPag extends React.Component {
    
    render() {

        return (
            <div className="prnt-box">
                <br/><br/><br/><br/><br/>
                <p className='logo-welcome'>Welcome to</p>
                <h2 className='logo-name'>Food Finder</h2>
              

                <div className='img-parent'>
                    <img src='https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                </div>
                <br/><br/>
               <div className="main-box">
                   <div>
                       <button>LogIn</button>
                   </div>
                   <br/>
                   <div>
                       <button>Register</button>
                   </div>
               </div>

            </div>
        )
    }
}

export default StartPag;
