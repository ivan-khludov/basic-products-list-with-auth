import type { Meta, StoryObj } from "@storybook/react-vite";

import { SvgIcon } from "./SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  component: SvgIcon,
  title: "Common/UI/SvgIcon",
  tags: ["ui", "primitive", "ready"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

const samplePath = (
  <path
    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

export const Default: Story = {
  args: {
    viewBox: "0 0 24 24",
    defaultSize: 24,
  },
  render: (args) => (
    <span className="text-(--neutral-200)">
      <SvgIcon {...args}>{samplePath}</SvgIcon>
    </span>
  ),
};
