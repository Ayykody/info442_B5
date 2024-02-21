import React from 'react';
import noise from '../Images/boat_noise.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function NoisePollution() {
    let back = useNavigate();

    return(
        <div>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Overfishing in Tourist-Heavy Areas</h1>
            <img className='image' src={noise} alt="fish underwater with a boat approaching" />
            <h2>Overview</h2>
            <p className='overview'>
                Noise pollution from boats may have many unintended negative consequences on the 
                marine life in the ocean. Studies have shown that noise from human activity in the 
                ocean can cause developmental delays in some species and anatomical impacts such as
                severe internal injuries.    
            </p>
        </div>
    )   
}

export default NoisePollution;