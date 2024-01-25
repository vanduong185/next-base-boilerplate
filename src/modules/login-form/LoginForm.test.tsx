import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Login Form", () => {
  it("renders Login Form", () => {
    render(<LoginForm />);

    const heading = screen.getByText("Login");

    expect(heading).toBeVisible();
  });
});
