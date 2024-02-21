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
            <div className='tips-card'>
                <h2>General Tips to Reduce your Trash while Traveling</h2>
                <ol>
                    <li>Reduce the use of single-use plastics</li>
                        <ul>
                            <li>You may be exploring new foods and eating out a lot, which may mean more plastic silverware. Bring some reusable
                                silverware and wash them at the place you are staying.
                            </li>
                            <li>Bring reusable bags for your trip to use while you are shopping in the coastal communities.</li>
                        </ul>
                    <li>Research local recycling practices before you leave for your trip</li>
                </ol>
            </div>
        </div>
    )   
}

export default TouristTrash;