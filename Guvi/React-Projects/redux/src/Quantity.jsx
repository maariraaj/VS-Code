import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, updateAmount } from './actions';

// function Quantity({quantity, amount, increaseQuantity, decreaseQuantity, updateAmount}) {
//   React.useEffect(()=>{
//     updateAmount();
//   },[quantity, updateAmount]);

//   return (
//     <div>
//       <button onClick={decreaseQuantity}>-</button>
//       <span>Quantity : {quantity}</span>
//       <button onClick={increaseQuantity}>+</button>
//       <p>Total Amount: ${amount}</p>
//     </div>
//   );
// }


function Quantity({products, increaseQuantity, decreaseQuantity, updateAmount}) {
  // React.useEffect(()=>{
  //   updateAmount();
  // },[quantity, updateAmount]);

  // React.useEffect(()=>{
  //   products.forEach(product=>{updateAmount(product.id)})
  // },[products, updateAmount]);

  return (
    <div>
      {products.map(product=>(
        <div key={product.id}>
          <button onClick={()=>decreaseQuantity(product.id)}>-</button>
          <span>Quantity : {product.quantity}</span>
          <button onClick={()=>increaseQuantity(product.id)}>+</button>
          <p>Total Amount: ${product.amount}</p>
        </div>
      ))}
    </div>
  );
}

// const mapStateToProps=state=>({
//   quantity: state.quantity,
//   amount: state.amount
// });

const mapStateToProps=state=>({
  products: state.products
});

const mapDispatchToProps={
  increaseQuantity,
  decreaseQuantity,
  updateAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);