import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GetUserMedia from './pages/GetUserMedia'
import GetUserMediaWithCanvas from './pages/GetUserMediaWithCanvas'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getusermedia" element={<GetUserMedia />} />
          <Route path="getusermediacanvas" element={<GetUserMediaWithCanvas />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
