import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import Home from './components/Home';
import ComposeMail from './components/ComposeMail/ComposeMail';
import RootLayout from './components/NavBar/Root';
import Inbox from './components/Inbox/Inbox';
import SentMail from './components/SentMail/SentMail';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RootLayout />
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/compose", element: <ComposeMail /> },
        { path: "/inbox", element: <Inbox /> },
        { path: "/sent", element: <SentMail /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
