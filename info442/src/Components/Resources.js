import React from 'react';
import ResourceCard from './ResourceCard';
import './ResourceCard.css'
import trash from '../Images/trash.jpg';
import overfishing from '../Images/overfishing.jpeg';
import noise from '../Images/noise_pollution.png';
import reefs from '../Images/reefs.webp';
import footprint from '../Images/plane.jpeg';
import sunscreen from '../Images/sunscreen.png';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="card-container">
      <h1 className='header'>Explore our Resources!</h1>
      <h2 className='header'>Click on a card below to learn more about these topics and how to minimize your negative impact while traveling.</h2>
      <Link to="/Resources/touristtrash">
        <ResourceCard
          title="Trash Left Behind by Tourists"
          description="Over 13 million tons of plastic go into the ocean each year. Learn about the impacts of 
          trash left by tourists and what you can do to reduce your impact when you travel."
          imageLocation={trash}
        />
      </Link>
      <Link to="/Resources/overfishing">
        <ResourceCard
          title="Overfishing in Tourist-Heavy Areas"
          description="Overfishing happens when too many of one species of fish are caught and there are not enough
          adult fish to continue to populate the species. Click here to learn about how to ensure that fishing
          practices are sustainable."
          imageLocation={overfishing}
        />
      </Link>
      <Link to="/Resources/noisepollution">
        <ResourceCard
          title="Noise Pollution from Tour Boats"
          description="Noise pollution from boats may have many unintended negative consequences on the 
          marine life in the ocean. Learn more about why it's harmful and what you can do."
          imageLocation={noise}
        />
      </Link>
      <Link to="/Resources/coral">
        <ResourceCard
          title="Degradation of Coral Reefs"
          description="Coral reefs are essential in maintaining the unique biodiversity of the ocean, but they are becoming
          increasingly damaged due to human behavior. Learn more about how to reduce your impact on the reefs."
          imageLocation={reefs}
        />
      </Link>
      <Link to="/Resources/carbon">
        <ResourceCard
          title="Carbon Footprint of Marine Tourism"
          description="Travel accounts for 8% of all carbon emissions across the globe, particularly from emissions from long flights
          and large ships. Click here to learn more about how to reduce your carbon footprint while traveling."
          imageLocation={footprint}
        />
      </Link>
      <Link to="/Resources/sunscreen">
        <ResourceCard
          title="Toxicity of Sunscreen"
          description="Some sunscreens contain ingredients that are harmful to the ocean's unique ecosystem. Learn more about how to 
          avoid toxic sunscreens."
          imageLocation={sunscreen}
        />
      </Link>
    </div>
  );
}

export default Resources;