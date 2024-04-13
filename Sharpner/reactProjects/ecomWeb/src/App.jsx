import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from "./components/Products";
import RootLayout from './components/Root';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/about', element: <About /> }
    ]
  }
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App;