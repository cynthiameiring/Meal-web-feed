import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
export default function Contact(props) {
  return (
    <div className="contacts">
      <h1>Creators of this page:</h1>
      <h2>
        <a href="https://github.com/cynthiameiring">Cynthia Meiring </a> &
        <a href="https://github.com/adeltancsik"> Adél Tancsik</a>
      </h2>
      <Link to="/">Back to home page...</Link>
    </div>
  );
}
