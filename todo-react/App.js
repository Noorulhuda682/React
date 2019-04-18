
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
   toggle : false,
   text : "",
   list : [],
   Searchtext : "",
   searchArray : [],
   toggleText : "HELLO WORLD",email : "noor@gmail.com",password : "noor12",user : false,form : false
  }
  toggle(){
    this.state.toggle === false ? this.setState({ toggle : true }) : this.setState({  toggle : false })
  }
  
  changeText(){
    this.state.toggle === false ? this.setState({ toggle : true }) : this.setState({  toggle : false })
 
    if(this.state.toggle == false) {
     this.setState({
      toggleText : "HELLO WORLD"
     })
   }
   else{
    this.setState({
      toggleText : "HELLO PAKISTAN"
     })
   }
  }

  Add(e){
    // console.log(this.state.text);
    if(this.state.text != "" ){
      this.state.list.push(this.state.text);
    }
    console.log(this.state.list)
    this.setState({
      list : this.state.list,
      text : '',
    }) 
  }

  Delete(index){
     console.log(index);
     let list = this.state.list;
     list.splice(index,1)
     this.setState({
      list : list,  
     })
  }
  Edite(e,index){
    console.log(e +"======>"+index)
    var upDated = prompt("Enter to Update here",e);
    let list = this.state.list
    list[index] = upDated;
    this.setState({
      list : list,  
     })
  }



Search(){
  console.log(this.state.Searchtext)
  var searchText = this.state.Searchtext;
  var list = this.state.list;
  var s = list.filter(e =>{
    if(searchText == e){
      return e.indexOf(searchText) !== -1
    }
  }) 
  console.log(s)
  this.setState({
    searchArray : s
  })
}
serchDelete(){
  this.setState({
    searchArray : []
  })
}
searchEdite(){
  var uptext = prompt('Enter to edit')
  var searchArray = this.state.searchArray
  searchArray[0] = uptext
  this.setState({
    searchArray
  })
}

// ==========================================  Assinment4  =========================================
logIn(){
  return(
    <div>
      <h2>LOG IN PAGE</h2>
      <br/>
      <input value={this.state.email} onChange={e=>{this.setState({ email : e.target.value })}} placeholder="Eneter email here"/><br/><br/>
      <input value={this.state.password} onChange={e=>{this.setState({ password : e.target.value })}} placeholder="Eneter password here"/><br/><br/>
      <button onClick={e =>{ this.setState({
        user : true
      }) }}> LogIn
      </button>
    </div>
  )
}

employee(){
  return(
    <div>
      <h1>
        Employee Page
      </h1><br/><br/>
      <button onClick={()=>{this.setState({ form : true }) }}>
        Add Form
      </button>
  
    </div>
  )
}

employeeForm(){
  return(
    <div>
      <h1>
        Employee Form
      </h1>
      <button onClick={()=>{this.setState({ user : false,form : false }) }}>
        logOut
      </button><br/><br/><br/>
      <input placeholder="Enter your name" />
      <button onClick={()=>{this.setState({ form : false }) }}>
        Add 
      </button>
    </div>
  )
}


  render() {
    const {user,form} = this.state
    return (
      <div className="App">
      <div>
        <h1>My Todo List</h1>
      </div>
        
        {/* <button onClick={()=>{ this.toggle()}}>ON/OFF</button>
       {!this.state.toggle ? <img style={{height: "200px"}} src={"https://tse1.mm.bing.net/th?id=OIP.E0jSIrVy0lS6LIULac0rngHaKj&pid=Api&P=0&w=300&h=300"} />
       :
        <img style={{height: "190px"}} src={"https://tse3.mm.bing.net/th?id=OIP.ArFIDBnNFp2NeARkI6tIhgHaKP&pid=Api&P=0&w=300&h=300"} />}<br/><br/><br/>
  */}
{/* ==================================================================================  TODO---APP  ================================================================================== */}
       
       <input className="Add" value={this.state.text} placeholder={"Enter your name"} onChange={(e)=>{  this.setState({ text : e.target.value })  } }  />
       <button className="Add-Btn" onClick={()=>{ this.Add()}}><i class="fa fa-plus-square" aria-hidden="true"></i> Add</button>
        <br/><br/>
        {/* =========================Search Field */}
     {!!this.state.list.length && <div>
        <input className="Search" value={this.state.Searchtext} placeholder="Search item here" onChange={(e)=>  this.setState({ Searchtext : e.target.value }) } />
        <button className="Search-Btn" onClick={()=> this.Search()}> <i style={{fontSize: "15px"}} class="fa fa-search-plus" ></i>Search</button> 
        </div>
        }
        {this.state.searchArray.map(e=>{
          return(
            <div className="list" style={{background:"rgb(197, 137, 9)"}} >
            {e} <button  onClick={() => { this.serchDelete()}}    className="delete" ><i class="fa fa-ban" aria-hidden="true"></i></button>
                <button  onClick={() => { this.searchEdite()} }    className="edit" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
            </div>
          )
        })}
       <div>
         {this.state.list.map((e,index)=>{
           return(
            <div className="list" >
                 {e} <button id={index} onClick={() => { this.Delete(index)}}    className="delete" ><i class="fa fa-ban" aria-hidden="true"></i></button>
                     <button id={index} onClick={() => { this.Edite(e,index)} }    className="edit" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
            </div>
          )
        })}
       </div>
       <br/>
       <br/>
       <br/>
        <button className="chTextBtn" onClick={()=>{ this.changeText()}}>{this.state.toggleText}</button>

       <div>
         <br/>
       <form>
  <fieldset>
          <legend><h2>Question2</h2></legend>
          {!user && this.logIn() }
          {user && !form && this.employee() }
          {user && form && this.employeeForm()}
    asdasd
  </fieldset>
</form>

       </div>

      </div>
    );
  }
}

export default App;










