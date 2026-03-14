import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoCircle } from "./LogoCircle";

const meta: Meta<typeof LogoCircle> = {
  component: LogoCircle,
  title: "Features/Auth/LogoCircle",
  tags: ["feature", "feature:auth", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof LogoCircle>;

export const Default: Story = {};
