import { Fragment, useContext } from 'react'
import Home from './components/Home';
import FormContext from './components/form-context';
import PostList from './components/PostList';

function App() {
  const ctx = useContext(FormContext);

  return (
    <Fragment>
      {ctx.formIsShown && <Home />}
      <div style={{ textAlign: 'center' }}>
        <h1 >Blog Website</h1>
        <button onClick={ctx.onShow}>Add New Blog</button>
      </div>
      <hr />
      <PostList />
    </Fragment>
  )
}

export default App
