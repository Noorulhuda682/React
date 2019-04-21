import React, { Component } from 'react';

class QuizeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            i : 0,
            t : 0,
        }
        this.timer = this.timer.bind(this)
    }


  nextbtn(){
      console.log(this.props.data.results.length);
      if( this.state.i + 1 !== this.props.data.results.length){

          this.setState({
              i : this.state.i + 1
            })
        }
  }
   
  timer(){
    console.log('timer====>',this.state.t)
   this.setState({
       t : this.state.t+1,
   })
 }

 
    
  render() {
    setInterval(this.timer, 1000);
      const {data} = this.props;
      const {i,t} = this.state;

    //   console.log("quizdata===>",this.state.data.results[0].question)
    return (
      <div className="QuizeApp">
       <strong>{t}</strong>
        <h2>Quize Page</h2>

         <h4>{data.results[i].question}</h4>
         <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1"
            //  checked={true}
              />
            {data.results[i].incorrect_answers[0]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            {data.results[i].incorrect_answers[1]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            {data.results[i].incorrect_answers[2]}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option4" />
           { data.results[i].correct_answer}
          </label>
        </div>
      </form>
      <br/>
      <br/>
         <button className='start' onClick={this.nextbtn.bind(this)}>Next</button>
         <br/>
         <br/>
      </div>
    );
  }
}

export default QuizeApp;