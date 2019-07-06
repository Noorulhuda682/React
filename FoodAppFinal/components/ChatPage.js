import React,{Component} from 'react';
import ChatPageCss from './ChatPage.css'


class ChatPage extends React.Component {
    
    render() {

        return (
          <div >
            
{/* // <!-- CHAT SECTION --> */}
    {/* <section id="chatSectionBlock" style={{display:"none"}} > */}

 
       <div className='text-sending' > 

            <input type="text" className='inp-text' id="message" placeholder="Enter text" />
              {/* <!-- ================ button1 =============================  --> */}
             <button id="chatBtn1" className="btn1">
                <i   onClick="sendMessage()"    class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>  
            {/* <!-- ================ button2 =============================  --> */} 
            {/* <button id="chatBtn2" className="btn2" style="border:none;width:44px;height:34px;border-radius:50%;
              outline: none;background: green;box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.5);
              color:white;cursor:pointer;
              "><i   onClick="recieverSending()"    style="font-size:18px;" class="fa fa-paper-plane" aria-hidden="true"></i>
            </button> */}

            {/* <br><br> */}
       </div>
       {/* </div> */}
        {/* // </section> */}

        </div>
        )   
    }
}

export default ChatPage;
