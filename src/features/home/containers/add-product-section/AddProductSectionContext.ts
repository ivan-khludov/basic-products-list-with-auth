import { createContext, useContext } from "react";

export interface AddProductSectionContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  onSuccess?: () => void;
}

export const AddProductSectionContext =
  createContext<AddProductSectionContextValue | null>(null);

export const useAddProductSection = () => {
  const value = useContext(AddProductSectionContext);

  if (value == null) {
    throw new Error(
      "useAddProductSection must be used within AddProductSection",
    );
  }

  return value;
};
