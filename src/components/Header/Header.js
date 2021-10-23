import React from "react";
import "./Header.css";
import { Icons } from "../Icons/Icons";

export const Header = () => {
  return (
    <div className="header">
      <Icons />
      <div class="header__text-cont">
        <div class="header__text-cont__portfolio-name">
          <div class="header__text-cont__portfolio-name__port">PORTFOLIO:</div>
          <div class="header__text-cont__portfolio-name__name">
            SABRINA ZANCOTTI
          </div>
        </div>
        <h1>frontend developer</h1>
        <div class="header__text-cont__prof1__plus-prof2">& a law degree</div>
      </div>
      <div class="header__profile-pic">
        <img
          src="/pictures/header__profile-picture.jpg"
          alt="Profile picture of Sabrina Zancotti"
        />
      </div>
    </div>
  );
};
