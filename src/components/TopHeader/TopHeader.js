import React, { Component } from "react";
import LikeCounter from "../LikeCounter/LikeCounter";

export default class TopHeader extends Component {
  render() {
    return (
      <div className="TopHeader">
        <img className="logo" src={this.props.link} alt={this.props.alt} />
        <h1 className="welcome">{this.props.content}</h1>
        <p className="subtitle">{this.props.txt}</p>
        <LikeCounter />
      </div>
    );
  }
}
