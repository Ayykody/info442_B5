import React from 'react'
import { NavBar } from './Components/Navbar'
import Resources from './Components/Resources'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Quiz from './Components/Quiz'
import Events from './Components/Events'
import Homepage from './Components/Homepage'
import TouristTrash from './Components/TouristTrash'
import Overfishing from './Components/Overfishing'
import Coral from './Components/Coral'
import Carbon from './Components/Carbon'
import Sunscreen from './Components/Sunscreen'
import NoisePollution from './Components/NoisePollution'

export default function App(props) {  
  return (
    <div>
      <div>
        <Router>
          <NavBar />
            <Routes>
              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Homepage" element={<Homepage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/Resources/TouristTrash" element={<TouristTrash />} />
              <Route path="/Resources/Overfishing" element={<Overfishing />} />
              <Route path="/Resources/Coral" element={<Coral />} />
              <Route path="/Resources/Carbon" element={<Carbon />} />
              <Route path="/Resources/Coral" element={<Coral />} />
              <Route path="/Resources/Sunscreen" element={<Sunscreen />} />
              <Route path="/Resources/NoisePollution" element={<NoisePollution />} />
            </Routes>
        </Router>
      </div>
    </div>
  )
}

