import { TextInput, InputRootProps } from ".";
import { Envelope } from "phosphor-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<InputRootProps> = {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="TextInput Component" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<InputRootProps> = {};

export const WithIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="TextInput Component" />,
    ],
  },
};
