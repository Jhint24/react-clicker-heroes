import React, { Component } from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav class="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Clicker Heroes</span>
    <div className = "score-class">Score: {props.score}</div>
  </nav>
);

export default Navbar;