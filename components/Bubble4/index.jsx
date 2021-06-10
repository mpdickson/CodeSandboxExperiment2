import React from "react";
import Bubble12 from "../Bubble12";
import "./Bubble4.css";

function Bubble4(props) {
  const { path6Copy2, bubble12Props } = props;

  return (
    <div className="bubble-4 smart-layers-pointers">
      <Bubble12 title={bubble12Props.title} groupProps={bubble12Props.groupProps} />
      <div className="overlap-group9-2">
        <img className="path-6-copy-2" src={path6Copy2} />
        <div className="oval-4 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Bubble4;
