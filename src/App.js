import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'

function App() {
  const productList = [
  {
    price:99999,
    name:"Iphone 10S Max",
    quantity:0,
  },
  {
    price:9999,
    name:"Redmi Note 10S Max",
    quantity:0,
  }]
  return (
    <>
    <Navbar/>
    <ProductList productList={product}/>
    </>
  );
}

export default App;
