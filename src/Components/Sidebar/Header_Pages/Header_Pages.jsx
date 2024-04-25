import React, {useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Header_Pages.css"


function Header_Pages() {
    return (
        <div className=" dashboard-header">
            <b style={{width:'68px', height:'25px'}}>
                Patient 
            </b>
            <div>
                <MdKeyboardArrowRight  style={{fontSize:'20px'}}/>
            </div>
            <span>Book appointment</span>
        </div>
        // <div></div>
    );
};

export default Header_Pages;
