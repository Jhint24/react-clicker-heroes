import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    score: 0,

  }
  render() {
    return (
      <div className="App">
        <Navbar score= {this.state.score} />
      </div>
    );
  }
}
export default App;
