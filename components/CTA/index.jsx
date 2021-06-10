import React from "react";
import "./CTA.css";

function CTA(props) {
  const { children } = props;

  return (
    <div className="cta">
      <div className="overlap-group4-10">
        <div className="sign-up lato-normal-white-16px">{children}</div>
      </div>
    </div>
  );
}

export default CTA;
