// App
import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';
import CheckOut from './pages/Checkout';
// import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/products' element={<Products />}></Route>
      {/* <Route path='/' element={< />}></Route> */}
      <Route path='/checkOut' element={<CheckOut />}></Route>
    </Routes>

    </BrowserRouter>

    // <CheckOut></CheckOut>


  );
};

export default App;

