import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Admin from './components/Admin'
import Inicio from './components/Inicio'
import Menu from './components/Menu'

function App() {
  return (
    <div>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
