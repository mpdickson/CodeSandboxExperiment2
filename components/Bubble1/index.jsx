import React from "react";
import Bubble12 from "../Bubble12";
import "./Bubble1.css";

function Bubble1(props) {
  const { path6Copy5, bubble12Props } = props;

  return (
    <div className="bubble-1 smart-layers-pointers">
      <Bubble12 title={bubble12Props.title} groupProps={bubble12Props.groupProps} />
      <div className="overlap-group5-6">
        <img className="path-6-copy-5" src={path6Copy5} />
        <div className="oval-1-1 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Bubble1;
