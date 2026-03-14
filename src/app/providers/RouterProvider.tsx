import type { PropsWithChildren } from "react";

import { BrowserRouter } from "react-router-dom";

type RouterProviderProps = PropsWithChildren;

export const RouterProvider = ({ children }: RouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
