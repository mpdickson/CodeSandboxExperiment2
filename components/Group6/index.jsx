import React from "react";
import Bubble22 from "../Bubble22";
import "./Group6.css";

function Group6(props) {
  const { path6, bubble22Props } = props;

  return (
    <div className="group-6 smart-layers-pointers">
      <Bubble22 title={bubble22Props.title} groupProps={bubble22Props.groupProps} />
      <div className="overlap-group11-1">
        <img className="path-6" src={path6} />
        <div className="oval-6 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Group6;
