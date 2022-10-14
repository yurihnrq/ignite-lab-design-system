import { Heading, HeadingProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<HeadingProps> = {
  title: "Components/Heading",
  component: Heading,
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

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: "Default Heading",
  },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
    children: "Small Heading",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
    children: "Large Heading",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with &lt;h1&gt;</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
