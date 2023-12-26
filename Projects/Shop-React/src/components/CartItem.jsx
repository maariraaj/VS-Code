// components/CartItem.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price * item.quantity}</p>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
