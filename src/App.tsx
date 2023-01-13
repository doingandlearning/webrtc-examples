import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GetUserMedia from './pages/GetUserMedia'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getusermedia" element={<GetUserMedia />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
