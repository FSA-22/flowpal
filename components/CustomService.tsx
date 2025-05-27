'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

type CustomServiceProp = {
  iconPath: string;
  pagePath: string;
  head: string;
  description: string;
  buttonText: string;
};

const CustomService: React.FC<CustomServiceProp> = ({
  pagePath,
  iconPath,
  head,
  buttonText,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between bg-[#bb48e8] text-white rounded-[4px] h-[320px] md:h-[260px] w-full max-w-[280px] p-6 md:p-4">
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex items-center justify-center bg-white w-10 h-10 p-2 rounded">
          <Image
            src={iconPath}
            height={40}
            width={40}
            alt="icon"
            className="object-contain"
          />
        </div>
        <h2 className="text-lg md:text-base font-semibold">{head}</h2>
        <p className="text-sm text-white/80">{description}</p>
      </div>

      <div className="pt-4">
        <Link href={pagePath}>
          <Button className="w-full bg-white text-[#bb48e8] hover:bg-fuchsia-500 hover:text-white text-sm">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomService;
