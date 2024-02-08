import React from 'react';
import ResourceCard from './ResourceCard';

function Resources() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '80px' }}>
      <ResourceCard
        title="Trash Left Behind by Tourists"
        description="Description."
      />
      <ResourceCard
        title="Overfishing in Tourist-Heavy Areas"
        description="Description."
      />
      <ResourceCard
        title="Noise Pollution from Tour Boats"
        description="Description."
      />
      <ResourceCard
        title="Degradation of Coral Reefs"
        description="Description."
      />
      <ResourceCard
        title="Carbon Footprint of Marine Tourism"
        description="Description."
      />
      <ResourceCard
        title="Toxicity of Sunscreen"
        description="Description."
      />
    </div>
  );
}

export default Resources;