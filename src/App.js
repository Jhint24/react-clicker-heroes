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
  };

  clickyEvent = this.handleClick.bind(this);

  //determine if it's already been clicked (is element in the clicked array)
  //if clicked already, then restart game, clear array,
  //else push new id into array, shuffle

  clickChecker = clickedImage => {
    let currentScore = this.state.score;
    let currentClicked = this.state.clicked.slice();
    const shuffled = this.shuffleCards();

    if (!this.state.clicked.includes(clickedImage.src)) {
      //update score
      currentClicked.push(clickedImage.src);
      this.setState({
        score: (currentScore += 1),
        clicked: currentClicked
      });
      console.log(this.state.clicked);
      //this.state.highScore++;
    } else {
      console.log('hello');

      this.setState({
        score: 0,
        clicked: []
      });

      //reset score, reset array of clicked, shuffle images
    }
  };

  //shuffle images
  //get the array images
  //make variable of copy of current array using slice
  //create an ew empty which will contain randomized array
  //randomize order on screen
  //splice also mutates the components array; mutating your State elements is A Bad Thing To Do; one simple way to avoid that is to create a clone of your array and splice that.
  shuffleCards() {
    let shuffledCards = images.slice();
    let newCardOrder = []; //new random

    //while loop loops through a block of code as long as a specified condition is true.
    //grab random index of shuffleCards and put into newCardOrder

    while (shuffledCards.length > 0) {
      newCardOrder.push(
        shuffledCards.splice(Math.floor(Math.random() * shuffledCards.length), 1)[0]
      );
    }

    //******************LOOK UP and use*****************
    //while loop
    //look up splice and slice
    //Array splice method
    //   Array push method
    //   Math.random
    //   Math.floor
    //   while loop
  }

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
