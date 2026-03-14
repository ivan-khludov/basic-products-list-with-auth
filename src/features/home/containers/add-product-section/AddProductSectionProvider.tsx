import { useCallback, useState } from "react";

import {
  AddProductSectionContext,
  type AddProductSectionContextValue,
} from "./AddProductSectionContext";

interface AddProductSectionProviderProps {
  onSuccess?: () => void;
  children: React.ReactNode;
}

export const AddProductSectionProvider = ({
  onSuccess,
  children,
}: AddProductSectionProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value: AddProductSectionContextValue = {
    isOpen,
    open,
    close,
    onSuccess,
  };

  return (
    <AddProductSectionContext.Provider value={value}>
      {children}
    </AddProductSectionContext.Provider>
  );
};
