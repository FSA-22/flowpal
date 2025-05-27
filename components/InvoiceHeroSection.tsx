import React from 'react';
import HeroTextCentent from './HeroTextCentent';
import Image from 'next/image';

const InvoiceHeroSection = () => {
  return (
    <section className="relative flex items-center gap-4 justify-between max-sm:justify-center px-20 bg-gradient-to-b from-purple-500 to-white min-h-screen">
      <HeroTextCentent
        buttonText="Create A New Receipt"
        title="Generate & Manage Receipt In Seconds"
        detail="Create professional ddigital receipts effortlessly. Track and share transaction recordsn-no paperwork required"
      />

      <div className="relative w-full md:w-1/2 max-md:hidden flex justify-end">
        <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/hero4.jpg"
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

export default InvoiceHeroSection;
