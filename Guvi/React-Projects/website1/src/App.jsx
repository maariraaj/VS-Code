import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Post from './Post'
import Products from './Products'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path='/post' element={<Post />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
