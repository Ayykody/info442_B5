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
            Sunscreen is very important to protect your skin when spending time outside, but it is important to consider
            what is getting washed off into the ocean and on the coral. ABout 4,000 to 6,000 tons of sunscreen goes into the
            oceans every year. Surprisingly, many sunscreens contain harmful ingredients. This can result in harming coral reefs
            and causing bleaching. Chemicals such as oxybenzone, octinoxate, and avobenzone harms an essential part of the 
            ocean's ecosystem.
            </p>
            <div className='part-two'>
                <div className='tips-card'>
                    <h2>General Tips to Avoid Toxic Sunscreens</h2>
                    <ol>
                        <li>Look for sunscreens with only zinc oxide or titanium oxide</li>
                            <ul>
                                <li>
                                    There are two types of sunscreens: physical and chemical. Physical sunscreens only contain the
                                    minerals listed above, while chemical sunscreens use synthetic compounds.
                                </li>
                            </ul>
                        <li>Avoid sunscreens with the following chemicals:</li>
                            <ul className="ingredients">
                                <li>
                                    Oxybenzone  
                                </li>
                                <li>
                                    Benzophenone-1  
                                </li>
                                <li>
                                    Benzophenone-8  
                                </li>
                                <li>
                                    OD-PABA  
                                </li>
                                <li>
                                    4-Methylbenzylidene camphor  
                                </li>
                                <li>
                                    3-Benzylidene camphor  
                                </li>
                                <li>
                                    Nano-Titanium dioxide 
                                </li>
                                <li>
                                    Nano-Zinc oxide 
                                </li>
                                <li>
                                    Octinoxate 
                                </li>
                                <li>
                                    Octocrylene 
                                </li>
                            </ul>
                        <li>Use an umbrella and sunhat for added protection</li>
                    </ol>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GbMfgUk4SII?si=zkNWsTRYkQivIT-W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )   
}

export default Sunscreen;