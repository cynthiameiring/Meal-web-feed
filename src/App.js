import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import FoodNews from "./components/FoodNews/FoodNews";
import Recipes from "./components/Recipes";
import { Route } from "react-router-dom";
import DetailRecipePage from "./components/DetailRecipePage";
import About from "./components/TopHeader/About";
import Contact from "./components/TopHeader/Contact";


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
<div>
        <Route
          path="/"
          exact
          render={props => (
            <FoodNews
              {...props}
              key="foodnews"
              title="What should be our next recipe?"
            />
          )}
        />
        <Route
          path="/about"
          render={props => <About {...props} didit="I did it" />}
        />
        <Route path="/contact" component={Contact} />
          
          
         </div> 
        <div>
          <Route exact path="/" component={Recipes} />
          <Route path="/recipes/:id" component={DetailRecipePage} />

        </div>
      </main>
    </div>
  );
}

export default App;
