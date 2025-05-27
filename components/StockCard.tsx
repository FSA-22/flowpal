import Image from 'next/image';
import React from 'react';

type StockCardProps = {
  path: string;
  title: string;
  title2: string;
  id: string;
  counts: string;
};

const StockCard = ({ path, title, title2, counts }: StockCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-purple-600 text-white rounded-b-full p-6 w-full min-h-[270px] max-w-[220px] mx-auto shadow-md">
      <Image
        alt="Stock-Icon"
        src={path}
        height={40}
        width={40}
        className="p-2 bg-white rounded-tl-lg"
      />
      <div className="text-center space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm">{title2}</p>
      </div>
      <p className="text-lg font-semibold text-gray-200">{counts}</p>
    </div>
  );
};

export default StockCard;
