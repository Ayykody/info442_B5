import React from 'react';
import overfish from '../Images/overfish.jpeg';
import graph_overfishing from '../Images/graph-overfishing.jpg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Overfishing() {
    let back = useNavigate();

    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
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
            <div className='part-two'>
                <div className='tips-card'>
                    <h2>General Tips to Reduce your Trash while Traveling</h2>
                    <ol>
                        <li>Reduce the use of single-use plastics</li>
                            <ul>
                                <li>
                                    You may be exploring new foods and eating out a lot, which may mean more plastic silverware. Bring some reusable
                                    silverware and wash them at the place you are staying.
                                </li>
                                <li>Bring reusable bags for your trip to use while you are shopping in the coastal communities.</li>
                            </ul>
                        <li>Research local recycling practices before you leave for your trip</li>
                            <ul>
                                <li>
                                    Depending on where you are traveling, bottled water might be the only safe option and it is important to know
                                    what to do with plastic bottles since you may be using a lot of them.
                                </li>
                                <li>
                                    Check if there are specific recycling practices in the area you are traveling to, such as what to do with food,
                                    other waste, and recyclable materials.
                                </li>
                            </ul>
                        <li>Participate in a shoreline cleanup</li>
                        <li>Pick up after yourself and others</li>
                            <ul>
                                <li>
                                    Make sure you leave with all of the items you came with and dispose of trash and recyclable materials properly.
                                </li>
                                <li>
                                    If you see trash, pick it up and dispose of it properly.
                                </li>
                            </ul>
                    </ol>
                </div>
                <img className='image-two' src={graph_overfishing} alt="pie chart of number of fish that are exploited by overfishing" />
            </div>
        </div>
    )   
}

export default Overfishing;