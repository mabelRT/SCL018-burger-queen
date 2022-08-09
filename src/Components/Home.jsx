import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logoburger from "../img/logoburger.png"


export default function Home() {
    return (
        <>
            <section className="container-home">
                <div className="home-cnt">
                 <img className="logo" src= {logoburger} alt="logo burguer queen" />

                 <div className="home-title">
                    <h1 className="title">Burger Queen </h1>
                 </div>
                 <div className="home-btn">
                 <Link to="/waiters"><button className="btn-home">Meseros</button></Link>
                 <Link to="/kitchen"><button className="btn-home">Cocina</button></Link>
                 </div>
                 </div>
            </section>
        </>
    )
};
