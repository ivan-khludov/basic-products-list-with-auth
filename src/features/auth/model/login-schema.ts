import { z } from "zod";

import { ERROR_MESSAGE } from "@/shared/constants/messages";

export const loginSchema = z.object({
  username: z.string().min(1, ERROR_MESSAGE.REQUIRED_FIELD),
  password: z.string().min(1, ERROR_MESSAGE.REQUIRED_FIELD),
});

export type LoginInput = z.infer<typeof loginSchema>;
