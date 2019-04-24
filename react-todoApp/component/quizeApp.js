import React, { Component } from 'react';

class QuizeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            i : 0,t : 0,m : 0,
            option1 : false,option2 : false, option3 : false, option4 : false,
            selectedoption : 'none',correcoption : 'none',
            percentage : 0,status : 'none',correct : 0,incorrect : 0,countquestion : 1

        }
        

    }


       
      
       
     
    



  static getDerivedStateFromProps(nextprops,nextstate){
    // console.log(   'gdsfp====>',  nextstate.i)
    if( nextstate.m === 2 ){
      var percentage = 0;
      percentage = ((nextstate.correct/nextprops.data.results.length) * 100) ; 
      console.log(  JSON.parse( percentage)+'%');
     
      var incorrect = nextstate.incorrect;
      var correct = nextstate.correct;
      var studentData = {
        percentage,correct,incorrect
      }
      nextprops.getStudentData(studentData);
      return false
    }
    
    if( nextstate.countquestion === 11  ){
      var percentage = 0;
      percentage = ((nextstate.correct/nextprops.data.results.length) * 100) 
      console.log(  JSON.parse( percentage)+'%');
      
      var incorrect = nextstate.incorrect;
      var correct = nextstate.correct;
      var studentData = {
        percentage,correct,incorrect
      }
      nextprops.getStudentData(studentData);
    }
   
    return true

}








  nextbtn(){
    // this.props.data.results[0].correct_answer
      if(this.state.selectedoption === 'option4' ){
        this.setState({correct : this.state.correct + 1})         
        console.log('correct===>',this.state.i);
        
      }
      else{
        this.setState({incorrect : this.state.incorrect + 1})
        console.log('incorrect');
      }

      


        if( this.state.i  < this.props.data.results.length-1){
          this.setState({
              i : this.state.i + 1,countquestion : this.state.countquestion + 1,
              option1 : false,option2 : false, option3 : false, option4 : false,
            })
        }
        else{
          this.setState({countquestion : this.state.countquestion + 1})
        }
        
  }
   
  componentDidMount(){
    setInterval(()=>{
      // console.log(   'coorectoption====>',  this.state.m)
      this.setState({
          t : this.state.t + 1,
        })
        if(this.state.t === 60){
                this.setState({
                    t : 0,
                    m : this.state.m + 1
                  })
        }
    },1000)
}





 option1(){ this.setState({ option1 : true,option2 : false, option3 : false, option4 : false, }) }
 option2(){ this.setState({ option1 : false,option2 : true, option3 : false, option4 : false, }) }
 option3(){ this.setState({ option1 : false,option2 : false, option3 : true, option4 : false, }) }
 option4(){ this.setState({ option1 : false,option2 : false, option3 : false, option4 : true, }) }


getoption(e){
  var option =  e.target.value
  console.log(option);
  this.setState({selectedoption : option})
}

    
  render() {
      const {data} = this.props;
      const {i,t,m,countquestion} = this.state;

    //   console.log("quizdata===>",this.state.data.results[0].question)
    return (
      <div className="QuizeApp">
       <strong>{m }:{ t}</strong>
        <h2>Quize Page</h2>

    
       <h4>Q#{countquestion} {data.results[i].question}</h4> 

         <form>
           {data.results[i].incorrect_answers[0]  &&
        <div className="radio">
          <label>
            <input type="radio" value="option1" 
            onClick={(e)=>{ this.option1() 
              this.getoption(e) }}
              checked={this.state.option1}
              />
           <span>{data.results[i].incorrect_answers[0]}</span>
          </label>
        </div>
           }
           <br/>
        {data.results[i].incorrect_answers[1]  &&
        <div className="radio">
          <label>
            <input type="radio" value="option2" onChange={this.changbtn}
            onClick={(e)=>{ this.option2()
               this.getoption(e) }}
            checked={this.state.option2}
            />
             <span>{data.results[i].incorrect_answers[1]}</span> 
          </label>
        </div>
        }
        <br/>
        {data.results[i].incorrect_answers[2]  &&
        <div className="radio">
          <label>
            <input type="radio" value="option3" onChange={this.changbtn}
            onClick={(e)=>{ this.option3() 
              this.getoption(e)}}
            checked={this.state.option3}
            />
             <span>{data.results[i].incorrect_answers[2]}</span>
          </label>
        </div>
        }
        <br/>
{data.results[i].correct_answer  &&        <div className="radio">
          <label>
            <input type="radio" value="option4" onChange={this.changbtn}
            onClick={(e)=>{ this.option4() 
              this.getoption(e) }}
            checked={this.state.option4}
            />
             <span>{ data.results[i].correct_answer}</span> 
          </label>
        </div>
}
<br/>
      </form>
      <br/>
      <br/>
         <button className='start' onClick={this.nextbtn.bind(this)}>Next</button>
         <br/>
         <br/>
         <h3>{countquestion}/{data.results.length}</h3>
      </div>
    );
  }
}

export default QuizeApp;