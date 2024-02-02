import Header from "./components/layout/Header.jsx";
import MenuItems from "./components/itemsCard/MenuItems.jsx";
import CartProvider from './context/CartProvider.jsx';
import Modal from "./components/layout/Modal.jsx";
import { useState } from "react";

function App() {
  const [toggleCart, setToggleCart]=useState(false);

  const toggleCartHandler=()=>{
    setToggleCart(prevState => !prevState);
  }
  const closeCartHandler=()=>{
    setToggleCart(false);
  }

  return (
  <>
    <CartProvider>
      {toggleCart && <Modal onClose={closeCartHandler} />}
      <Header onToggle={toggleCartHandler} />
      <MenuItems />
    </CartProvider>
   </>
  )
}

export default App
