import type { PropsWithChildren } from "react";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toast } from "sonner";

import { ERROR_MESSAGE } from "@/shared/constants/messages";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : ERROR_MESSAGE.UNKNOWN_ERROR;
      toast.error(message);
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 2,
    },
  },
});

type QueryProviderProps = PropsWithChildren;

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
