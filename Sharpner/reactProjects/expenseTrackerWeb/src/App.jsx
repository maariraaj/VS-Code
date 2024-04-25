import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ExpenseContext from './exp-context/expense-context';
import AuthPage from './components/authentication/AuthPage';
import Profile from './components/profile/Profile';
import UpdateProfile from './components/profile/UpdateProfile';
import ResetPassword from './components/authentication/ResetPassword';
import Expenses from './components/expense/Expenses';
import RootLayout from './components/navigation/Root';


function App() {
  const ctx = useContext(ExpenseContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RootLayout />
      ),
      children: [
        { path: '/', element: <AuthPage /> },
        { path: '/profile', element: ctx.isLoggedIn ? <Profile /> : <AuthPage /> },
        { path: '/updateProfile', element: ctx.isLoggedIn ? <UpdateProfile /> : <AuthPage /> },
        { path: '/resetPassword', element: ctx.isLoggedIn ? <Profile /> : <ResetPassword /> },
        { path: '/expenses', element: ctx.isLoggedIn ? <Expenses /> : <AuthPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
