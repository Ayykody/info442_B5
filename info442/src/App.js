import React from 'react'
import { NavBar } from './Components/Navbar'
import Resources from './Components/Resources'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Quiz from './Components/Quiz'
import Events from './Components/Events'

export default function App(props) {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  )
}

