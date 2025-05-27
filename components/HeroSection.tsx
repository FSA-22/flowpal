import React from 'react';
import HeroTextCentent from './HeroTextCentent';

const HeroSection = () => {
  return (
    <section className="relative flex items-center px-10 bg-[url('/hero1.jpg')] bg-cover bg-no-repeat bg-center h-screen">
      <HeroTextCentent
        buttonText="Get Started for free"
        title="Simplify Your Business Finance"
        detail="Say goodbye to mannual spreadsheet! Track profits, manage Inventory, and generate invoices effortlessly"
      />
    </section>
  );
};

export default HeroSection;
