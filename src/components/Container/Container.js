import React from "react";
import "./Container.css";
import Heroes from "../Heroes";


const Container = props => (
<div className = "container">
<div className = "click-pictures">
{props.allHeroes.map(clickers =><Heroes hero = {clickers}/>)}
</div>
</div>
  );

export default Container;