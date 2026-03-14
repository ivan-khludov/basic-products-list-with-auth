import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
  title: "Features/Home/SearchInput",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const initialValue = context.initialArgs?.value ?? "";
      const [value, setValue] = useState(initialValue);

      return (
        <div className="w-[400px]">
          <Story args={{ value, onChange: setValue }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Найти",
    ariaLabel: "Поиск товаров",
  },
};

export const Filled: Story = {
  args: {
    value: "iPhone",
    placeholder: "Найти",
    ariaLabel: "Поиск товаров",
  },
};
