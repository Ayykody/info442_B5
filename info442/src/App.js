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
import Sailing from './Components/Sailing'
import CoralReefDetail from './Components/CoralReefDetail'
import YogaDetail from './Components/YogaDetail'
import FishingDetail from './Components/FishingDetail'
import CleanupDetail from './Components/CleanupDetail'
import WildlifeDetail from './Components/WildlifeDetail'

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
              <Route path="/Events/CoralReef" element={<CoralReefDetail />} />
              <Route path="/Events/Yoga" element={<YogaDetail />} />
              <Route path="/Events/Fishing" element={<FishingDetail />} />
              <Route path="/Events/Cleanup" element={<CleanupDetail />} />
              <Route path="/Events/Sailing" element={<Sailing />} />
              <Route path="/Events/Wildlife" element={<WildlifeDetail />} />
            </Routes>
        </Router>
      </div>
    </div>
  )
}

