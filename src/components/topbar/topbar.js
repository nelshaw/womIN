import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="iconWrapper">
          <img
            className="womInLogo"
            src="https://media.discordapp.net/attachments/927664302113058839/929727323253653524/Woman_Face_Line_Art_Beauty_Logo-3.png"
          />
        </div>
        <span className="logoText">Wom[IN]</span>
      </div>
    </div>
  );
}
