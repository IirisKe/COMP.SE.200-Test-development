import add from "../src/add.js";
import { assert } from "chai";

describe("add", function () {
  it("should add two positive numbers", function () {
    assert.equal(add(6, 4), 10);
  });

  it("should add a positive and a negative number", function () {
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

  it("should add two decimal numbers", function () {
    assert.closeTo(add(1.5, 2.3), 3.8, 0.0001); // Allow for floating-point precision errors
  });
});
