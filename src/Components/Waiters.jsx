import React, {useState,useContext} from "react"
import "../css/meseros.css"
import datamenu from '../datamenu.json';
import {menuContext} from "../App";
import Order from "../Components/Order.jsx";

const Waiters = () => {
    const orderContext = useContext(menuContext);
    const [foodItems, setFoodItem] = useState([]);

  
    const filterData = (category) => {
      setFoodItem(datamenu[category]);
    };
    const addData = (food) => {
      orderContext.addFoodItems(food);
    };
    return (

  
        <main className="waiters">
            <div>
            <h1>PEDIDOS</h1>
            <button className="comanda">Comandas listas</button>
            </div>
            <div className="container-input">
            <input className="input" id="nombre" type="text" placeholder="Nombre del cliente" />
            <input className="input" id="mesa" type="text" placeholder="Número de mesa" />
            <button className="menu-ok">OK</button>
            </div>
            <section className="containerMenu">
                <button className="menu" type="button" onClick={() => filterData('breakfast')}>Desayunos</button>
                <button className="menu" type="button" onClick={() => filterData('burger')}>Hamburguesas</button>
                <button className="menu" type="button" onClick={() => filterData('sides')}>Acompañamientos</button>
                <button className="menu" type="button" onClick={() => filterData('drinks')}>Para tomar</button>
            </section>
            <section className="conteinerPedidos">
                <div className="menu-data">
                {foodItems.map((food) => (
        <button className="containerData" type="button" key={food.id} onClick={() => addData(food)}>
          <img className="imageData" src={food.image} alt="" />
          <section>{food.name}</section>
          <section>
            $
            {food.price}
          </section>
        </button>
      ))}
      
                </div>
                <div className="resumen">
                    <div>
                    <Order />
                    </div>
                    <button className="menu">Enviar pedidos</button>
                </div>
            </section>
        </main>
    )
}
export default Waiters;
