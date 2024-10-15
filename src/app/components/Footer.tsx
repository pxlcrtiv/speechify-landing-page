// src/app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://twitter.com/speechify" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com/speechify" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com/speechify" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6 hover:scale-110 transition-transform" />
          </a>
        </div>
        <p>&copy; 2024 Speechify. All rights reserved.</p>
      </footer>
    );
  };

export default Footer;