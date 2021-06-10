import React from "react";
import Bubble22 from "../Bubble22";
import "./Bubble2.css";

function Bubble2(props) {
  const { path6Copy4, bubble22Props } = props;

  return (
    <div className="bubble-2 smart-layers-pointers">
      <Bubble22 title={bubble22Props.title} groupProps={bubble22Props.groupProps} />
      <div className="overlap-group7-4">
        <img className="path-6-copy-4" src={path6Copy4} />
        <div className="oval-2 border-2px-white"></div>
      </div>
    </div>
  );
}

export default Bubble2;
