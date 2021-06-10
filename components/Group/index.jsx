import React from "react";
import "./Group.css";

function Group(props) {
  const { src } = props;

  return (
    <div className="group-1">
      <div className="overlap-group6-3">
        <div className="rectangle"></div>
        <img className="triangle" src={src} />
      </div>
    </div>
  );
}

export default Group;
