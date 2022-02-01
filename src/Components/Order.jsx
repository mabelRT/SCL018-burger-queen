import React, {Fragment, useContext} from "react";
import { menuContext } from "../App";
 
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
    const totalPrice= orderContext.foods.orders
    .reduce((total, food) => (total = total + food.price * food.count), 0);

  const totalItem = orderContext.foods.orders
    .reduce((total, food) => (total = total + food.count), 0);
    return (
        <div>
            
      <h3>Pedido</h3>
      {orderContext.foods.orders.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <p>
            $
            {' '}
            {food.price}</p>

          <section>
            <button type="button" onClick={() => Delete(food.id)}>Delete</button>
            <p>
            total $
            {' '}
            {food.price * food.count}
           </p>
            <button type="button" onClick={() => increase(food.id)}>+</button><p>
              x
              {' '}
              {food.count}
            </p>
            <button type="button"  onClick={() => decrease(food.id)}>-</button>
          </section>
        </div>

      ))}
      <h3>
        {' '}
        Total:
        {' '}
        {totalItem}
      </h3>
      <h3>
        Total:
        $
        {' '}
        {totalPrice}
      </h3>
    
        </div>
    )
}
export default Order;
