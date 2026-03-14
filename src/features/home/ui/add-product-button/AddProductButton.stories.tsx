import type { Meta, StoryObj } from "@storybook/react-vite";

import { AddProductButton } from "./AddProductButton";

const meta: Meta<typeof AddProductButton> = {
  component: AddProductButton,
  title: "Features/Home/AddProductButton",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AddProductButton>;

export const Default: Story = {
  args: {
    children: "Добавить",
  },
};

export const Disabled: Story = {
  args: {
    children: "Добавить",
    disabled: true,
  },
};
