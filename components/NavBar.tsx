'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathName = usePathname();

  return (
    <header className="sticky w-full flex-center right-0 left-0 z-20 top-0 py-5 px-3 backdrop-blur-sm bg-[rgba(136,72,232,0.12)] shadow-sm">
      <nav className="w-[90%] flex items-center justify-between gap-20">
        <Image src="/flowpal1.png" width={100} height={20} alt="flowpal-logo" />

        <ul className="w-full flex justify-evenly font-semibold space-x-6">
          {navLinks.map(({ label, route }) => {
            const isActive = pathName === route;

            return (
              <li key={route}>
                <Link
                  href={route}
                  className={`${
                    isActive ? 'text-[#8848e8] font-semibold' : 'text-gray-700'
                  } hover:text-[#8848e8] transition `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href={'/register'}>
          <Button className="bg-[#8848e8] hover:bg-complimentary">
            Get Started
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
