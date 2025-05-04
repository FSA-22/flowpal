'use client';

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
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';

export default function CustomFormSection() {
  const formSchema = z.object({
    totalSales: z.string().min(2, {
      message: 'Enter your total sales revenue',
    }),
    totalExpenses: z.string().min(2, {
      message: 'Enter your total sales expenses',
    }),
    costOfGoods: z.string().min(2, {
      message: 'Enter total cost of goods sold',
    }),
    grossProfit: z.string().min(2, {
      message: 'Enter gross profit',
    }),
    netProfit: z.string().min(2, {
      message: 'Enter net profit',
    }),
    ProfitMargin: z.string().min(2, {
      message: 'Enter profit margin',
    }),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      totalExpenses: '',
      totalSales: '',
      costOfGoods: '',
      grossProfit: '',
      netProfit: '',
      ProfitMargin: '',
    },
  });

  return (
    <section className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-2xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex-center w-40 mt-4 bg-[#e1a2fa9a] text-[#bb48e8] font-semibold md:px-1 md:py-3">
          <p>Profit Tracker</p>
        </div>
        <h1 className="flex-center mt-4 text-gray-900 font-bold text-2xl">
          Track Your Daily Profit Instantly
        </h1>
        <p className="text-gray-600 text-sm text-center">
          Understand yyour business financial health on our reall-time profit
          overview.
        </p>
      </div>

      <div className="flex justify-between gap-4 mt-13">
        <div className=" flex text-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex items-center justify-between gap-20">
                <FormField
                  control={form.control}
                  name="totalSales"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Total Sales Revenue
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalExpenses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Total Expenses{' '}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="costOfGoods"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Cost of Goods Sold
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="bg-[#bb48e8] text-white">
                Calculate
              </Button>

              <div className="flex items-center justify-between gap-20">
                <FormField
                  control={form.control}
                  name="grossProfit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Gross Profit</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="netProfit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Net Profit</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ProfitMargin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Profit Margin (%)
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="relative flex-center bg-[#e1a2fa9a] rounded-sm w-md h-25 mt-10">
        <div className="absolute -top-4 p-2 mx-auto bg-[#e1a2fa9a] ">
          <p className=" bg-white text-black font-medium px-1 rounded-[2px]">
            Cash Flow Status
          </p>
        </div>
      </div>
    </section>
  );
}
