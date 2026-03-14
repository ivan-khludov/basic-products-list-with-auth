import { z } from "zod";

export const authSessionSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  id: z.number(),
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  image: z.string(),
});

export type AuthSession = z.infer<typeof authSessionSchema>;
