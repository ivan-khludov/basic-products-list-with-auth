import { z } from "zod";

import { ERROR_MESSAGE } from "@/shared/constants/messages";

export const addProductSchema = z.object({
  title: z.string().min(1, ERROR_MESSAGE.REQUIRED_FIELD),
  price: z
    .number({ message: ERROR_MESSAGE.REQUIRED_FIELD })
    .min(0, "Цена должна быть не меньше 0"),
  brand: z.string().min(1, ERROR_MESSAGE.REQUIRED_FIELD),
  sku: z.string().min(1, ERROR_MESSAGE.REQUIRED_FIELD),
});

export type AddProductFormInput = z.infer<typeof addProductSchema>;
