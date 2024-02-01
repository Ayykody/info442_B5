import React from 'react'
import { NavBar } from './Components/NavBar'
import Resources from './Components/Resources'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

export default function App(props) {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  )
}

