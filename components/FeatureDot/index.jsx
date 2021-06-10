import React from "react";
import "./FeatureDot.css";

function FeatureDot(props) {
  const { className } = props;

  return (
    <div className={`feature-dot ${className || ""}`}>
      <div className="overlap-group4-8">
        <div className="ellipse-2">
          <lottie-player
            src="https://anima-uploads.s3.amazonaws.com/projects/602e7a88c0cac64b2564ee73/files/lf30-editor-oc19syzo.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="ellipse-1"></div>
      </div>
    </div>
  );
}

export default FeatureDot;
