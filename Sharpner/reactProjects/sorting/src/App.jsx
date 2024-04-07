import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList.jsx';
import Button from './components/UI/Button/Button.jsx';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const [buttonTitle, setButtonTitle] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeButtonTitleHandler=()=>{
    setButtonTitle((prev) => !prev);
  }

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sorting={buttonTitle} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>

      <Button onClick={changeButtonTitleHandler}>{buttonTitle ? 'Change to descending order' : 'Change to ascending order'}</Button>
    </div>
  );
}

export default App;