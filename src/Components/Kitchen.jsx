import React from "react";
import "../css/kitchen.css"
import { Link } from "react-router-dom";
const Kitchen = () => {
    return (
        <>
        <div className="kitchen">
            <h1>Cocina</h1>
        </div>
                <Link to="/">
                <img className="iconHome"
                  src="https://img.icons8.com/ios-filled/50/000000/home.png"
                  alt="Home"
                  />
              </Link>
        </>
    )
}
export default Kitchen;
