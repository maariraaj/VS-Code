import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ExpenseContext from './exp-context/expense-context';
import AuthPage from './components/AuthPage';
import Profile from './components/profile/Profile';
import UpdateProfile from './components/profile/UpdateProfile';

function App() {
  const ctx = useContext(ExpenseContext);

  const router = createBrowserRouter([
    {path: '/', element: <AuthPage />},
    {path: '/profile', element: <Profile />},
    {path: '/updateProfile', element: <UpdateProfile />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
