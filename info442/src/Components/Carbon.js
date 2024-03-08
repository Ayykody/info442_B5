import React from 'react';
import plane from '../Images/plane_emission.jpeg';
import './ResourcePages.css';
import { useNavigate } from 'react-router-dom';
import bus from '../Images/bus_beach.jpeg';

function Carbon() {
    let back = useNavigate();
    
    return(
        <div className='body'>
            <button onClick={() => back(-1)}>Back</button>
            <h1 className='header'>Carbon Footprint of Marine Tourism</h1>
            <img className='image' src={plane} alt="plane emitting emissions" />
            <h2>Overview</h2>
            <p className='overview'>
            Travel accounts for 8% of all carbon emissions across the globe, particularly from emissions from long flights
            and large ships. The planes themselves and the technologies needed to power them are incredibly pollutive.
            </p>
            <div className='part-two'>
                <div className='tips-card'>
                    <h2>General Tips to Reduce your Carbon Footprint</h2>
                    <ol>
                        <li>Book non-stop flights</li>
                            <ul>
                                <li>
                                    Booking non-stop flights is the most direct route to the desired destination. This means
                                    that the plane requires less fuel than having to switch planes mid-trip.
                                </li>
                                <li>
                                    The plane releases the most carbon during take-off and landing, and it is ideal to limit
                                    the amount of take-offs and landings during your travel.
                                </li>
                            </ul>
                        <li>Fly economy</li>
                            <ul>
                                <li>
                                    Carbon footprint is impacted by the space you take up on a plane. Economy tickets take up 
                                    about half of non-economy seats.
                                </li>
                            </ul>
                        <li>Pack lightly</li>
                            <ul>
                                <li>
                                    The heavier the luggage, the more fuel it requires. Packing lightly can reduce the fuel needed
                                    to travel long distances.
                                </li>
                            </ul>
                        <li>Research transportation options when you arrive at your location</li>
                            <ul>
                                <li>
                                    Is the bus the most efficient way to travel? Or is a train more ideal and ecofriendly and cost-efficient.
                                </li>
                            </ul>
                    </ol>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/a9yO-K8mwL0?si=bMGgz92c-bnxzs-X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )   
}

export default Carbon;