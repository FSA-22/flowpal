import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { z } from 'zod';

export const authFormSchema = (type: string) =>
  z.object({
    businessName:
      type === 'login'
        ? z.string().optional()
        : z.string().min(2, 'Enter Username'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  });
