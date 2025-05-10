import CompareSales from '@/components/CompareSales';
import HeroSectionProfit from '@/components/HeroSectionProfit';
import ProfitTracker from '@/components/ProfitTracker';
import TransactionHistory from '@/components/TransactionHistory';
import React from 'react';

const ProfitPage = () => {
  return (
    <main className="w-full">
      <HeroSectionProfit />
      <ProfitTracker />
      <CompareSales />
      <TransactionHistory />
    </main>
  );
};

export default ProfitPage;
