import React from 'react';
import UserView from './UserView.css'
import Navbar from './Navbar'
import Tabs from './Tabs'

class Loading extends React.Component {
    
    render() {

        return (
         <div>

          <div className='userview-box'>
          <div >
          <Navbar/>  
          </div>
          <span onClick={()=>this.props.history.push('/Login')}>LogOut</span>
          <br/><br/>
               <h1 className='eating-title'>
                   What do want to eat today?
               </h1>
               <br/>
              <div className='search-box'>
              <i  class="fa fa-search" aria-hidden="true"></i>
              <input  placeholder='        Search'/>
              </div>  
           <div className='prnt-product'>
                 <div className='child-product'>
                     <div className='restaurent-name'>
                         <strong>
                         Chinese Restaurent
                         </strong>
                     </div>
                     <div className='restaurent-items'>
                         <span>asasdasd</span>
                     </div>
                 </div>
                 <div className='child-product'>
                     <div className='restaurent-name'>
                         <strong>
                         BBQ Restaurent
                         </strong>
                     </div>
                     <div className='restaurent-items'>
                         <span>asasdasd</span>
                     </div>
                 </div>
                 <div className='child-product'>
                     <div className='restaurent-name'>
                         <strong>
                         Chinese Restaurent
                         </strong>
                     </div>
                     <div className='restaurent-items'>
                         <span>asasdasd</span>
                     </div>
                 </div>
                 
           </div>






           <div className='footer'>
              <Tabs/>
           </div>           

          </div>

         </div>
        )   
    }
}

export default Loading;
