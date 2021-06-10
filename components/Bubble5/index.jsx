import React from "react";
import Bubble12 from "../Bubble12";
import "./Bubble5.css";

function Bubble5(props) {
  const { path6Copy, bubble12Props } = props;

  return (
    <div className="bubble-5 smart-layers-pointers">
      <Bubble12 title={bubble12Props.title} groupProps={bubble12Props.groupProps} />
      <div className="overlap-group10-1">
        <img className="path-6-copy" src={path6Copy} />
        <div className="oval-5 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Bubble5;
