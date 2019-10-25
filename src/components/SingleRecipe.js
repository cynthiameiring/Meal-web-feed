import React, { Component } from "react";
// import PropTypes from "prop-types";
// import "./Player.css";

export default class SingleRecipe extends Component {
  //   static propTypes = {
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     score: PropTypes.number.isRequired,
  //     incrementScore: PropTypes.func.isRequired
  //   };

  handleClickIncrement = () => {
    this.props.incrementLike(this.props.id); // callback prop
  };

  render() {
    const id = this.props.id;
    return (
      <div className="recipes">
        <div className="recipe">
          <a href={`./recipes/${id}`}>
            <img
              className="img-recipe"
              alt="Cannot be displayed"
              src={this.props.url}
            />
          </a>
          <h3 className="p-recipe">{this.props.name}</h3>
          <p>
            Like this recipe:{" "}
            <button className="plus-button" onClick={this.handleClickIncrement}>
              +
            </button>
          </p>
          <p>This recipe has {this.props.likes} likes</p>
        </div>
      </div>
    );
  }
}
