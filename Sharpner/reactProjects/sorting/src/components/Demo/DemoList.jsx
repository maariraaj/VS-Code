import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items, sorting } = props;

  const arr = [...items];

  const sortedList = useMemo(() => {
    console.log('Items sorted');

    if (sorting) {
      return arr.sort((a, b) => a - b);
    } else {
      return arr.sort((a, b) => b - a);
    }
  }, [arr]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);