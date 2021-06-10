import React from "react";
import Group from "../Group";
import "./Bubble12.css";

function Bubble12(props) {
  const { title, groupProps } = props;

  return (
    <div className="bubble-1-1">
      <div className="overlap-group4-6">
        <Group src={groupProps.src} />
        <div className="title-10 lato-normal-white-12px">{title}</div>
      </div>
    </div>
  );
}

export default Bubble12;
