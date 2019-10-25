import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DetailRecipePage extends Component {
  state = {
    loading: true,
    error: false,
    instructions: null, //API of urls
    data: [],
    newIngredients: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(
        id
      )}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ instructions: data.meals[0].strInstructions });
        this.setState({ data: data.meals });
      })
      .then(() => {
        const newData = this.state.data[0];
        const ingredients = Object.keys(newData).filter(element =>
          element.includes("strIngredient")
        );
        const newIngredients = ingredients
          .filter(ingredient => {
            if (!newData[ingredient]) {
              return false;
            }
            return true;
          })
          .map(ingredient => {
            return newData[ingredient];
          });
        this.setState({ newIngredients: newIngredients });
      })
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
      <div>
        <div className="instructions-container">
          <Link to="/">Back to homepage</Link>
          <h1>Instructions</h1>
          <p className="instructions">{this.state.instructions}</p>
        </div>
        <div>
          <h1>Ingredients: </h1>
          {
            <ul className="ingredients">
              {this.state.newIngredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    );
  }
}
