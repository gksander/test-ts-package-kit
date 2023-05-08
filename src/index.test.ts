import { it, expect } from "vitest";
import { shout } from "./index";

it("yells hello", () => {
  expect(shout()).toBe("Hello world!");
});
