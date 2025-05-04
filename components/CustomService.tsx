"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

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
    <div className="flex flex-col flex-start flex-1 justify-between rounded-[4px] md:px-4 md:py-8 gap-6 bg-[#bb48e8] space-y-3 ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center rounded-[2px] bg-white w-8 h-8 p-2">
          <Image
            src={iconPath}
            height={40}
            width={40}
            alt="icon"
            className="object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold text-white">{head}</h2>

        <p className="text-base md:text-md text-white/80">{description}</p>
      </div>

      <Link href={pagePath} className="mt-4">
        <Button className="bg-white text-[#bb48e8] hover:bg-complimentary hover:text-white">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default CustomService;
