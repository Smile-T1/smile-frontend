import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Header_Pages.css";

function Header_Pages(props) {
  return (
    <div className=" dashboard-header">
      <div className="header-conatainer">
        <b style={{ width: "68px", height: "25px" }}>{props.type}</b>
        <div>
          <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
        </div>
        <span>{props.header}</span>
      </div>
    </div>
  );
}

export default Header_Pages;
