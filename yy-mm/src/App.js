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
import ShoppingCart from './pages/ShoppingCart';
import AddToCart from './pages/AddToCart';
import ContactUs from './pages/ContactUs';

function App(props) {
  return (
<Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/products' element={<Products type="default"/>}></Route>
      <Route path='/piano' element={<Products type="piano"/>}></Route>
      <Route path='/violin' element={<Products type="violin"/>}></Route>
      <Route path='/special' element={<Products type="harp"/>}></Route>
      <Route path='/guitar' element={<Products type="guitar"/>}></Route>
      <Route path='/shoppingCart' element={< ShoppingCart/>}></Route>
      <Route path='/checkOut' element={<CheckOut />}></Route>
      <Route path='/AddToCart' element={<AddToCart />}></Route>
      <Route path='/contactUs' element={<ContactUs />}></Route>
    </Routes>

    </BrowserRouter>
</Provider>
    // <CheckOut></CheckOut>


  );
};

export default App;

