import { Checkbox, CheckboxProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
  },
};

export default meta;

export const Default: StoryObj<CheckboxProps> = {};
