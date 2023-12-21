import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import List from './List';
import Create from './Create';
import Edit from './Edit';

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' exact Component={List}></Route>
        <Route path='/create' Component={Create}></Route>
        <Route path='/edit/:id' exact Component={Edit}></Route>
      </Routes>
    </Router>
  );
}

export default App;
