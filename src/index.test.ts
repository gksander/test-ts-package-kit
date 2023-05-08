import { it, expect } from "vitest";
import { shout } from "./index";

it("yells foobar", () => {
  expect(shout()).toBe("foobar!");
});
