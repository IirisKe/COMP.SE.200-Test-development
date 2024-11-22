import { describe } from "node:test";
import add from "../src/add.js";
import assert from "assert";

describe("Test add", function () {
  it("should return 5 when given 2 and 3", function () {
    assert.equal(add(2, 3), 5);
  });
});
