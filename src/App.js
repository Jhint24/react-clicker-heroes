import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
class App extends Component {
  state = {
    score: 0,
    highScore: 0

  }
  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
      </div>
    );
  }
}
export default App;
