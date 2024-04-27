import { Fragment } from 'react';
import Counter from './components/Counter.jsx';
import Auth from './components/Auth.jsx';
import Header from './components/Header.jsx';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile.jsx';



function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
