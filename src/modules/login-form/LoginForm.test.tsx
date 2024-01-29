import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import messages from "~/locales/en.json";
import LoginForm from "./LoginForm";

describe("Login Form", () => {
  it("renders Login Form", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <LoginForm />
      </NextIntlClientProvider>,
    );

    const heading = screen.getByText("Login");

    expect(heading).toBeVisible();
  });
});
