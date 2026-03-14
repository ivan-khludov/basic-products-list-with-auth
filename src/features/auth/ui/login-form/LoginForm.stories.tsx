import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { Toaster } from "sonner";

import { QueryProvider } from "@/app/providers/QueryProvider";

import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Features/Auth/LoginForm",
  tags: ["feature", "feature:auth", "ready"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <QueryProvider>
        <MemoryRouter initialEntries={["/login"]}>
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-[400px]">
              <Story />
            </div>
          </div>
          <Toaster richColors position="top-center" />
        </MemoryRouter>
      </QueryProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
