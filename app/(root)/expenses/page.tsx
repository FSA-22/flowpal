import BudgetSection from '@/components/BudgetBreakdown';
import ExpensesHero from '@/components/ExpensesHero';
import React from 'react';

const Expenses = () => {
  return (
    <main className="w-full">
      <ExpensesHero />
      <BudgetSection />
    </main>
  );
};

export default Expenses;
