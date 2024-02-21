import React from 'react';
import sunscreen from '../Images/sunscreen_beach.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Sunscreen() {
    let back = useNavigate();

    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Toxicity of Sunscreen</h1>
            <img className='image' src={sunscreen} alt="sunscreen bottles on the beach as trash" />
            <h2>Overview</h2>
            <p className='overview'>
            Over 14 million tons of plastic go into the ocean each year. This trash is not only harmful to the animals that call the ocean home, but also
            locals living in coastal communities that depend on tourism for their economy. Learn about the impacts of trash left by tourists and what you 
            can do to reduce your impact when you travel.
            </p>
        </div>
    )   
}

export default Sunscreen;