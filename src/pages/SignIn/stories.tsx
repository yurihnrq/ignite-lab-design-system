import { SignIn } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "Pages/SignIn",
  component: SignIn,
};

export default meta;

export const Default: StoryObj = {};

export const FilledForm: StoryObj = {
  play: ({ canvasElement }) => {
    const { getByTestId, getByText } = within(canvasElement);

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const rememberCheckbox = getByTestId("remember-checkbox");
    const signInButton = getByTestId("signin-button");

    userEvent.type(emailInput, "yuri@mail.com");
    userEvent.type(passwordInput, "123456");
    userEvent.click(rememberCheckbox);
    userEvent.click(signInButton);

    waitFor(() => {
      const signedMessage = getByText("Login realizado.");
      expect(signedMessage).toBeInTheDocument();
    });
  },
};
