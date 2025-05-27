import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InventoryNotifications() {
  const [lowStockEnabled, setLowStockEnabled] = useState(true);
  const [agingAlertEnabled, setAgingAlertEnabled] = useState(true);

  return (
    <div className="flex flex-col gap-4 my-10 max-sm:items-center max-sm:p-4">
      <div className="max-w-5xl p-3 flex justify-between items-center mx-auto rounded w-full bg-[#f1d3ff]">
        <p className="font-medium">Inventory Notification</p>
        <span className="text-xl">
          <ChevronDown className="w-5 h-5" />
        </span>
      </div>

      <div className="max-w-5xl p-3 flex justify-between items-center mx-auto rounded w-full bg-white shadow">
        <p>Low Stock Warning</p>
        <button
          onClick={() => setLowStockEnabled(!lowStockEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            lowStockEnabled ? 'bg-purple-600' : 'bg-gray-300'
          }`}
        >
          <span className="sr-only">Toggle Low Stock</span>
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
              lowStockEnabled ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="max-w-5xl p-3 flex justify-between items-center mx-auto rounded w-full shadow">
        <p>Inventory Aging Alert</p>
        <button
          onClick={() => setAgingAlertEnabled(!agingAlertEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            agingAlertEnabled
              ? 'bg-[#f1d3ff] border-purple-600'
              : 'bg-gray-300 border-gray-400'
          }`}
        >
          <span className="sr-only">Toggle Inventory Aging</span>
          <span
            className={`inline-block h-5 w-5 transform rounded-full transition-transform duration-300 ${
              agingAlertEnabled
                ? 'bg-white translate-x-5'
                : 'bg-white translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
