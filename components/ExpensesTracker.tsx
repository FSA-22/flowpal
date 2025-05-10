'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Subscription {
  service: string;
  cost: string;
  nextPayment: string;
  status: 'red' | 'yellow';
}

const statusColorMap = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-400',
} as const;

export default function PaymentExpensesTracker() {
  const [showForm, setShowForm] = useState(false);

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      service: 'Google Workspace',
      cost: '20,000/mo',
      nextPayment: 'April 10',
      status: 'red',
    },
    {
      service: 'Website Hosting',
      cost: '50,000/yr',
      nextPayment: 'April 15',
      status: 'yellow',
    },
    {
      service: 'Logistic Company',
      cost: '15,000/mo',
      nextPayment: 'March 20',
      status: 'red',
    },
  ]);

  const [form, setForm] = useState<Subscription>({
    service: '',
    cost: '',
    nextPayment: '',
    status: 'red',
  });

  const handleAddSubscription = () => {
    if (!form.service || !form.cost || !form.nextPayment) return;
    setSubscriptions([...subscriptions, form]);
    setForm({ service: '', cost: '', nextPayment: '', status: 'red' });
    setShowForm(false);
  };

  return (
    <div className="w-full md:max-w-7xl px-6 space-y-6">
      <div className=" w-full flex flex-col items-center mx-auto">
        <h1 className="text-3xl text-black/90 font-semibold">
          Payment & Subscription Tracker
        </h1>
        <p className="text-muted-foreground text-lg mt-4">
          Track recurring payment and avoid surprise charges
        </p>
      </div>

      <div className="flex max-w-xl my-10 mx-auto justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500" />
          <span className="text-sm font-medium text-black">Active</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-400" />
          <span className="text-sm font-medium text-black">Expiring Soon</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 w-full font-bold text-sm text-muted-foreground pb-2">
          <div className="text-black">Service</div>
          <div className="text-black">Cost</div>
          <div className="text-black">Next Payment</div>
          <div className="flex-center text-black">Status</div>
        </div>
        {subscriptions.map((sub, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 w-full items- text-gray-800 py-4 shadow-black/30 rounded-sm px-6 mb-2 shadow"
          >
            <div>{sub.service}</div>
            <div> {sub.cost} </div>
            <div>{sub.nextPayment}</div>
            <div className="flex justify-center">
              <div className={cn('w-4 h-4', statusColorMap[sub.status])} />
            </div>
          </div>
        ))}
        <div className="text-right mt-4">
          <span className="text-sm text-gray-400 cursor-pointer hover:underline">
            View All
          </span>
        </div>
      </div>
      {/* Form for new subscription */}
      {showForm && (
        <div className="space-y-2 border p-4 rounded-md w-full">
          <Input
            placeholder="Service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          />
          <Input
            placeholder="Cost"
            value={form.cost}
            onChange={(e) => setForm({ ...form, cost: e.target.value })}
          />
          <Input
            placeholder="Next Payment"
            value={form.nextPayment}
            onChange={(e) => setForm({ ...form, nextPayment: e.target.value })}
          />
          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value as 'red' | 'yellow' })
            }
            className="border rounded-md p-2 w-full"
          >
            <option value="red">Active (Red)</option>
            <option value="yellow">Expiring Soon (Yellow)</option>
          </select>
          <Button className="w-full" onClick={handleAddSubscription}>
            Submit
          </Button>
        </div>
      )}

      <div className="flex justify-between max-w-5xl mb-6 mx-auto">
        <Button
          className="w-sm bg-purple-500 py-5 text-gray-200 font-normal hover:bg-purple-400"
          onClick={() => setShowForm(!showForm)}
        >
          Add Subscription
        </Button>
        <Button
          className="w-sm py-5 text-gray-200 font-normal bg-purple-500 hover:bg-purple-400"
          variant="destructive"
        >
          Cancel Plan
        </Button>
      </div>
    </div>
  );
}
