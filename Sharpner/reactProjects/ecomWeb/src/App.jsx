import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Store from "./components/Store";
import RootLayout from './components/Root';
import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import ProductDetails from './components/ProductDetails';
import AuthPage from './components/AuthPage';
import { useContext } from 'react';
import CartContext from './components/cart-context';

function App() {
  const ctx = useContext(CartContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/store', element: ctx.isLoggedIn ? <Store /> : <AuthPage /> },
        { path: '/store/:productId', element: ctx.isLoggedIn ? <ProductDetails /> : <AuthPage /> },
        { path: '/about', element: <About /> },
        { path: '/contactus', element: <ContactUs /> },
        { path: '/auth', element: <AuthPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;