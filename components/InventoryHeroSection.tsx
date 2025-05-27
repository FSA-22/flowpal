import React from 'react';
import HeroTextCentent from './HeroTextCentent';
import Image from 'next/image';

const InventoryHeroSection = () => {
  return (
    <section className="relative flex items-center justify-between  px-20 bg-gradient-to-b from-purple-500 to-white min-h-screen">
      <HeroTextCentent
        buttonText="View Stock List"
        title="Smarter Inventory Smoother Business"
        detail="FLowpal helps you monitor stock levels, track product availability and receive stock alert"
      />

      <div className="relative w-6xl col max-sm:hidden md:w-1/2 flex justify-end">
        <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/hero3.jpg"
            alt="hero-Image"
            fill
            className="object-cover z-10 rounded-full"
          />
        </div>
        <div className="absolute z-0 top-0 -right-3 h-[360px] w-[383px] -rotate-30 border-1 border-[#bb48e8] rounded-full" />
      </div>
    </section>
  );
};

export default InventoryHeroSection;
