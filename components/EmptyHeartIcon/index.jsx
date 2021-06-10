import React from "react";
import "./EmptyHeartIcon.css";

function EmptyHeartIcon(props) {
  const { src } = props;

  return (
    <div className="empty-heart-icon">
      <div className="overlap-group5-7">
        <img className="shape" src={src} />
      </div>
    </div>
  );
}

export default EmptyHeartIcon;
