import { z } from "zod";

export const dummyJsonAuthResponseSchema = z.object({
  id: z.number().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  gender: z.string().optional(),
  image: z.string().optional(),
  token: z.string().optional(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  message: z.string().optional(),
});

export type DummyJsonAuthResponse = z.infer<typeof dummyJsonAuthResponseSchema>;
