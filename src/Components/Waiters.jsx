import React, { useState, useContext } from "react"
import "../css/meseros.css"
import datamenu from '../datamenu.json';
import { menuContext } from "../App";
import Order from "./Order.jsx";
import { Link } from "react-router-dom";

const Waiters = () => {
  const orderContext = useContext(menuContext);
  console.log(orderContext)
  const [foodItems, setFoodItem] = useState([]);

  //filtrar la data del menú
  const filterData = (category) => {
    setFoodItem(datamenu[category]);
  };
  const addData = (food) => {
    orderContext.addFood(food);
  };
  return (
    <main className="waiters">
      <div  className="iconsHeader">
        <h1>PEDIDOS</h1>
        <Link to="/">
          <img className="iconHome"
            src="https://img.icons8.com/ios-filled/50/000000/home.png"
            alt="Home"
            />
        </Link>
        <Link to="/kitchen">
          <p className="comanda">Comandas listas</p>
          </Link>
      </div>
      <div className="container-input">
        {/* nombre de cliente y número de mesa */}
        <input className="input" id="nombre" type="text" value={orderContext.name} onChange={(e) => orderContext.setName(e.target.value)} placeholder="Nombre del cliente" />
        <input className="input" id="mesa" type="number" value={orderContext.table} onChange={(e) => orderContext.setTable(e.target.value)} placeholder="Número de mesa" />
        <button className="menu-ok" type="button" onClick={console.log(orderContext.name)}>OK</button>
      </div>
      <section className="containerMenu">
        <button className="menu" type="button" onClick={() => filterData('breakfast')}>Desayunos</button>
        <button className="menu" type="button" onClick={() => filterData('burger')}>Hamburguesas</button>
        <button className="menu" type="button" onClick={() => filterData('sides')}>Acompañamientos</button>
        <button className="menu" type="button" onClick={() => filterData('drinks')('sides')}>Para tomar</button>
      </section>
      {/**/}
      <section className="conteinerPedidos">
        <div className="menu-data">
          {/*mostrar la data del menú en tarjetas*/}
          {foodItems.map((food) => (
            <div className="containerData">
              <img className="imageData" src={food.image} alt="" />
              <div className="textData">{food.name} <br /> ${food.price}<br />
              <button className="buttonP" type="button" key={food.id} onClick={() => addData(food)}> Agregar</button>
              </div>
            </div>
          ))}
        </div>
        <Order />
      </section>
    </main>
  )
}
export default Waiters;
