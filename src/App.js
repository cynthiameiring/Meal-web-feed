import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import FoodNews from "./components/FoodNews/FoodNews";
import Recipes from "./components/Recipes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader
          link="https://cdn3.iconfinder.com/data/icons/food-155/100/Healthy_food_1-512.png"
          content="Our Recipe Collection"
          txt="Welcome to our site, enjoy!"
        />
      </header>
      <main>
        <FoodNews key="foodnews" title="What should be our next recipe?" />
       <div>
        <Recipes />
      </div>
    </main>
    </div>
  );
}

export default App;
