import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ExpenseContext from './exp-context/expense-context';
import AuthPage from './components/AuthPage';
import Profile from './components/profile/Profile';
import UpdateProfile from './components/profile/UpdateProfile';
import ResetPassword from './components/ResetPassword';


function App() {
  const ctx = useContext(ExpenseContext);

  const router = createBrowserRouter([
    { path: '/', element: <AuthPage /> },
    { path: '/profile', element: ctx.isLoggedIn ? <Profile /> : <AuthPage /> },
    { path: '/updateProfile', element: ctx.isLoggedIn ? <UpdateProfile /> : <AuthPage /> },
    { path: '/resetPassword', element: ctx.isLoggedIn ? <Profile /> : <ResetPassword /> }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;