import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoginTextInput } from "./LoginTextInput";

const meta: Meta<typeof LoginTextInput> = {
  component: LoginTextInput,
  title: "Features/Auth/LoginTextInput",
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

type Story = StoryObj<typeof LoginTextInput>;

export const Default: Story = {
  args: {
    label: "Имя пользователя",
    value: "",
    placeholder: "Введите имя пользователя",
  },
};

export const WithError: Story = {
  args: {
    label: "Имя пользователя",
    value: "",
    placeholder: "Введите имя пользователя",
    error: "Обязательное поле",
  },
};

export const Filled: Story = {
  args: {
    label: "Имя пользователя",
    value: "emilys",
    placeholder: "Введите имя пользователя",
  },
};

export const Disabled: Story = {
  args: {
    label: "Имя пользователя",
    value: "emilys",
    placeholder: "Введите имя пользователя",
    disabled: true,
  },
};
