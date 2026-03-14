import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Features/Home/Pagination",
  component: Pagination,
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onPageChange: { action: "page changed" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  args: {
    totalPages: 5,
    currentPage: 1,
  },
};

export const MiddlePage: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
  },
};

export const LastPage: Story = {
  args: {
    totalPages: 5,
    currentPage: 5,
  },
};
