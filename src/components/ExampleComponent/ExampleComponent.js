import React from "react";
import ExampleComponent2 from "../ExampleComponent2/ExampleComponent2";

export default class ExampleComponent extends React.Component {
  status = {
    //   we have this empty object by default
  };
  render() {
    return (
      <ExampleComponent2
        title="Example"
        subtitle="Finally"
        imageUrl="https://cdn3.iconfinder.com/data/icons/food-155/100/Healthy_food_1-512.png"
        content="bablskfhaljewd omg"
      />
    );
  }
}

//this is the parent component of ExampleComponent2
//we have 3 component instances of ExampleComponent2 collected in here

//we can pretend this is the App.js parent element..........
