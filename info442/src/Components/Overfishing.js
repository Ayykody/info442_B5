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
                        <li>Try catch and release fishing</li>
                            <ul>
                                <li>
                                    Releasing fish instead of keeping them to eat or for sport ensures that the fish can continue to reprodcuce and
                                    prosper in the ocean.
                                </li>
                                <li>Research fishing equipment that is ideal for catch and release fishing.</li>
                            </ul>
                        <li>Research local fishing guidelines</li>
                            <ul>
                                <li>
                                    Depending on where you are traveling, there are different rules for fishing. Make sure you are going to be
                                    fishing in an area in which fishing is permitted.
                                </li>
                                <li>
                                    Make sure you know what fish are allowed to be caught and which ones are against the rules.
                                </li>
                            </ul>
                        <li>If you plan to use the fish, practice this responsibly and only keep what you will use.</li>
                    </ol>
                </div>
                <img className='image-two' src={graph_overfishing} alt="pie chart of number of fish that are exploited by overfishing" />
            </div>
        </div>
    )   
}

export default Overfishing;