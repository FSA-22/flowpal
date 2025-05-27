import Image from 'next/image';
import React from 'react';
import HeroTextCentent from './HeroTextCentent';

const ExpensesHero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-5 md:px-20 bg-gradient-to-b from-purple-500 to-white min-h-screen">
      <div className="relative w-full md:w-1/2 flex justify-start order-1 md:order-none mb-10 md:mb-0">
        <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/hero4.jpg"
            alt="hero-Image"
            fill
            className="object-cover z-10 rounded-full"
          />
        </div>
        <div className="absolute z-0 -top-0 -left-5 h-[360px] w-[395px] -rotate-40 border-1 border-[#bb48e8] rounded-full" />
      </div>

      {/* Text on the right */}
      <HeroTextCentent
        buttonText="Track Expenses"
        title="Take Control Of Your Business Finances"
        detail="Effortless expense tracking, smarter financial decisions for your business growth."
      />
    </section>
  );
};

export default ExpensesHero;
