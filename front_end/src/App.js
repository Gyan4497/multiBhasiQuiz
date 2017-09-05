import React, { Component } from 'react';
import './App.css';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      status: 'loading'
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/question')
    .then(res => {
      const data = res.data.children.map(obj => obj.data);
      this.setState({ data });
    });
  }

  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     //<img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      // //   </div>
      // </div>

      <div>
        <ul>
          {this.state.data.map(data =>
            <li key={data.id}>{data.ques}</li>
            // <li>{data.option1}</li>
            // <li>{data.option2}</li>
            // <li>{data.option3}</li>
            // <li>{data.option4}</li>
          )}
        </ul>
        <button> Next </button>
      </div>
    );
  }
}

// class Question extends Component {
//   render() {
//     return();
//   }
// }

export default App;
