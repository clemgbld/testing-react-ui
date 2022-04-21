import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";

test("increment", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");

  expect(counter).toHaveTextContent("0");

  const button = screen.getByText("Increment");

  userEvent.click(button);

  expect(counter).toHaveTextContent("1");
});

test("decrement", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");

  expect(counter).toHaveTextContent("0");

  const button = screen.getByText("Decrement");

  userEvent.click(button);

  expect(counter).toHaveTextContent("-1");
});
