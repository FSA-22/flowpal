'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';

const NavBar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky w-full right-0 left-0 z-20 top-0 py-5 px-3 backdrop-blur-sm bg-[rgba(136,72,232,0.12)] shadow-sm">
      <nav className="w-[90%] mx-auto flex items-center justify-between gap-6">
        <Image src="/flowpal1.png" width={100} height={20} alt="flowpal-logo" />

        <ul className="hidden md:flex flex-1 justify-center font-semibold space-x-6">
          {navLinks.map(({ label, route }) => {
            const isActive = pathName === route;
            return (
              <li key={route}>
                <Link
                  href={route}
                  className={`${
                    isActive ? 'text-[#8848e8] font-semibold' : 'text-gray-700'
                  } hover:text-[#8848e8] transition`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/register">
            <Button className="bg-[#8848e8] hover:bg-complimentary">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="w-6 h-6 text-[#8848e8]" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white w-3/4">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              </SheetHeader>

              <div className="mt-5 mx-10 space-y-6">
                {navLinks.map(({ label, route }) => {
                  const isActive = pathName === route;
                  return (
                    <Link
                      key={route}
                      href={route}
                      onClick={closeSheet}
                      className={`block text-lg font-medium ${
                        isActive ? 'text-[#8848e8]' : 'text-gray-800'
                      } hover:text-[#8848e8]`}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Link href="/register" onClick={closeSheet}>
                  <Button className="w-full bg-[#8848e8] hover:bg-fuchsia-600">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
