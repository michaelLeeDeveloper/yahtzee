import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const numbers = ["one", "two", "three", "four", "five", "six"];
    let numberClass = `Die fas fa-dice-${numbers[this.props.value - 1]}`;
    if (this.props.locked) {
      numberClass += " Die-locked";
    }
    return (
      <i className={numberClass}
        onClick={this.handleClick}
      ></i>
    );
  }
}

export default Die;
