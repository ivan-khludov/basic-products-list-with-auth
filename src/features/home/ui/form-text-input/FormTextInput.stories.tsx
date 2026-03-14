import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormTextInput } from "./FormTextInput";

const meta: Meta<typeof FormTextInput> = {
  component: FormTextInput,
  title: "Features/Home/FormTextInput",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const initialValue = (context.initialArgs?.value as string) ?? "";
      const [value, setValue] = useState(initialValue);

      return (
        <div className="w-[300px]">
          <Story args={{ ...context.args, value, onChange: setValue }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FormTextInput>;

export const Default: Story = {
  args: {
    name: "title",
    label: "Наименование",
    placeholder: "Наименование",
    value: "",
  },
};

export const WithError: Story = {
  args: {
    name: "title",
    label: "Наименование",
    placeholder: "Наименование",
    value: "",
    error: "Обязательное поле",
  },
};

export const Filled: Story = {
  args: {
    name: "title",
    label: "Наименование",
    placeholder: "Наименование",
    value: "iPhone 15 Pro",
  },
};
