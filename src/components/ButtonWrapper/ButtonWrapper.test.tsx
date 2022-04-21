import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";
import userEvent from "@testing-library/user-event";

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="add Handler" />);

  const buttonElment = screen.getByRole("button");
  userEvent.click(buttonElment);
  expect(onClick).toHaveBeenCalled();
});
