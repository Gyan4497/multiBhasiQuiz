import React, { Component } from "react";
import "./App.css";
import ReactDom from "react-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      count: 0,
      quesObj: [],
      status: "loading"
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/question").then(res => {
      console.log(res);
      const data = res.data.map(obj => obj);
      this.setState({ data });

      console.log(data + "gyan");

    });
  }

  onclick(type) {
    this.setState({ count: this.state.count + 1 });

    const quesObj = this.state.data[this.state.count];
    if (quesObj == null) {
      alert("Bye !!!");
    } else this.setState({ quesObj });
  }

  render() {
    return (
      <div class="quizBody">
        <Question quesObj={this.state.quesObj} />

        {this.state.count == 0 ? (
          <input
            type="button"
            onClick={this.onclick.bind(this, "start")}
            value="StartTest"
            className="start"
          />
        ) : (
          <input
            type="button"
            onClick={this.onclick.bind(this, "next")}
            value="Next"
            className="next"
          />
        )}
      </div>
    );
  }
}

class Question extends Component {
  optionsCheck = options => {
    console.log(options);
    console.log(this.props.quesObj.ans);
    if (options === this.props.quesObj.ans) {
      alert("Correct answer!!!!");
    }
  };

  render() {
    return (
      <div>
        <div key={this.props.quesObj.id} className="question">
          {" "}
          {this.props.quesObj.ques}
        </div>
        <div>
          {this.props.quesObj.options != undefined
            ? this.props.quesObj.options.map(options => (
                <input
                  type="button"
                  onClick={() => {
                    this.optionsCheck(options);
                  }}
                  value={options}
                  className="options"
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default App;
