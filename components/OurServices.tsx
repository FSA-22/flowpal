import React from 'react';
import CustomService from './CustomService';

const OurService = () => {
  return (
    <section
      id="our-Services"
      className="mb-20 max-sm:min-h-screen flex flex-col items-center justify-center gap-10 py-10 px-4 md:px-10 bg-white"
    >
      <div className="bg-[#e1a2fa9a] mt-5 text-[#bb48e8] font-semibold px-2 py-3">
        <p>Our Services</p>
      </div>

      <h1 className="text-gray-900 font-bold text-2xl text-center">
        Say Goodbye to Manual Spreadsheet
      </h1>

      <div className="w-full flex flex-wrap gap-8 justify-center items-stretch p-4">
        <CustomService
          head="Real-Time Profit Tracking"
          iconPath="/vector.svg"
          description="See your daily earnings at a glance"
          buttonText="Track Profit"
          pagePath="/profit"
        />
        <CustomService
          head="Smart Inventory Management"
          iconPath="/vector-1.svg"
          description="Get real-time updates on your stock levels"
          buttonText="Manage Inventory"
          pagePath="/inventory"
        />
        <CustomService
          head="Automated Expenses Tracking"
          iconPath="/vector-2.svg"
          description="Log and categorize your expenses effortlessly"
          buttonText="Track Expenses"
          pagePath="/expenses"
        />
        <CustomService
          head="Instant Sales Invoice"
          iconPath="/vector-3.svg"
          description="Create and send invoice and receipt in seconds"
          buttonText="Generate Invoice"
          pagePath="/invoice"
        />
      </div>
    </section>
  );
};

export default OurService;
