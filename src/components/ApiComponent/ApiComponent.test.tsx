import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ApiComponent from "./ApiComponent";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<ApiComponent />);
  const name = await waitFor(() => screen.findByRole("contentinfo"));
  expect(name).toHaveTextContent("Name is Jack");
});
