import { AddProductButton } from "@/features/home/ui/add-product-button";
import { AddProductForm } from "@/features/home/ui/add-product-form";

import { useAddProductSection } from "./AddProductSectionContext";
import { AddProductSectionProvider } from "./AddProductSectionProvider";

interface AddProductSectionProps {
  onSuccess?: () => void;
  children: React.ReactNode;
}

export const AddProductSection = ({
  onSuccess,
  children,
}: AddProductSectionProps) => {
  return (
    <AddProductSectionProvider onSuccess={onSuccess}>
      {children}
    </AddProductSectionProvider>
  );
};

export const AddProductSectionButton = () => {
  const { open } = useAddProductSection();

  return <AddProductButton onClick={open} />;
};

export const AddProductSectionForm = () => {
  const { isOpen, close, onSuccess } = useAddProductSection();

  const handleFormSuccess = () => {
    close();
    onSuccess?.();
  };

  if (!isOpen) {
    return null;
  }

  return <AddProductForm onSuccess={handleFormSuccess} onCancel={close} />;
};
