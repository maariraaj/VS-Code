import Header from "./components/layout/Header.jsx";
import MenuItems from "./components/itemsCard/MenuItems.jsx";
import CartProvider from './context/CartProvider.jsx';
import Cart from './components/cart/Cart.jsx';
function App() {

  return (
   <CartProvider>
    <Cart />
    <Header />
    <MenuItems />
   </CartProvider>
  )
}

export default App
