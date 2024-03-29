import React from 'react';
import beach_trash from '../Images/beach_trash.jpeg';
import trash_chart from '../Images/trash_chart.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function TouristTrash() {
    let back = useNavigate();

    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Trash Left Behind by Tourists</h1>
            <img className='image' src={beach_trash} alt="trash scattered on the beach" />
            <h2 className='overview-title'>Overview</h2>
            <p className='overview'>
            Over 13 million tons of plastic go into the ocean each year. This trash is not only harmful to the animals that call the ocean home, but also
            locals living in coastal communities that depend on tourism for their economy. The debris that ends up in our oceans can range from 
            microplastics to large marine debris. No matter the size of the trash that is left by humans, it adds up and creates a negative impact on the
            marine life and ecosystems that make our oceans biodiverse. Learn about the impacts of trash left by tourists and what you can do to reduce 
            your impact when you travel.
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
                <img className='image-two' src={trash_chart} alt="pie chart of types of trash that are found in the ocean" />
            </div>
        </div>
    )   
}

export default TouristTrash;