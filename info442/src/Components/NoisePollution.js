import React from 'react';
import noise from '../Images/boat_noise.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function NoisePollution() {
    let back = useNavigate();

    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Noise Pollution from Tour Boats</h1>
            <img className='image' src={noise} alt="fish underwater with a boat approaching" />
            <h2>Overview</h2>
            <p className='overview'>
                Noise pollution from boats may have many unintended negative consequences on the 
                marine life in the ocean. Studies have shown that noise from human activity in the 
                ocean can cause developmental delays in some species and anatomical impacts such as
                severe internal injuries. Additionally, sound is an important means of communication
                for marine animals. These sounds can be masked by activity from humans, disrupting
                the main means of communication for animals under water.
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0DtvfX8L0dU?si=_P1c_4S4_GgQuTcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )   
}

export default NoisePollution;