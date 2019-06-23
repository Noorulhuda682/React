import React,{Component} from 'react';
import './Navbar.css';

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
    <div>
      <nav>
         <h1 className='toggler'>
             <span  className='icon' onClick={this.toggle.bind(this)}>
                 <i class="fa fa-bars" aria-hidden="true"></i> </span>
             <strong className='logo'>foodfinder</strong>
         </h1>
         <span className='brand'>
        </span>
        {!this.state.navState && <ul className='nav1'>
             <li><a className='list-item'>CONTACT</a></li>
             <li><a className='list-item'>MENU</a></li>
             <li><a className='list-item'>LIST</a></li>
             <li><a>PRODUCT</a></li>
         </ul>}
         {this.state.navState && <ul style={{border:'2px solid white'}}>
             <li><a className='list-item'>CONTACT</a></li>
             <li><a className='list-item'>MENU</a></li>
             <li><a className='list-item'>LIST</a></li>
             <li><a>PRODUCT</a></li>
         </ul>}
      </nav>

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
  );
}
}

export default Navbar;
