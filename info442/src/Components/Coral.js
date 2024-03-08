import React from 'react';
import coral from '../Images/coral.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';

function Coral() {
    let back = useNavigate();

    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Degradation of Coral Reefs</h1>
            <img className='image' src={coral} alt="dried coral reefs with fish surrounding them" />
            <h2>Overview</h2>
            <p className='overview'>
            Coral reefs are essential in maintaining the unique biodiversity of the ocean, but they are becoming
            increasingly damaged due to human behavior. There are many different activities that negatively affect the reefs, such as 
            pollution, trash, and destructive fishing practices.
            </p>
            <div className='part-two'>
                <div className='tips-card'>
                    <h2>General Tips to Reduce your Impact on Coral Reefs</h2>
                    <ol>
                        <li>Choose sustainable seafood</li>
                            <ul>
                                <li>
                                    Do your research about sustainable fish options in the area you will be traveling to.
                                </li>
                            </ul>
                        <li>Conserve water usage</li>
                            <ul>
                                <li>
                                    Limiting water consumption leads to less runoff and wastewater in the oceans that harm
                                    the reefs.
                                </li>
                            </ul>
                        <li>Participate in a shoreline cleanup</li>
                        <li>If you dive, don't touch the reefs</li>
                            <ul>
                                <li>
                                    You are visiting a complex ecosystem and you should respect the environment so they can continue
                                    to prosper. 
                                </li>
                            </ul>
                        <li>Safe boating practices are important</li>
                            <ul>
                                <li>
                                    If you are planning on spending time on a boat, ensure that you will be boating in an area
                                    that is approved for boats. 
                                </li>
                            </ul>
                        <li>Pick up after yourself and others</li>
                    </ol>
                </div>
                {/* <img className='image-two' src={trash_chart} alt="pie chart of types of trash that are found in the ocean" /> */}
                {/* <div className='video-container'> */}
                    <iframe  width="560" height="315" src="https://www.youtube.com/embed/14ot4DrXdds?si=rC4rGT27KyqTvAYW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* </div> */}
            </div>
        </div>
    )   
}

export default Coral;