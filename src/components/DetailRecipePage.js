// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// // import PropTypes from "prop-types";
// // import "./Player.css";

// export default class GoToDetailPage extends Component {
//   //   static propTypes = {
//   //     id: PropTypes.number.isRequired,
//   //     name: PropTypes.string.isRequired,
//   //     score: PropTypes.number.isRequired,
//   //     incrementScore: PropTypes.func.isRequired
//   //   };

//   render() {
//     return (
//       <div>
//         <h2>Instructions</h2>
//         <Link to="/">Back to homepage</Link>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DetailRecipePage extends Component {
  state = {
    loading: true,
    error: false,
    instructions: null //API of urls
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(
        id
      )}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ instructions: data.meals[0].strInstructions })
      )
      .then(() => this.setState({ loading: false }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    if (this.state.loading) {
      return <div>{"still loading"}</div>;
    } else if (this.state.error) {
      return <div>{"error with fetching data"}</div>;
    }
    return (
      <div className="instructions-container">
        <Link to="/">Back to homepage</Link>
        <h2>Instructions</h2>
        <p className="instructions">{this.state.instructions}</p>
      </div>
    );
  }
}
