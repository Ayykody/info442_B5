import React from 'react';
import beach_trash from '../Images/beach_trash.jpeg';
import './ResourcePages.css'

function TouristTrash() {
    return(
        <div>
            <h1 className='header'>Trash Left Behind by Tourists</h1>
            <img className='image' src={beach_trash} alt="trash scattered on the beach" />
            <h2>Overview</h2>
            <p className='overview'>
            Over 14 million tons of plastic go into the ocean each year. This trash is not only harmful to the animals that call the ocean home, but also
            locals living in coastal communities that depend on tourism for their economy. Learn about the impacts of trash left by tourists and what you 
            can do to reduce your impact when you travel.
            </p>
        </div>
    )   
}

export default TouristTrash;