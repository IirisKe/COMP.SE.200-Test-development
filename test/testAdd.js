import add from "../src/add.js";
import { assert, should } from "chai";

describe("add", function () {
  it("should add two positive numbers", function () {
    assert.equal(add(6, 4), 10);
  });
  it("should add positive and negative number", function () {
    assert.equal(add(6, -4), 2);
  });
  it("should add two negative numbers", function () {
    assert.equal(add(-6, -4), -10);
  });
  it("should add a number and zero", function () {
    assert.equal(add(1.3, 0), 1.3);
  });
  it("should add two zeros", function () {
    assert.equal(add(0, 0), 0);
  });
  it("should add a two decimal numbers", function () {
    assert.equal(add(1.5, 2.3), 3.8);
  });
  it("should throw error when two strings are added", function () {
    assert.equal(add("6", "4"), TypeError);
  });
  it("should handle other non-numeric values", function () {
    assert.equal(add(null, undefined), null);
  });
});
