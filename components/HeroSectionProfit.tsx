import React from 'react';
import HeroTextCentent from './HeroTextCentent';

const HeroSectionProfit = () => {
  return (
    <section className="relative flex items-center justify-end px-20 max-sm:px-10 bg-[url('/hero2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <HeroTextCentent
        buttonText="Get Started"
        title="Make Smart Business Decisions"
        detail="With our real-time profit overview, you can instantly see how much you are making each day."
      />
    </section>
  );
};

export default HeroSectionProfit;
