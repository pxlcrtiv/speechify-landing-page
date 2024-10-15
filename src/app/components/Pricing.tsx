// src/app/components/Pricing.tsx
import React from 'react';

const Pricing: React.FC = () => {
    const pricingPlans = [
      {
        name: 'Basic',
        price: '$9.99/month',
        features: ['Access to basic features', 'Email support', 'Limited usage'],
        popular: false,
      },
      {
        name: 'Pro',
        price: '$19.99/month',
        features: ['Access to all features', 'Priority email support', 'Unlimited usage'],
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Contact Us',
        features: ['Customized features', 'Dedicated account manager', 'Enterprise-level support'],
        popular: false,
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center mt-10">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`m-4 p-6 bg-white rounded-lg shadow-lg w-72 transition-transform transform ${plan.popular ? 'border-2 border-blue-500' : ''} hover:scale-105`}
            >
              <h3 className="text-2xl font-semibold text-center">{plan.name}</h3>
              <p className="text-xl font-bold text-center mt-2">{plan.price}</p>
              <ul className="mt-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-blue-500">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded transition duration-300 hover:bg-blue-600"
                onClick={() => /* Handle plan selection */} 
                aria-label={`Choose the ${plan.name} plan`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Pricing;