import React from 'react';
import overfish from '../Images/overfish.jpeg';
import './ResourcePages.css'

function Overfishing() {
    return(
        <div>
            <h1 className='header'>Overfishing in Tourist-Heavy Areas</h1>
            <img className='image' src={overfish} alt="large net surrounds thousands of fish" />
            <h2>Overview</h2>
            <p className='overview'>
                Overfishing happens when too many of one species of fish are caught and there are not enough
                adult fish to continue to populate the species. This is not only harmful to the fish and the
                marine life that rely on them, but also the coastal communities that utilize them for feeding
                tourists. Overfishing can also significantly impact the complex biodiversity of the ocean due
                to the wide array of marine life that are caught (intentionally or unintentionally).  
            </p>
            <h2>World Wildlife Fund's Guide to Sustainable Seafood</h2>
        </div>
    )   
}

export default Overfishing;