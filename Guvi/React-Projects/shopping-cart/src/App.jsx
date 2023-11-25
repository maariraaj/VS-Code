import { useState } from 'react'
import './App.css'
import Product from './Product';
import Cart from './Cart';

function App() {
  const [products] = useState([
    {id: 1, name:'Shirts', description: 'Party wear'},
    {id: 2, name:'Jeans', description: 'Western wear'},
    {id: 3, name:'Trouser', description: 'Formal wear'},
    {id: 4, name:'T Shirts', description: 'Casual wear'},
    {id: 5, name:'Boxers', description: 'Inner wear'},
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  }
  return (
    <div>
      <h1>BIYEMR Shop</h1>
      {console.log("Products: ", products)}

      {products.map(product => (
        <Product key={product.id} product={product} onAddCart={addToCart} onRemoveCart={removeFromCart}
        isInCart={cart.includes(product)}/>
      ))}

        <Cart cartItems={cart} onRemoveFromCart={removeFromCart}/>
    </div>
  )
}

export default App
