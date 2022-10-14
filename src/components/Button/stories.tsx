import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Hello World",
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "Default Button",
  },
};
