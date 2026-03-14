import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "sonner";

import { AddProductForm } from "./AddProductForm";

const meta: Meta<typeof AddProductForm> = {
  component: AddProductForm,
  title: "Features/Home/AddProductForm",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <>
        <div className="max-w-[800px]">
          <Story />
        </div>
        <Toaster richColors position="top-center" />
      </>
    ),
  ],
  argTypes: {
    onSuccess: { action: "success" },
    onCancel: { action: "cancel" },
  },
};

export default meta;

type Story = StoryObj<typeof AddProductForm>;

export const Default: Story = {
  args: {},
};
