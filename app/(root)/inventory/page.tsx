import InventoryHeroSection from '@/components/InventoryHeroSection';
import StockSummarySection from '@/components/StockSummarySection';
import TrackRestock from '@/components/TrackRestock';
import React from 'react';

const Inventory = () => {
  return (
    <main className="w-full">
      <InventoryHeroSection />
      <StockSummarySection />
      <TrackRestock />
    </main>
  );
};

export default Inventory;
