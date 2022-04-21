import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "./useApi";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Jack" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("name should be Jack", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useApi());

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: "Jack" });
});
