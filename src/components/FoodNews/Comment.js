import React from "react";
import "./Comment.css";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="commenting">
        <p>
          Comment no.{this.props.id}: "{this.props.name}"
        </p>
      </div>
    );
  }
}
