import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/getData-slice';

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [])
  return (
    <div>Welcome to your mail box</div>
  )
}

export default Home