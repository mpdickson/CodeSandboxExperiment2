import React from "react";
import "./Trainer1Desktop.css";

function Trainer1Desktop(props) {
  const { name, emptyCheckbox, kickboxing, avatar1, className } = props;

  return (
    <div className={`trainer-1-desktop ${className || ""}`}>
      <div className="overlap-group4-9">
        <div className="empty-checkbox-1 border-1px-te-papa-green"></div>
        <div className="name-2 lato-normal-black-14px">{name}</div>
        <img className="empty-checkbox smart-layers-pointers" src={emptyCheckbox} />
      </div>
      <div className="kickboxing lato-normal-black-13px">{kickboxing}</div>
      <div className="avatar-1" style={{ backgroundImage: `url(${avatar1})` }}></div>
    </div>
  );
}

export default Trainer1Desktop;
