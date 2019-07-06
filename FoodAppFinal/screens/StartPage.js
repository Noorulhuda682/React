import React from 'react';
import StartPage from './StartPage.css'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar';


class StartPag extends React.Component {
    state = {
        seconds:0,
        startpage:false
    }




    componentDidMount(){
        setInterval(()=>{
          // console.log(   'coorectoption====>',  this.state.m)
          this.setState({
            seconds : this.state.seconds + 1,
            })
            if(this.state.seconds === 3){
                    this.setState({
                        seconds : 0,
                        startpage: true
                      })
            }
        },1000)
    }





    render() {
        return (
            <div>
            {!this.state.startpage &&<Loader/>} 
        {/* {this.state.startpage && <Navbar/>}    */}
            {this.state.startpage && <div className="prnt-box">
                <br/><br/><br/>
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
                       <button onClick={()=>this.props.history.push('/RadioOptions')}>Register</button>
                   </div>
               </div>
            </div>
        }

        </div>
        )
    }
}

export default StartPag;
