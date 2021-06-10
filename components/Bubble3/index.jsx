import React from "react";
import Bubble12 from "../Bubble12";
import "./Bubble3.css";

function Bubble3(props) {
  const { path6Copy3, bubble12Props } = props;

  return (
    <div className="bubble-3 smart-layers-pointers">
      <Bubble12 title={bubble12Props.title} groupProps={bubble12Props.groupProps} />
      <div className="overlap-group8-3">
        <img className="path-6-copy-3" src={path6Copy3} />
        <div className="oval-3 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Bubble3;
