import type { Meta, StoryObj } from "@storybook/react-vite";

import { PaginationSummary } from "./PaginationSummary";

const meta: Meta<typeof PaginationSummary> = {
  component: PaginationSummary,
  title: "Features/Home/PaginationSummary",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PaginationSummary>;

export const Default: Story = {
  args: {
    from: 1,
    to: 20,
    total: 120,
  },
};

export const SinglePage: Story = {
  args: {
    from: 1,
    to: 10,
    total: 10,
  },
};

export const LastPage: Story = {
  args: {
    from: 41,
    to: 50,
    total: 50,
  },
};
