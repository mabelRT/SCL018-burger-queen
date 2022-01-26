import React  from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Waiters from './Components/Waiters';
import Kitchen from './Components/Kitchen';
import Home from './Components/Home';
const App = () => {
  return (
    <>
    <Routes>
       <Route path="/waiters" element={<Waiters />}/>
       <Route path="/kitchen" element={<Kitchen />}/>
      <Route path= "/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;

