import React from "react";
import SingleRecipe from "./SingleRecipe";

export default class Recipes extends React.Component {
  // the initial state
  state = {
    loading: true,
    error: false,
    data: []
  };

  componentDidMount() {
    return (
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
        .then(response => response.json())
        // .then(data => console.log("this is a test", data)) DONT do this because in the next step (posts) you need the output from this step, but here you dont return anything
        // .then(data => {
        //   console.log("Data in an array:", data.meals);
        //   this.setState({ data: data.meals }); // here you dont need to return anything because the next step doenst need input of this current step
        // })
        .then(data => {
          // add the like property to the data
          data.meals.map(meal => {
            let myMeal = meal;
            myMeal.likes = 0;
            return myMeal;
          });
          this.setState({ data: data.meals });
          console.log("this is my data:", data);
        })
        .then(() => {
          // remove the last element of the data array to have an even number of recipes, so it fits nicely on the page
          let filteredMeals = this.state.data;
          filteredMeals.pop();
          this.setState({ data: filteredMeals });
          console.log("this is my new data", this.state.data);
        })
        .then(() => this.setState({ loading: false }))
        .catch(() => this.setState({ error: true }))
    );
  }

  render() {
    if (this.state.loading) {
      return <div>{"still loading"}</div>;
    } else if (this.state.error) {
      return <div>{"error with fetching data"}</div>;
    }
    console.log("Rendering");
    return (
      <div className="recipe-container">
        {this.state.data.map(this.renderRecipe)}
      </div>
    );
  }

  incrementLike = userId => {
    console.log("Meal id:", userId);

    const updatedMeals = this.state.data.map(meal => {
      if (meal.idMeal === userId) {
        // make a copy of the meal, with updated likes
        return { ...meal, likes: meal.likes + 1 };
      }
      return meal;
    });

    console.log("updated meals", updatedMeals);
    this.setState({ data: updatedMeals });
  };

  renderRecipe = meal => {
    return (
      <SingleRecipe
        id={meal.idMeal}
        name={meal.strMeal}
        link={meal.strMealThumb}
        incrementLike={this.incrementLike} //callback prop
        likes={meal.likes}
      />
    );
  };
}
