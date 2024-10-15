// src/app/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
    const testimonialsList = [
      { name: 'John Doe', text: 'Speechify has changed my life!', rating: 5 },
      { name: 'Jane Smith', text: 'A fantastic tool for learning.', rating: 4 },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Testimonials</h2>
        <div className="flex flex-col items-center mt-10">
          {testimonialsList.map((testimonial, index) => (
            <blockquote key={index} className="m-4 p-6 border-l-4 border-blue-500 bg-white rounded shadow-md">
              <p className="italic">"{testimonial.text}"</p>
              <footer className="mt-2 font-semibold">- {testimonial.name}</footer>
              <div className="flex mt-1">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-500">⭐</span>
                ))}
              </div>
            </blockquote>
          ))}
        </div>
      </section>
    );
  };

export default Testimonials;