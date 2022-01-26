import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logoburger from "../img/logoburger.png"

const Home = () => {
    return (
        <section className="container-home">
            <img className="logo" src= {logoburger} alt="logo burguer queen" />
            <h1 className="title">Burger Queen</h1>
            <Link to="/waiters"><button className="btn-home">Meseros</button></Link>
            <br />
            <Link to="/kitchen"><button className="btn-home">Cocina</button></Link>
        </section>
    )
}
export default Home;
