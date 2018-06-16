import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import images from './images';
class App extends Component {
  state = {
    //scoring
    score: 0,
    highScore: 0,
    //images
    allHeroes: images,
    clicked: []
  };
  //click an element

  handleClick = event => {
    event.preventDefault();
    this.clickChecker(event.target);
    //   this.shuffle();
  };

  clickyEvent = this.handleClick.bind(this);

  //determine if it's already been clicked (is element in the clicked array)
  //if clicked already, then restart game, clear array,
  //else push new id into array, shuffle

  clickChecker = clickedImage => {
    let currentScore = this.state.score;
    let currentClicked = this.state.clicked.slice();

    if (!this.state.clicked.includes(clickedImage.src)) {
      //update score
      currentClicked.push(clickedImage.src);
      this.setState({
        score: currentScore++,
        clicked: currentClicked
      });
      console.log(this.state.clicked);
      //this.state.highScore++;
    } else {
      console.log('hello');
      //reset score, reset array of clicked, shuffle images
    }
  };

  //shuffle images
  //get the array images
  //make variable of copy of current array using slice
  //create an ew empty which will contain randomized array
  //randomize order on screen
  shuffleCards = () => {
    let shuffledCards = images.slice();
    let newCardOrder = []; //new random
    //grab random index of shuffleCards and put into newCardOrder
    //******************LOOK UP and use*****************
    //while loop
    //look up splice and slice
    //Array splice method
    //   Array push method
    //   Math.random
    //   Math.floor
    //   while loop
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container allHeroes={this.state.allHeroes} clicked={this.clickyEvent} />
      </div>
    );
  }
}
export default App;
