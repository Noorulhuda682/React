import React,{Component} from 'react';
import  MYGRIDCss from  './MYGRID.css';

class MYGRID extends Component{











  

    
    render(){
  return (
    <div className='si-gridlist'>
        {this.props.Restaurents.map(e=>{
            // console.log(e.city);
            // console.log(e.uid);
            return ( <div className='gridlist-childs'>
            <div className='img-block'>a<img src={e.img}/></div>
            <div className='name-block'>{e.name}
            {/* <i class="fa fa-plus-circle" aria-hidden="true"></i> */}
            <i key={e.uid} class="fa fa-calendar-plus-o" aria-hidden="true"></i>
            <span>{e.city},{e.country}</span>
            </div>
            </div>)
        })}
        <div className='gridlist-childs'>
          <div className='img-block'>a<img src='https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/></div>
          <div className='name-block'>MY Restaurent
          {/* <i class="fa fa-plus-circle" aria-hidden="true"></i> */}
          <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
          <span>Karachi,Pakistan</span>
          </div>
        </div>

        <div className='gridlist-childs'>
          <div className='img-block'>a<img src='https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/></div>
          <div className='name-block'>MY Restaurent
          {/* <i class="fa fa-plus-circle" aria-hidden="true"></i> */}
          <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
          <span>Karachi,Pakistan</span>
          </div>
        </div>
        <div className='gridlist-childs'>
          <div className='img-block'>a<img src='https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/></div>
          <div className='name-block'>MY Restaurent
          {/* <i class="fa fa-plus-circle" aria-hidden="true"></i> */}
          <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
          <span>Karachi,Pakistan</span>
          </div>
        </div>
        
    </div>
  );
}
}

export default MYGRID;
