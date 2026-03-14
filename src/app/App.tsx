import { Toaster } from "sonner";

import { QueryProvider } from "@/app/providers/QueryProvider";
import { RouterProvider } from "@/app/providers/RouterProvider";
import { AppRoutes } from "@/app/routes";

export const App = () => {
  return (
    <QueryProvider>
      <RouterProvider>
        <AppRoutes />
        <Toaster richColors position="top-center" />
      </RouterProvider>
    </QueryProvider>
  );
};
