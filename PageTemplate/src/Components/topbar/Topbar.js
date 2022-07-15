import React from "react";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="bottomTopBar">
      <div className="topbar">
        <div className="rightMenu">
          <a href="#news">MENU</a>
          <a href="#news">METRICS</a>
          <a href="#news">DOUBTS</a>
          <a href="#news">CONNECT</a>
          <a href="#news">HOME</a>
        </div>
        <div className="topBarHeader">
          <h3>Iris</h3>
        </div>
      </div>
      <div className="headq">
        <h2>
          <mark>
            Duis Moilis , abbreviation for driving under the influence: the
            crime of operating a motor vehicle while being affected by alcohol
            or other drugs
          </mark>
        </h2>
      </div>
    </div>
  );
}
