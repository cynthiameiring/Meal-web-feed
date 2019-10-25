import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
export default class About extends React.Component {
  state = {
    loading: true,
    dataFile: "something",
    error: false
  };
  componentDidMount = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=French")
      .then(res => res.json())
      .then(data => {
        this.setState({ loading: false, dataFile: data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };
  renderPicture(pic) {
    return (
      <li key={pic.idMeal}>
        <img src={pic.strMealThumb} alt={pic.idMeal} />
      </li>
    );
  }
  render() {
    return (
      <div className="about">
        <h1>Nice food pictures to make you hungry</h1>
        {this.state.loading === true && "Loading..."}
        {!this.state.loading && (
          <p>
            {/* {
             this.state.dataFile.meals[Math.round(Math.random(0, 100000))]
               .strMealThumb
           }            */}
            {this.state.dataFile.meals.map(this.renderPicture)}
            <Link to="/">Back to home page...</Link>
          </p>
        )}
      </div>
    );
  }
}
