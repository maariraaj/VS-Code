import React, { useContext} from 'react'
import AddToShop from './components/AddToShop'
import ProductList from './components/ProductList';
import authContext from './auth-context';

function App() {

  const ctx=useContext(authContext);
  return (
    <React.Fragment>
      <h1>VEG SHOP</h1>
      <AddToShop />
      <ProductList />
      <h2>Total: {ctx.data.length}</h2>
    </React.Fragment>
  )
}

export default App

