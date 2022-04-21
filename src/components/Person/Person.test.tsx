import React from "react";
import { render, screen } from "@testing-library/react";
import Person from "./Person";

test("renders learn react link", () => {
  render(<Person name="Bob" />);

  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toHaveTextContent("Name is Bob");
  expect(screen.getByRole("contentinfo")).toHaveAttribute(
    "role",
    "contentinfo"
  );
});
