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
        <h1 >Student Manager</h1>
        <div>All Students:{ctx.data.length} </div>
        <button onClick={ctx.onShow}>Add New Student</button>
      </div>
      <hr />
      <h1>All Students</h1>
      <PostList />
    </Fragment>
  )
}

export default App
