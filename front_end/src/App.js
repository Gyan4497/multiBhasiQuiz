import React, { Component } from 'react';
import './App.css';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      count: 0,
      quesObj: [],
      status: 'loading'
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/question')
    .then(res => {
      console.log(res);
      const data = res.data.map(obj => obj);
      this.setState({ data });

      console.log(data);

    });
  }

  onclick(type){
    this.setState({count: this.state.count+1});
    const quesObj = this.state.data[this.state.count];
    console.log("its me", quesObj);
    this.setState({
      quesObj
      // count: type == 'add' ? this.state.count + 1: this.state.count - 1
    });
    
  }

  render() {
    return (
      <div>
        <Question quesObj={this.state.quesObj}/>
        <input type='button' onClick={this.onclick.bind(this, 'add')} value='Next'/>
        <input type='button' onClick={this.onclick.bind(this, 'start')} value='StartTest'/>
      </div>
    );
  }
}

class Question extends Component {
  optionsCheck = (options) => {
    console.log(options);
    console.log(this.props.quesObj.ans);
    if(options === this.props.quesObj.ans) 
    {
      alert("Correct answer!!!!")
    }

  }

  render() {
    return(
      <div>
      <ul>

        <li key={this.props.quesObj.id}> {this.props.quesObj.ques}

        {(this.props.quesObj.options!= undefined) ? this.props.quesObj.options.map(options => (<input type='button' onClick={() => {this.optionsCheck(options)}} value={options}/>)):null }
        {console.log(this.props.quesObj.options)}
        {console.log("answer:", this.props.quesObj.ans)}
        </li>
      </ul>
      </div>
    );
  }
}

export default App;
