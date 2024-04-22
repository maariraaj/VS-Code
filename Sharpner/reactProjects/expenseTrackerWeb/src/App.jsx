import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ExpenseContext from './exp-context/expense-context';
import Expense from './components/Expense';
import AuthPage from './components/AuthPage';

function App() {
  const ctx = useContext(ExpenseContext);

  const router = createBrowserRouter([
    {path: '/', element: <AuthPage />},
    {path: '/expense', element: <Expense />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
