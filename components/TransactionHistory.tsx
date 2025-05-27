'use client';

import React from 'react';
import { Search } from 'lucide-react';
import TransactionTable from './TransactionTable';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from './ui/input';

const TransactionHistory = () => {
  const formSchema = z.object({
    transactionType: z.string().min(2, {
      message: 'Enter transaction type',
    }),
    amount: z.string().min(2, {
      message: 'Enter Amount',
    }),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transactionType: '',
      amount: '',
    },
  });

  return (
    <section className="w-screen mb-5 h-screen bg-white flex flex-col p-10 gap-4">
      <div className="flex flex-col max-sm:mx-auto w-1/2 gap-4">
        <h2 className="font-medium text-lg">Recent Transactions</h2>
        <div className="flex items-center center gap-2">
          <input
            type="search"
            placeholder="Search"
            className="px-2 py-1 border rounded"
          />
          <div className="p-2 bg-[#f8a8f5] rounded">
            <Search className="text-white" size={20} />
          </div>
        </div>
      </div>
      <div className="flex max-w-6xl max-sm:w-full max-sm:flex-col gap-10">
        <div className="flex-1/2 shadow">
          <TransactionTable />
        </div>
        <div className="flex flex-col w-1/3 max-sm:w-full items-center justify-between gap-4">
          <div className=" flex flex-col text-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex flex-col items-center gap-10">
                  <FormField
                    control={form.control}
                    name="transactionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="form-label text-left">
                          Transaction Type
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black font-medium rounded-[2px]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="form-label text-left">
                          Amount
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black font-medium rounded-[2px]"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#af19eb] w-full py-4 text-white rounded-[2px]"
                >
                  Add Transaction
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
