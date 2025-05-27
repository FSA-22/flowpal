'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type HeroTextCententProp = {
  title: string;
  detail: string;
  buttonText: string;
};
const HeroTextCentent: React.FC<HeroTextCententProp> = ({
  title,
  detail,
  buttonText,
}) => {
  return (
    <div className="max-w-lg max-h-7xl  max-sm:mx-auto max-sm:min-w-100 h-[400px] px-10 rounded-sm py-10 bg-white/20 backdrop-blur-sm flex flex-col space-y-1">
      <div className="flex flex-1 flex-col justify-start gap-10">
        <div>
          <div className="w-[6rem] h-1 bg-[#bb48e8]" />
          <h2 className="text-4xl font-bold text-black/90 mt-3">{title}</h2>
        </div>

        <p className="text-[18px] text-gray-900">{detail}</p>
      </div>

      <Link href="/register" className="mt-4">
        <Button className="bg-[#8848e8] hover:bg-[#cfadff]">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default HeroTextCentent;
