import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  addProductSchema,
  type AddProductFormInput,
} from "@/features/home/model/add-product-schema";
import { FormActions } from "@/features/home/ui/form-actions";
import { FormNumberInput } from "@/features/home/ui/form-number-input";
import { FormTextInput } from "@/features/home/ui/form-text-input";
import { SUCCESS_MESSAGE } from "@/shared/constants/messages";
import { cn } from "@/shared/utils/cn";

interface AddProductFormProps {
  className?: string;
  onSuccess?: (data: AddProductFormInput) => void;
  onCancel?: () => void;
}

export const AddProductForm = ({
  className,
  onSuccess,
  onCancel,
}: AddProductFormProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<AddProductFormInput>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: "",
      price: 0,
      brand: "",
      sku: "",
    },
  });

  const onSubmit = (data: AddProductFormInput) => {
    toast.success(SUCCESS_MESSAGE.PRODUCT_ADDED);
    onSuccess?.(data);
  };

  const handleCancelClick = () => {
    onCancel?.();
  };

  return (
    <form
      className={cn(
        "flex flex-col gap-4 rounded-[8px] border border-(--neutral-50) bg-(--neutral-40) p-4",
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <FormTextInput
              id="add-product-title"
              name="title"
              label="Наименование"
              placeholder="Наименование"
              value={field.value}
              error={errors.title?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <FormNumberInput
              id="add-product-price"
              name="price"
              label="Цена, ₽"
              placeholder="0"
              value={field.value}
              error={errors.price?.message}
              onChange={field.onChange}
              min={0}
              step={1}
            />
          )}
        />
        <Controller
          control={control}
          name="brand"
          render={({ field }) => (
            <FormTextInput
              id="add-product-brand"
              name="brand"
              label="Вендор"
              placeholder="Вендор"
              value={field.value}
              error={errors.brand?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="sku"
          render={({ field }) => (
            <FormTextInput
              id="add-product-sku"
              name="sku"
              label="Артикул"
              placeholder="Артикул"
              value={field.value}
              error={errors.sku?.message}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <FormActions submitting={isSubmitting} onCancel={handleCancelClick} />
    </form>
  );
};
