// src/app/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Speechify</h1>
        <p className="mt-4 text-lg md:text-xl">Listen to the world’s information effortlessly.</p>
        <button 
          className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded transition duration-300 hover:bg-gray-200"
          onClick={() => /* Navigate to sign up */} 
          aria-label="Get started with Speechify"
        >
          Get Started
        </button>
      </section>
    );
  };

export default Hero;