'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

export default function IncomeExpenseChart() {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  // const total = income + expenses;

  const chartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#e9b9ff', '#f1d3ff'],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <section className="relative w-full flex justify-between gap-20 mx-auto p-6 space-y-6 rounded-b-lg bg-[#b416e4]">
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold">
          Comapre Sales & Expenses <br /> At A Glance
        </h2>

        <div className="flex items-center justify-center w-full gap-4 mt-6">
          <div>
            <span className="flex font-semibold text-black">
              Monthly Income
            </span>
            <Input
              type="number"
              placeholder="Enter Income"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full bg-[#f1d3ff]"
            />
          </div>
          <div>
            <span className="flex font-semibold text-black">
              Monthly Expenses
            </span>
            <Input
              type="number"
              placeholder="Enter Expenses"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="w-full bg-[#f1d3ff]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-[#f1d3ff] min-h-1/2 w-full py-4 px-4 rounded items-center">
          <div className="flex justify-between w-full">
            <div className="rounded-full bg-white h-4 w-4" />
            <div className="rounded-full bg-white h-4 w-4" />
          </div>

          <div className="w-full text-base">
            <p className="flex justify-between">
              <span>Income</span>
              {income.toLocaleString()}
            </p>
            <p className="flex justify-between">
              <span>Expenses</span>
              {expenses.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <Card className="bg-[#b416e4] shadow border-0">
        <CardContent className="flex flex-col space-y-4 ">
          <Pie data={chartData} />
        </CardContent>
      </Card>
    </section>
  );
}
