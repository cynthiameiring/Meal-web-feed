import React from "react";
import "./NavigationBar.css";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">
          {this.props.home}
        </a>
        <a className="contact" href="contact">
          {this.props.contact}
        </a>
        <a className="about" href="about">
          {this.props.about}
        </a>
      </div>
    );
  }
}
