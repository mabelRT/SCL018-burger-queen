import React, {createContext, useState}  from 'react';
import './App.css';
import { Routes,Route} from "react-router-dom";
import Waiters from './Components/Waiters';
import Kitchen from './Components/Kitchen';
import Home from './Components/Home';
import datamenu from './datamenu.json';
export const menuContext = createContext();

function App () {
  const [foods, setFoods] = useState({
    foodsList: datamenu,
    orders: [],
  });

    const addFood= (food) => setFoods({
        ...foods,
        orders: foods.orders.find((ordersItem) => ordersItem.id === food.id)
          ? foods.orders.map((ordersItem) =>
              ordersItem.id === food.id
                ? { ...ordersItem, count: ordersItem.count + 1 }
                : ordersItem
            )
          : [...foods.orders, { ...food, count: 1 }]
      });

      const removeFood = (id) => {
        setFoods({
          ...foods,
          orders: foods.orders.filter((ordersItem) => ordersItem.id !== id)
        });
      };

      const increaseFood = (id) => {
        setFoods({
          ...foods,
          orders: foods.orders.map((ordersItem) =>
            ordersItem.id === id
              ? { ...ordersItem, count: ordersItem.count + 1 }
              : ordersItem
          )  
        }); 
      };
      const decreaseFood = (id) => {
        setFoods({
          ...foods,
          orders: foods.orders.map((ordersItem) =>
            ordersItem.id === id
              ? { ...ordersItem, count: ordersItem.count > 1 ? ordersItem.count - 1 : 1 }
              : ordersItem
          )
        });
      };
      
    const value = {
      foods,setFoods, addFood, removeFood, increaseFood, decreaseFood,
    };

  return (
    <>
    <menuContext.Provider value={value}>
    <Routes>
    <Route path="/waiters" element={<Waiters />}/>
       <Route path="/kitchen" element={<Kitchen />}/>
      <Route path= "/" element={<Home/>}/>
    </Routes>
     </menuContext.Provider>
     </>
  );
}
export default App;

