import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("add one at each click", () => {
  render(<Counter />);
  const counterElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByRole("button");

  expect(counterElement.textContent).toBe("Count is 0");

  userEvent.click(buttonElement);

  expect(counterElement.textContent).toBe("Count is 1");
});
