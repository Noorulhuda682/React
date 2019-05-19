import React,{Component} from 'react'
import crime from '../config/api'
import Forces from '../config/api'
import {searchData} from '../config/api'

export default class Crimes extends Component{
    constructor(){
        super()
        this.state = {
            loading : false,crimeCategory : crime.crime,Forces : Forces.Forces,
            resulted : [],
            searchData : ''
        }
        this.fetch = this.fetch.bind(this)
    }



   getData(e){
       console.log('Accepting ',e.target.innerHTML);
       console.log('selectedCrimeCategories======>',this.state.selectedCrimeCategories);
       console.log('selectedForces=======>',this.state.selectedForces);
       this.setState({resulted : []})
       this.componentDidMount(); 
       
   }
    
    componentDidMount(){
        this.fetch();   
    }

   async fetch(){
      this.setState({loading : true})
    try{
        const result = await searchData()
        console.log("this is what we wanted",result);
        console.log("this is what we wanted",result[0].category);
        console.log("this is what we wanted",result[0].id);
        console.log("this is what we wanted",result[0].outcome_status.date);
         
        const resulted = result.filter((e,i)=>{
            // console.log(e.category)
            console.log(e.category,'===',this.state.selectedCrimeCategories)
        if(  e.category ===  this.state.selectedCrimeCategories.toLowerCase() ){
         return   e.category;
        } 
         if(this.state.selectedCrimeCategories ===  'All crime'){
           console.log('good');
           return   e.category;
         }
        })
    console.log(resulted);
        this.setState({resulted})

    }
    catch(e){
        console.log(e);
    }
    finally{
        this.setState({loading : false})
    }

   } 




 render(){
      const {crimeCategory,Forces,dataToggle,loading,resulted} = this.state
    //   console.log('sel1===>',selectedCrimeCategories);
    //   console.log('sel2===>',selectedForces);
      
    return(
        <div>
            <header className='header' >
            <h2 style={{color : 'dodgerblue'}}>Crime App</h2>
            </header>
            <br/>

            <select onChange={(e)=>{ this.setState({ selectedCrimeCategories : e.target.value}) }}>
                <option>Select a crime Category</option>
             {crimeCategory.map((e,index)=>{
                    return(<option value={e.name} key={index}>{e.name}</option>  )
             })}
           </select>
            <br/>
            <select onChange={(e)=>{ this.setState({selectedForces : e.target.value}) }} >
                <option >Select Forces</option>
                {Forces.map((e,index)=>{
                 return(<option value={e.name} key={index}>{e.name}</option>  )
                })}
            </select>
            <br/>
            <button className='search-btn' onClick={e=>{ this.getData(e) }}>search</button>

    
            
             <table>
                 <tr>
                     <th>Category </th>
                     <th>Month </th>
                     <th>Outcome</th>
                 </tr>
                 <br/>
             
                 {!resulted.length &&
                 <tr>
                     <td></td>
                     {   loading ?<td>Loading.......</td> : <td>No data fetched</td> }
                         
                 </tr>}
                 { <span >{resulted.length}</span>  &&
                     resulted.map( (e)=>{
                      return ( <tr> 
                                  <td>{e.category}</td>
                                  <td>{e.outcome_status.date}</td>
                                  <td>{e.outcome_status.category}</td>
                                
                                  <br/>
                                </tr>
                       )
                     })
                 }
            </table>   
            
            
        </div>
    )
 }
}