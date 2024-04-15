import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Store from "./components/Store";
import RootLayout from './components/Root';
import About from './components/About';
import Home from './components/Home';
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/about', element: <About /> },
      { path: '/contactus', element: <ContactUs /> }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;