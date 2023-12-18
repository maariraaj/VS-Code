import React from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/front/Routes/Routess';

const App = () => {

  const {productItems}=data;
  return (
    <div>
      <Router>
      <Header />
      <Routes />
      </Router>
    </div>
  )
}

export default App
