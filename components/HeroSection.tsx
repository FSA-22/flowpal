import React from 'react'
import HeroTextCentent from './HeroTextCentent';


const Hero = () => {
  return (
    <section className="relative flex flex-start items-center px-20 bg-[url('/hero1.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="absolute inset-0 bg-black/30" />
      <div className='p-18'>
        <HeroTextCentent buttonText='Get Started for free' title='Simplify Your Business Finance' detail='Say goodbye to mannual spreadsheet! Track profits, manage Inventory, and generate invoices effortlessly' />
      </div>
    </section>
  );
}

export default Hero;