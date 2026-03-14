import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  brand: z.string().optional(),
  sku: z.string().optional(),
  price: z.number(),
  rating: z.number(),
  thumbnail: z.string().optional(),
});

export const productsApiResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const errorResponseSchema = z.object({
  message: z.string().optional(),
});
