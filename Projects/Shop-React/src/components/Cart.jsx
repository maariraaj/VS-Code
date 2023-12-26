// components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemove }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;
