import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Store from "./components/Store";
import RootLayout from './components/Root';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Store /> },
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