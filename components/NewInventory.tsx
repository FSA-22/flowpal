'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { restockItems as initialData } from '@/constants';
import Image from 'next/image';
import InventoryNotifications from './InventoryNotification';
import Link from 'next/link';

type RestockItem = {
  product: string;
  stockLevel: number;
  supplier: string;
  restockDate: string;
};

const FindTrackRestock = () => {
  const [form, setForm] = useState({
    product: '',
    stockLevel: '',
    supplier: '',
  });

  const [items, setItems] = useState<RestockItem[]>(initialData);

  const handleAddItem = () => {
    if (!form.product || !form.stockLevel || !form.supplier) return;

    const now = new Date();
    const date = now.toISOString().split('T')[0];

    const newItem: RestockItem = {
      product: form.product,
      stockLevel: parseInt(form.stockLevel),
      supplier: form.supplier,
      restockDate: date,
    };

    setItems([newItem, ...items]);
    setForm({ product: '', stockLevel: '', supplier: '' });
  };

  return (
    <div className="w-full space-y-8">
      <div className="w-full mx-auto bg-[#f1d3ff] rounded-b-4xl space-y-6 py-8 ">
        <div className="max-w-6xl flex mx-auto flex-col">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-black text-[20px] mb-2">
              Find, Track & Restock wih Ease
            </h2>
            <p className="text-gray-600 text-[14px] mb-4">
              Stay Updated on stock Levels, Supplier details Restock Alerts.
            </p>
            <div className="flex justify-between w-4xl max-md:w-md max-sm:w-md mb-6">
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-purple-600" /> <span>Low stock</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600" /> <span>In stock</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-red-600" /> <span>Out of stock</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 place-content-center justify-items-center text-black text-lg font-medium px-4 mb-6">
            <p>Product</p>
            <p>Stock Level</p>
            <p>Supplier</p>
            <p>Restock Reminder</p>
          </div>

          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="grid grid-cols-4 gap-4 place-content-start mx-auto bg-white p-3 shadow rounded-lg"
              >
                <div className="flex justify-start items-center gap-2 p-4">
                  <div className="w-3 h-3 bg-purple-600" />
                  <p className="font-semibold text-[14px] text-center">
                    {item.product}
                  </p>
                </div>
                <p className="font-semibold text-[14px] flex-center">
                  {item.stockLevel}
                </p>
                <p className="font-semibold text-[14px] flex-center">
                  {item.supplier}
                </p>
                <p className="font-semibold text-[14px] flex-center">
                  {item.restockDate}
                </p>
              </li>
            ))}
          </ul>
          <Link href={'#/'} className="w-full flex justify-center">
            <p className=" text-right mt-8 mr-4 text-gray-500">View All</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg mx-auto">
          <Image
            src="/addinventory.jpg"
            alt="add-inventory"
            fill
            className="object-cover z-10 rounded-full"
          />
          <div className="absolute z-0 top-0 -right-3 h-[360px] w-[383px] -rotate-30 border border-[#bb48e8] rounded-full" />
        </div>

        <div className="flex flex-col w-full max-w-xl max-sm:px-4 max-sm:mx-auto max-sm:items-center max-sm:w-full gap-4">
          <h3 className="font-semibold text-lg">Add New Inventory</h3>
          <div>
            <label className="text-sm" htmlFor="product">
              Product
            </label>
            <Input
              className="rounded py-3 mt-1 border border-black/25 w-full"
              type="text"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="stockLevel">
              Number Restocked
            </label>
            <Input
              className="rounded py-3 mt-1 border border-black/25 w-full"
              type="number"
              value={form.stockLevel}
              onChange={(e) => setForm({ ...form, stockLevel: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="supplier">
              Supplier
            </label>
            <Input
              className="rounded py-3 mt-1 border border-black/25 w-full"
              type="text"
              value={form.supplier}
              onChange={(e) => setForm({ ...form, supplier: e.target.value })}
            />
          </div>
          <Button
            onClick={handleAddItem}
            className="bg-purple-600 py-3 mt-2 rounded text-white font-medium text-sm sm:text-base"
          >
            Save Record
          </Button>
        </div>
      </div>

      <InventoryNotifications />
    </div>
  );
};

export default FindTrackRestock;
