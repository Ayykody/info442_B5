import React from 'react';
import plane from '../Images/plane_emission.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Carbon() {
    let back = useNavigate();
    
    return(
        <div>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Carbon Footprint of Marine Tourism</h1>
            <img className='image' src={plane} alt="plane emitting emissions" />
            <h2>Overview</h2>
            <p className='overview'>
            Over 14 million tons of plastic go into the ocean each year. This trash is not only harmful to the animals that call the ocean home, but also
            locals living in coastal communities that depend on tourism for their economy. Learn about the impacts of trash left by tourists and what you 
            can do to reduce your impact when you travel.
            </p>
        </div>
    )   
}

export default Carbon;