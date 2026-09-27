import { z } from 'zod';
import { BUSINESS_TYPES } from './constants';

/**
 * Shared between the client form and the API route so validation can never
 * drift between the two.
 */
export const vendorSignupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name')
    .max(80, 'That name looks too long'),
  businessName: z
    .string()
    .trim()
    .min(2, 'Please enter your business name')
    .max(120, 'That business name looks too long'),
  businessType: z.enum(BUSINESS_TYPES, {
    errorMap: () => ({ message: 'Please choose a business type' }),
  }),
  city: z
    .string()
    .trim()
    .min(2, 'Please enter your city')
    .max(80, 'That city name looks too long'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid phone number')
    .max(24, 'Please enter a valid phone number')
    .regex(/^[+()\d\s.-]+$/, 'Use digits, spaces, and + ( ) - only'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address')
    .email('Please enter a valid email address')
    .max(160, 'That email looks too long'),
  /** Honeypot — real users never fill this; bots usually do. */
  website: z.string().max(0).optional(),
});

export type VendorSignupInput = z.infer<typeof vendorSignupSchema>;
