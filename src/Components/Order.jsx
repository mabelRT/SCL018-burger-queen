import React, { Fragment, useContext } from "react";
import { menuContext } from "../App";
import "../css/orders.css"

const Order = () => {
  const orderContext = useContext(menuContext);
  const Delete = (id) => {
    orderContext.removeFood(id);
  };

  const increase = (id) => {
    orderContext.increaseFood(id);

  };

  const decrease = (id) => {
    orderContext.decreaseFood(id);
  };
  const totalPrice = orderContext.foods.orders
    .reduce((total, food) => (total = total + food.price * food.count), 0);

  const totalItem = orderContext.foods.orders
    .reduce((total, food) => (total = total + food.count), 0);
  return (
    <div className="resumen">
      <h3 className="text-name">Pedido</h3>
      <p className="text-name">{orderContext.name}</p> <p> mesa n°{orderContext.table}</p>
      
      {orderContext.foods.orders.map((food) => (
        <div className="resumen-pedido" key={food.id}>
          <div className="titleOrder"><h3>Pedidos</h3><h3>Precio</h3> </div>
          <section className="containerName">
          <p>{food.name}</p>
          <p>{' '}{food.price}$</p> 
          </section>
          <section className="buttonOptions">  
            <button className="increase-decrease" type="button" onClick={() => increase(food.id)}>+</button>
              <p>x {' '} {food.count}</p>
            <button className="increase-decrease"type="button" onClick={() => decrease(food.id)}>-</button>
              <p> {' '} {food.price * food.count}$</p>
            <button className="delete" type="button" onClick={() => Delete(food.id)}>Delete</button>
          </section>
        </div>

      ))}
      <section className="containerTotal">
      <h3>{' '}Total:{' '}{totalItem}</h3>
      <h3>Total:{' '}{totalPrice}$</h3>
      </section>
      <button className="buttonRes" type="button"></button>
    </div>

    )
  
}

export default Order;
