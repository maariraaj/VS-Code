// pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, onRemove }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Cart cart={cart} onRemove={onRemove} />
    </div>
  );
};

export default CartPage;
