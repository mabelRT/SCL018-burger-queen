import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Link to="/">home</Link>
            <Link to="/waiters">meseros</Link>
            <Link to="/kitchen">cocina</Link>
        </div>
    )
}
export default Home;
