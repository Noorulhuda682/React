import React from 'react';
import DetailScreens from './DetailScreen.css'

class DetailScreen extends React.Component {
    
    render() {

        return (
         <div className='detaile-page'>
 
            <div className='prnt-restaurent-img'>
               <img className='restaurent-img'
                src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'/>
            </div>



             <div className='detail-box'>
                 <h3>Grand Royal Hotel</h3>
                 <p className='contact'><span>Contact</span></p>
             </div> 


             

         </div>
        )   
    }
}

export default DetailScreen;
