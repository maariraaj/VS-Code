import React, { useState } from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/front/Routes/Routes';

const App = () => {

  const {productItems}=data;
  const [cartItems, setCartItems]=useState([]);

  const handleAddProduct=(product)=>{
    const productExist=cartItems.find((item)=> item.id===product.id);
    if(productExist){
      setCartItems(cartItems.map((item)=>item.id===product.id ?
      {...productExist, quantity: productExist.quantity +1} : item));
    }else{
      setCartItems([...cartItems, {...product, quantity:1}])
    }
  }
  return (
    <div>
      <Router>
      <Header />
      <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} />
      </Router>
    </div>
  )
}

export default App
