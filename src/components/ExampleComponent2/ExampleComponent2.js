import React from "react";

export default class ExampleComponent2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <img src={this.props.imageUrl} />
        <p>{this.props.content}</p>
      </div>
    );
  }
}

//this is the child element of ExampleComponent
//here we set the structure of this component
//at the parent element (ExampleComponent) we add the attributes we want to change for each component instance
