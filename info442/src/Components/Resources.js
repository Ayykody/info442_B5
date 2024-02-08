import React from 'react';
import ResourceCard from './ResourceCard';
import trash from '../Images/trash.jpg';
import overfishing from '../Images/overfishing.jpeg';
import noise from '../Images/noise_pollution.png';
import reefs from '../Images/reefs.jpeg';
import footprint from '../Images/carbon_footprint.jpeg';
import sunscreen from '../Images/sunscreen.png';

function Resources() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '80px' }}>
      <ResourceCard
        title="Trash Left Behind by Tourists"
        description="Description."
        imageLocation={trash}
      />
      <ResourceCard
        title="Overfishing in Tourist-Heavy Areas"
        description="Description."
        imageLocation={overfishing}
      />
      <ResourceCard
        title="Noise Pollution from Tour Boats"
        description="Description."
        imageLocation={noise}
      />
      <ResourceCard
        title="Degradation of Coral Reefs"
        description="Description."
        imageLocation={reefs}
      />
      <ResourceCard
        title="Carbon Footprint of Marine Tourism"
        description="Description."
        imageLocation={footprint}
      />
      <ResourceCard
        title="Toxicity of Sunscreen"
        description="Description."
        imageLocation={sunscreen}
      />
    </div>
  );
}

export default Resources;