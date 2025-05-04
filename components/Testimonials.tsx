'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { testimonials } from '@/constants';
import Image from 'next/image';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const start = currentPage * itemsPerPage;
  const currentItems = testimonials.slice(start, start + itemsPerPage);

  return (
    <section className="w-full flex flex-col items-center gap-8">
      <div className="bg-[#e1a2fa9a] text-[#bb48e8] font-semibold md:px-2 md:py-3">
        <p>Testimonials</p>
      </div>

      <h1 className="text-gray-900 font-bold text-2xl">
        Hear What Our Users Say
      </h1>

      <p className="text-center text-gray-600 w-3/4">
        Trusted by small business owners just like you! See how financial
        management platforms has helped businesses streamline their operations,
        boost profits and stay in control of their finances.
      </p>

      <div className="flex overflow-hidden space-x-8 w-full justify-center">
        {currentItems.map(({ avatarUrl, name, text, id, position }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center text-center gap-4 bg-[#f8c0ea] p-6 rounded-md shadow-md w-75 transition-transform duration-500"
          >
            <Image
              src={avatarUrl}
              width={50}
              height={50}
              alt="avatar"
              className="rounded-full h-15 w-15 object-cover"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <h4 className="text-lg font-semibold text-gray-700">
                {position}
              </h4>
            </div>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 mt-2">
        {Array.from({ length: itemsPerPage }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentPage % itemsPerPage
                ? 'bg-[#bb46e8]'
                : 'bg-[#d19fe6]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
