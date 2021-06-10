import React from "react";
import "./HightWeight.css";

function HightWeight(props) {
  const { path1, inputType, inputPlaceholder, cm, path2, path12, inputType2, inputPlaceholder2, kg, path22 } = props;

  return (
    <div className="hight-weight">
      <div className="hight">
        <img className="path-1-1" src={path1} />
        <div className="flex-row-11">
          <input
            className="x165 lato-normal-te-papa-green-23px"
            name="165"
            placeholder={inputPlaceholder}
            type={inputType}
          />
          <div className="cm lato-normal-te-papa-green-12px">{cm}</div>
        </div>
        <img className="path-2-1" src={path2} />
      </div>
      <div className="weight">
        <img className="path-1-2" src={path12} />
        <div className="flex-row-12">
          <input
            className="x55 lato-normal-te-papa-green-23px"
            name="55"
            placeholder={inputPlaceholder2}
            type={inputType2}
          />
          <div className="kg lato-normal-te-papa-green-12px">{kg}</div>
        </div>
        <img className="path-2" src={path22} />
      </div>
    </div>
  );
}

export default HightWeight;
