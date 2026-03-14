import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  component: FormField,
  title: "Features/Home/FormField",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    id: "field-demo",
    label: "Наименование",
    children: <input type="text" placeholder="Введите значение" />,
  },
};

export const WithError: Story = {
  args: {
    id: "field-error",
    label: "Наименование",
    error: "Обязательное поле",
    children: <input type="text" placeholder="Введите значение" />,
  },
};
