import React from "react";
import Group from "../Group";
import "./Bubble22.css";

function Bubble22(props) {
  const { title, groupProps } = props;

  return (
    <div className="bubble-2-1">
      <div className="overlap-group4-7">
        <Group src={groupProps.src} />
        <div className="title-11 lato-normal-white-12px">{title}</div>
      </div>
    </div>
  );
}

export default Bubble22;
