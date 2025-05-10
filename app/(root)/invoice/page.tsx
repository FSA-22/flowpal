'use client';

import InvoiceHeroSection from '@/components/InvoiceHeroSection';
import React from 'react';

import dynamic from 'next/dynamic';
import InvoiceInputComponent from '@/components/InvoiceInputComponent';

const ReceiptSection = dynamic(() => import('@/components/ReceiptSection'), {
  ssr: false,
});

const Invoice = () => {
  return (
    <main className="w-full">
      <InvoiceHeroSection />
      <ReceiptSection />
      <InvoiceInputComponent />
    </main>
  );
};

export default Invoice;
