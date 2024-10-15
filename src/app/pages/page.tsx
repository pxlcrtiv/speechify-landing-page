// src/app/page.tsx
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero'; // Using @ alias
import Features from '@/components/Features'; // Using @ alias
import Testimonials from '@/components/Testimonials'; // Using @ alias
import Pricing from '@/components/Pricing'; // Using @ alias
import Footer from '@/components/Footer'; // Using @ alias

const HomePage: React.FC = () => {
  return (
    <>
    <Head>
        <title>Speechify - Listen to the World’s Information</title>
        <meta name="description" content="Speechify is the easiest way to listen to the world’s information." />
        <meta property="og:title" content="Speechify" />
        <meta property="og:description" content="Listen to the world’s information effortlessly." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://www.speechify.com" />
    </Head>
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />  {/* Add the Pricing component here */}
      <Footer />
    </main>
    </>
  );
};

export default HomePage;