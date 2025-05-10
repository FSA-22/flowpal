'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import Image from 'next/image';
import { Button } from './ui/button';
import PaymentExpensesTracker from './ExpensesTracker';

ChartJS.register(ArcElement, Tooltip);

export default function BudgetSection() {
  const budgetData = [
    { name: 'Inventory', percent: 40 },
    { name: 'Marketing', percent: 25 },
    { name: 'Logistics', percent: 15 },
    { name: 'Miscellaneous', percent: 10 },
  ];

  const exceededItems = ['Marketing', 'Logistics'];

  const chartData = {
    labels: budgetData.map((item) => item.name),
    datasets: [
      {
        data: budgetData.map((item) => item.percent),
        backgroundColor: ['#4331ea', '#c084fc', '#a855f7', '#ddd6fe'],
        borderWidth: 0.1,
      },
    ],
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Top Purple Block */}
      <div className="w-full bg-purple-600 text-white rounded-b-3xl flex flex-col items-center px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-4 max-w-6xl">
          <span className="px-6 py-2 rounded bg-[#f1d3ff] text-purple-600 text-lg font-medium">
            Budget Breakdown
          </span>
          <h2 className="text-lg md:text-xl font-bold text-white">
            Optimize Every Cost, Maximize Your Profit
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Track where your money goes, set smarter budget and keep your
            business financially healthy.
          </p>
        </div>

        {/* Bottom Block */}
        <div className="w-full flex flex-col items-center mt-10 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl w-full">
            {/* Left Side - Budget Items */}
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <div className="bg-white py-6 px-4 rounded shadow space-y-6">
                {budgetData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <Image
                      src={'/Icon/triangle-right-purple.svg'}
                      alt="Icon"
                      height={20}
                      width={20}
                    />
                    <span className="flex justify-between text-black text-[14px] font-normal w-full">
                      {item.name}
                      <span className="bg-purple-600 text-white flex-center shadow-sm text-[14px] rounded py-1 px-2">
                        {item.percent}%
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <Button className="max-w-[300px] text-lg py-6 mx-auto bg-[#f1d3ff] text-gray-500 flex-center rounded font-normal">
                Adjust Budget
              </Button>

              {exceededItems.length > 0 && (
                <div className="p-4 rounded shadow space-y-2">
                  {exceededItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Image
                        src={'/Icon/triangle-right-white.svg'}
                        alt="Icon"
                        height={20}
                        width={20}
                      />
                      <span className="text-white">{item} exeeded by //</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className=" flex-center w-1/2 max-w-[390px]">
              <Pie data={chartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto mt-20 text-gray-400">
        <PaymentExpensesTracker />
      </div>
      <div className="relative flex-center bg-[#e8acff] rounded w-xl h-35 my-15">
        <div className="absolute -top-4 p-2 mx- rounded bg-[#e8acff] ">
          <p className=" bg-white text-gray-600 font-normal px-2 rounded-[2px]">
            Cost Saving Tips
          </p>
        </div>
      </div>
    </section>
  );
}
