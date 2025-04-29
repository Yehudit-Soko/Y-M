import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';
import HomePage from './pages/HomePage';
function App() {
  return (
    // <HomePage></HomePage>
      <Products></Products>

  );
};

export default App;

