import React from "react";
import img from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={img} className="nav--logo" />
        </nav>
    )
}