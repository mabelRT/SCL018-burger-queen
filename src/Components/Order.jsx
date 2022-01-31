import React, {Fragment, useContext} from "react";
import { menuContext } from "../App";
 
const Order = () => {
    const orderContext = useContext(menuContext);
    return (
        <div>
            
      <h3>Pedido</h3>
      {orderContext.foods.orders.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <p>{food.price}</p>

          <section>
            <button type="button" onClick={() => orderContext.removeFood(food.id)}>Delete</button>
            <button type="button" onClick={() => orderContext.increaseFood(food.id)}>+</button>
            <button type="button">-</button>
          </section>
        </div>

      ))}
      <h3>
        Total:
        {' '}
        {/* {handleTotal} */}
      </h3>
    
        </div>
    )
}
export default Order;
