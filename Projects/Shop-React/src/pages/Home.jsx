// pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, onAdd }) => {
  return (
    <div>
      <h1>React Shopping Cart</h1>
      <ProductList products={products} onAdd={onAdd} />
    </div>
  );
};

export default Home;
