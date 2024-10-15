// src/app/components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
    const featuresList = [
      { title: 'Feature 1', description: 'Description of Feature 1.', icon: '🔊' },
      { title: 'Feature 2', description: 'Description of Feature 2.', icon: '⚡' },
      { title: 'Feature 3', description: 'Description of Feature 3.', icon: '🌐' },
    ];
  
    return (
      <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Features</h2>
        <div className="flex flex-wrap justify-center mt-10">
          {featuresList.map((feature, index) => (
            <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
              <p className="mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Features;