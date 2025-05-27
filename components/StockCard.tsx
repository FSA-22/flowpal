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
    <div className="flex items-center flex-col gap-6 bg-purple-600 w-50 h-65 p-4 text-white rounded-b-full">
      <Image
        alt="Stock-Icon"
        src={path}
        height={30}
        width={36}
        className="mt-4 mb-2 p-1 bg-white rounded-tl-lg"
      />
      <div>
        <p className="text-center">{title}</p>
        <p className="text-center">{title2}</p>
      </div>
      <p className="text-gray-200">{counts}</p>
    </div>
  );
};

export default StockCard;
