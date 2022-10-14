import { Text, TextProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
  },
  argTypes: {
    size: {
      contorl: {
        type: "inline-radio",
      },
    },
  },
};

export default meta;

export const Default: StoryObj<TextProps> = {
  args: {
    children: "Default Text",
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
    children: "Small Text",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
    children: "Large Text",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with &lt;p&gt;</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
