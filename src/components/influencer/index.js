import React from "react";
import "./influencer.css";
function influencer(props) {
  return (
    <div className="BookCard influencer">
      <img src={props.image} alt={props.name + "," + props.description} />
      <h4> {props.name} </h4>
      <p>{props.description} </p>
    </div>
  );
}

export default influencer;
