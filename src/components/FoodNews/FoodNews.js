import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./FoodNews.css";
export default class FoodNews extends React.Component {
  state = {
    loading: true,
    dataFile: "something",
    error: false,
    comments: [{ id: 1, comment: "I vote on the second one!" }]
  };
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(data => {
        this.setState({ loading: false, dataFile: data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }
  addComment = comment => {
    const newComment = { id: this.state.comments.length + 1, comment: comment };
    const comments = [...this.state.comments, newComment];
    this.setState({ comments: comments });
  };
  render() {
    if (!this.state.loading) {
      //console.log("it fetched!");
      return (
        <div>
          <div className="foodnews">
            <h3>{this.props.title}</h3>
            <ol>
              {this.state.dataFile.meals.map(article => {
                return <li key={article.idMeal}>{article.strMeal}</li>;
              })}
            </ol>
            <div className="commentsection">
              <div>
                {this.state.comments.map(comment => {
                  return (
                    <Comment
                      key={comment.id}
                      name={comment.comment}
                      id={comment.id}
                    />
                  );
                })}
              </div>
              <div>
                <CommentForm addComment={this.addComment} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>nope....</p>;
    }
  }
}
