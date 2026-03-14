import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormNumberInput } from "./FormNumberInput";

const meta: Meta<typeof FormNumberInput> = {
  component: FormNumberInput,
  title: "Features/Home/FormNumberInput",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const initialValue = (context.initialArgs?.value as number) ?? 0;
      const [value, setValue] = useState(initialValue);

      return (
        <div className="w-[200px]">
          <Story args={{ ...context.args, value, onChange: setValue }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FormNumberInput>;

export const Default: Story = {
  args: {
    name: "price",
    label: "Цена",
    placeholder: "0",
    value: 0,
  },
};

export const WithError: Story = {
  args: {
    name: "price",
    label: "Цена",
    placeholder: "0",
    value: 0,
    error: "Введите положительное число",
  },
};

export const WithValue: Story = {
  args: {
    name: "price",
    label: "Цена",
    placeholder: "0",
    value: 999,
    min: 0,
    step: 1,
  },
};
