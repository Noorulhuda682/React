import React from 'react';
import StartPage from './StartPage.css'

class StartPag extends React.Component {
    
    render() {

        return (
            <div className="prnt-box">
                <br/><br/><br/><br/><br/>
                <p className='logo-welcome'>Welcome to</p>

                <h2 className='logo-name'>food finder</h2>
              

                <div className='img-parent'>
                 <img src='https://www.picfoods.com/contowh/uploads/2019/02/lenka_tuan_fotky-2917-1265x844.jpg'/>
                </div>
                <br/><br/>
               <div className="main-box">
                   <div>
                       <button onClick={()=>this.props.history.push('/Login')}>LogIn</button>
                   </div>
                   <br/>
                   <div>
                       <button onClick={()=>this.props.history.push('/SignUp')}>Register</button>
                   </div>
               </div>

            </div>
        )
    }
}

export default StartPag;
