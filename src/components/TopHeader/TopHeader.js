import React, { Component } from "react";
import LikeCounter from "../LikeCounter/LikeCounter";
import NavigationBar from "./NavigationBar";
import { Route } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <div className="TopHeader">
        <img className="logo" src={this.props.link} alt={this.props.alt} />
        <h1 className="welcome">{this.props.content}</h1>
        <p className="subtitle">{this.props.txt}</p>
        <NavigationBar
          home="Home"
          contact="Contact"
          about="Nice food pictures to make you hungry"
        />
        <Route exact path="/" component={NavigationBar} />

        <LikeCounter />
      </div>
    );
  }
}
