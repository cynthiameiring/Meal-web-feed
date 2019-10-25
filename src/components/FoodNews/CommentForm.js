import React from "react";
import "./Comment.css";
export default class CommentForm extends React.Component {
  state = {
    name: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitted my form with this comment: ${this.state.name}`);
    // create a player
    this.props.addComment(this.state.name);
    //clear the typed data from the input
    this.setState({ name: "" });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="commentform">
        <h3> Comment your choice:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Add comment:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    );
  }
}
