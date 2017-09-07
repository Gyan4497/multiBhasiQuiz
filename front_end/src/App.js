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
  render() {
    return (
      <div>
        <Question data={this.state.data}/>
        <Button/>
      </div>
    );
  }
}

class Question extends Component {
  render() {

    return(
      <ul>
        {this.props.data.map(data =>
         <li key={data.id}>{data.ques}
          <ul>
            <li>{data.options[0]}</li>
            <li>{data.options[1]}</li>
            <li>{data.options[2]}</li>
            <li>{data.options[3]}</li>
          </ul>
         </li>
        )}
      </ul>
    );
  }
}

class Button extends Component {
  // checkAnswer() {
  //
  // }
  render() {
    return(
      <button > Next </button>
    );
  }
}

export default App;
