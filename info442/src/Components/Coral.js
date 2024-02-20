import React from 'react';
import coral from '../Images/coral.jpeg';
import './ResourcePages.css'

function Coral() {
    return(
        <div>
            <h1 className='header'>Degradation of Coral Reefs</h1>
            <img className='image' src={coral} alt="dried coral reefs with fish surrounding them" />
            <h2>Overview</h2>
            <p className='overview'>
            Over 14 million tons of plastic go into the ocean each year. This trash is not only harmful to the animals that call the ocean home, but also
            locals living in coastal communities that depend on tourism for their economy. Learn about the impacts of trash left by tourists and what you 
            can do to reduce your impact when you travel.
            </p>
        </div>
    )   
}

export default Coral;