import { useId, type ChangeEvent } from "react";

import { FormField } from "@/features/home/ui/form-field";

interface FormNumberInputProps {
  id?: string;
  name: string;
  label: string;
  placeholder: string;
  value: number;
  error?: string;
  min?: number;
  step?: number;
  className?: string;
  onChange: (value: number) => void;
}

export const FormNumberInput = ({
  id: idProp,
  name,
  label,
  placeholder,
  value,
  error,
  min,
  step = 1,
  className,
  onChange,
}: FormNumberInputProps) => {
  const autoId = useId();
  const id = idProp ?? autoId;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    onChange(raw === "" ? 0 : Number(raw));
  };

  return (
    <FormField id={id} label={label} error={error} className={className}>
      <input
        name={name}
        type="number"
        min={min}
        step={step}
        value={value === 0 ? "" : value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormField>
  );
};
