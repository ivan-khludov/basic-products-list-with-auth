import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoadingBar } from "./LoadingBar";

const meta: Meta<typeof LoadingBar> = {
  component: LoadingBar,
  title: "Features/Home/LoadingBar",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof LoadingBar>;

export const Default: Story = {};
