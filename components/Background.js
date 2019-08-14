import React from 'react';
import Particles from 'react-particles-js';
import defaultParticleConfig from '../assets/particle-configs/default';

const Background = () => {

  return (
    <div className="absolute inset-0 bg-indigo-800">
      <Particles
        width="100%" height="100%"
        className="h-full"
        params={defaultParticleConfig}
      />
    </div>
  );
};

export default Background;