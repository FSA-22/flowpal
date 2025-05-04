import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { authFormSchema } from '@/lib/utils';

import { Control } from 'react-hook-form';
import { z } from 'zod';

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  label: string;
  placeholder: string;
}

const formSchema = authFormSchema('register');

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex flex-col rounded-md w-full">
            <FormItem>
              <FormLabel className="text-gray-600">{label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type={name === 'password' ? 'password' : 'text'}
                  {...field}
                  className="bg-[#f1d3ff] text-[#891b1e] placeholder:text-[#f1d3ff] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-b-1 focus-visible:border-[#8848E8]"
                />
              </FormControl>
              <FormMessage className="text-left" />
            </FormItem>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
