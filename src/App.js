import React, { Component } from "react";
// import Button from "./Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <button title={"-"} onClick={this.decrementCount}>Subtract</button>
            <button title={"+"} onClick={this.incrementCount}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
