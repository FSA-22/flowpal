import { whyChooseUs } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white flex flex-col gap-16">
      <div className="flex flex-col max-w-7xl mx-auto md:px-25 md:mt-20 md:flex-row items-center justify-between gap-20 w-full">
        <div className="relative w-full md:w-[350px] h-[355px] flex justify-center">
          <Image
            className="rounded-xl object-cover shadow-lg object-left"
            src="/aboutus.jpg"
            alt="Team working together"
            fill
          />
          <div className="absolute bottom-8 -right-28 h-[190px] p-2">
            <div className="absolute -top-4 left-26 w-6 h-3 bg-[#bb48e8] rounded" />
            <Image
              className="rounded-md h-full"
              src="/brainstorm.jpg"
              width={186}
              height={170}
              alt="Brainstorming"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-start ">
            <p className="px-4 py-4 font-semibold text-[#9700d3] bg-[#e6a7ff9a]">
              About Us
            </p>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
            Empowering Small Businesses with Smart Financial Tools
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            At FlowPal, we understand the unique challenges small business
            owners face in managing their finances. Many still rely on outdated
            spreadsheets—leading to errors and inefficiency.
          </p>
          <div className="relative pl-6 border-l-4 border-[#bb48e8]">
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              Our mission is simple: empower business owners to take control of
              their finances with ease. From real-time profit tracking to
              intelligent inventory and seamless invoicing—we have got it all
              covered.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e6a7ff9a] py-16 px-6 md:py-20 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 relative z-10">
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
            <p className="md:text-lg font-medium text-[#bb48e8]">
              -- Why Choose Us
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-snug">
              Run Your Business Like a Boss, We have Got Your Finance.
            </h2>

            <p className="text-base md:text-lg text-gray-700">
              We make financial management easy, so you can focus on growing
              your business
            </p>

            <ul className="space-y-2">
              {whyChooseUs.map(({ id, label }) => (
                <li key={id} className="flex items-start gap-2">
                  <div className="bg-[#b61ef1] p-1 rounded-full">
                    <Check className="w-4 h-4 font-bold text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full md:w-1/2 flex justify-end">
            <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/chooseus.jpg"
                alt="Why Choose Us"
                fill
                className="object-fit object-cover z-10 rounded-full"
              />
            </div>
            <div className="absolute z-0 top-0 -right-3 h-[99%] w-[74%] -rotate-19 border-1 border-[#bb48e8] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
