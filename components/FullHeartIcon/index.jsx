import React from "react";
import "./FullHeartIcon.css";

function FullHeartIcon(props) {
  const { path2, className } = props;

  return (
    <div className={`full-heart-icon-2 smart-layers-pointers ${className || ""}`}>
      <div className="overlap-group8-4">
        <img
          className="path-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/path@2x.png"
        />
        <img className="path-4" src={path2} />
      </div>
    </div>
  );
}

export default FullHeartIcon;
