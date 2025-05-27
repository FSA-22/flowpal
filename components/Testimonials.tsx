'use client';

import { useEffect, useState } from 'react';
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
    <section className="mt-20 w-full flex flex-col items-center gap-8 px-4">
      <div className="bg-[#e1a2fa9a] text-[#bb48e8] font-semibold px-2 py-3">
        <p>Testimonials</p>
      </div>

      <h1 className="text-gray-900 font-bold text-2xl text-center">
        Hear What Our Users Say
      </h1>

      <p className="text-center text-gray-600 max-w-3xl">
        Trusted by small business owners just like you! See how financial
        management platforms have helped businesses streamline operations, boost
        profits, and stay in control of their finances.
      </p>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {currentItems.map(({ avatarUrl, name, text, id, position }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center gap-4 bg-[#f8c0ea] p-6 rounded-md shadow-md max-w-sm w-full transition-transform duration-500"
          >
            <Image
              src={avatarUrl}
              width={50}
              height={50}
              alt="avatar"
              className="rounded-full object-cover"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <h4 className="text-sm font-medium text-gray-700">{position}</h4>
            </div>
            <p className="text-gray-600 text-sm">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 mt-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentPage ? 'bg-[#bb46e8]' : 'bg-[#d19fe6]'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
