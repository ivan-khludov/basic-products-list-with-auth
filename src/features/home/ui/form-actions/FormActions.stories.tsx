import type { Meta, StoryObj } from "@storybook/react-vite";

import { FormActions } from "./FormActions";

const meta: Meta<typeof FormActions> = {
  component: FormActions,
  title: "Features/Home/FormActions",
  tags: ["feature", "feature:home", "ready"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onCancel: { action: "cancel" },
  },
};

export default meta;

type Story = StoryObj<typeof FormActions>;

export const Default: Story = {
  args: {
    submitLabel: "Сохранить",
    cancelLabel: "Отмена",
    submitting: false,
    onCancel: () => {},
  },
};

export const Submitting: Story = {
  args: {
    submitLabel: "Сохранить",
    cancelLabel: "Отмена",
    submitting: true,
    onCancel: () => {},
  },
};
