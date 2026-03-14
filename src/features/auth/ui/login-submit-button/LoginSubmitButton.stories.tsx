import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoginSubmitButton } from "./LoginSubmitButton";

const meta: Meta<typeof LoginSubmitButton> = {
  component: LoginSubmitButton,
  title: "Features/Auth/LoginSubmitButton",
  tags: ["feature", "feature:auth", "ready"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginSubmitButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
