import { useId, type ChangeEvent } from "react";

import { FormField } from "@/features/home/ui/form-field";

interface FormTextInputProps {
  id?: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
}

export const FormTextInput = ({
  id: idProp,
  name,
  label,
  placeholder,
  value,
  error,
  className,
  onChange,
}: FormTextInputProps) => {
  const autoId = useId();
  const id = idProp ?? autoId;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormField id={id} label={label} error={error} className={className}>
      <input
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormField>
  );
};
