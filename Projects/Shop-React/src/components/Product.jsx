// components/Product.js
import React from 'react';

const Product = ({ product, onAdd }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
