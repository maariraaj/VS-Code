import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar"
import Users from "./Users"
import Home from "./Home"
import Settings from "./Settings"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
