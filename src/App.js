import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import images from "./images";
class App extends Component {
  state = {
    //scoring
    score: 0,
    highScore: 0,
    //images
    allHeroes: images, 


  }


  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
        <Container allHeroes= {this.state.allHeroes}/>
      </div>
    );
  }
}
export default App;
