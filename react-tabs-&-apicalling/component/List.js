import React, { Component } from 'react';
import { searchData } from '../config/api';

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            list: ['Pakistan', 'India', 'Australia', 'Newzealand', 'Kenya'],
            result: [],
            text: '',
            loading: false,hits : []
        }
    }

    componentDidMount(e) {
        this.fetchData(e);
    //     fetch('https://hn.algolia.com/api/v1/search?query=' + 'redux')
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
    //   console.log(this.state.hits);
      
    }

    async fetchData(e) {
        this.setState({ loading: true })

        try {
            const result = await searchData(e)
            console.log(result);
            console.log('data called')
            // this.setState({loading: false})
        } catch(e){
            console.log(e)
        } finally {
            this.setState({loading: false})
        }
    }

    search(e) {

this.setState({text :   e.target.value})
        this.componentDidMount(e.target.value)
        const { list } = this.state;
        const text = e.target.value;
        

        const result = list.filter((elem) => {
            // console.log('===>',elem.substring(0, text.length).toLowerCase(),text);
            return elem.substring(0, text.length).toLowerCase() === text
            
        })
   
        this.setState({ result, text });
        console.log('this is resultand text===>',this.state.result,this.state.text);
        
    }

    render() {
        const { list, result, text, loading } = this.state;
        const arr = text.length ? result : list;

        return (
            <div style={{background : 'rgba(0,0,0,0.8)'}}>
                <input placeholder="Search..." onChange={this.search.bind(this)} />
                {arr.map((elem, index) => {
                    return <p>{index + 1}) {elem}</p>
                })}
                {loading && "Loading......."}
            </div>
        )
    }
}