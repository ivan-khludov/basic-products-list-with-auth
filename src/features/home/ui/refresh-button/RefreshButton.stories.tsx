import type { Meta, StoryObj } from "@storybook/react-vite";

import { RefreshButton } from "./RefreshButton";

const meta: Meta<typeof RefreshButton> = {
  component: RefreshButton,
  title: "Features/Home/RefreshButton",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RefreshButton>;

export const Default: Story = {
  args: {
    ariaLabel: "Обновить список",
  },
};

export const Disabled: Story = {
  args: {
    ariaLabel: "Обновить список",
    disabled: true,
  },
};
