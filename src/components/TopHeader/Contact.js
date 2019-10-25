import React from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact</h1>
      This page will show the contact section of our page..
      <Link to="/">Hide this section...</Link>
    </div>
  );
}
