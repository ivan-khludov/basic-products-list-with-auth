import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoginPasswordInput } from "./LoginPasswordInput";

const meta: Meta<typeof LoginPasswordInput> = {
  component: LoginPasswordInput,
  title: "Features/Auth/LoginPasswordInput",
  tags: ["feature", "feature:auth", "ready"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const initialValue = (context.initialArgs?.value as string) ?? "";
      const [value, setValue] = useState(initialValue);

      return (
        <div className="w-[400px]">
          <Story args={{ ...context.args, value, onChange: setValue }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof LoginPasswordInput>;

export const Default: Story = {
  args: {
    label: "Пароль",
    value: "",
    placeholder: "Введите пароль",
  },
};

export const WithError: Story = {
  args: {
    label: "Пароль",
    value: "",
    placeholder: "Введите пароль",
    error: "Неверный пароль",
  },
};

export const Filled: Story = {
  args: {
    label: "Пароль",
    value: "secret",
    placeholder: "Введите пароль",
  },
};

export const Disabled: Story = {
  args: {
    label: "Пароль",
    value: "secret",
    placeholder: "Введите пароль",
    disabled: true,
  },
};
