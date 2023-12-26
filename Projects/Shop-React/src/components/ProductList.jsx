// components/ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAdd }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
