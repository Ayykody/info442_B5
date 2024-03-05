import React from 'react';
import plane from '../Images/plane_emission.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Carbon() {
    let back = useNavigate();
    
    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Carbon Footprint of Marine Tourism</h1>
            <img className='image' src={plane} alt="plane emitting emissions" />
            <h2>Overview</h2>
            <p className='overview'>
            Travel accounts for 8% of all carbon emissions across the globe, particularly from emissions from long flights
          and large ships. The planes themselves and the technologies needed to power them are incredibly pollutive.
            </p>
        </div>
    )   
}

export default Carbon;