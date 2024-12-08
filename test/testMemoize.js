import memoize from "../src/memoize.js";
import { expect } from "chai";

describe("memoize", function () {
  it("should memoize getting values of object attributes", function () {
    const values = (obj) => Object.values(obj);
    const memoizedFunction = memoize(values);
    const inputObject = { name: "Peter", age: 9 };
    const expectedResult = ["Peter", 9];
    const result = memoizedFunction(inputObject);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should memoize a multiplication by 2", function () {
    const multiplyByTwo = (x) => x * 2;
    const memoizedFunction = memoize(multiplyByTwo);
    const inputNumber = 3;
    const expectedResult = 6;
    const result = memoizedFunction(inputNumber);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should use custom resolver for the memoized function", function () {
    const subtract = (x, y) => x - y;
    const resolver = (x, y) => `${x}-${y}`;
    const memoizedFunction = memoize(subtract, resolver);
    const x = 3;
    const y = 2;
    const expectedResult = 1;
    const result = memoizedFunction(x, y);
    expect(result).to.equal(expectedResult);
  });
  it("should throw a type error when given empty function to memoize", function () {
    expect(() => memoize()).to.throw(TypeError, "Expected a function");
  });
  it("should throw a type error when given a string as a function to memoize", function () {
    expect(() => memoize("notFunction")).to.throw(
      TypeError,
      "Expected a function"
    );
  });
  it("should throw a type error when given a number as a function to memoize", function () {
    expect(() => memoize(2)).to.throw(TypeError, "Expected a function");
  });
});
