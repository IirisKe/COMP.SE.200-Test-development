import reduce from "../src/reduce.js";
import { expect } from "chai";

describe("reduce", function () {
  it("should sum array items together", function () {
    const collection = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;
    const accumulator = 0;
    const expectedResult = 6;
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.equal(expectedResult);
  });
  it("should sum array items together with initial value", function () {
    const collection = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;
    const accumulator = 2;
    const expectedResult = 8;
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.equal(expectedResult);
  });
  it("should group keys by values without initial value", function () {
    const collection = { a: 1, b: 2, c: 1 };
    const iteratee = (result, value, key) => {
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(key);
      return result;
    };
    const accumulator = {};
    const expectedResult = { 1: ["a", "c"], 2: ["b"] };
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should group keys by values when initial value is given", function () {
    const collection = { a: 1, b: 2, c: 1 };
    const iteratee = (result, value, key) => {
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(key);
      return result;
    };
    const accumulator = { d: 2 };
    const expectedResult = { 1: ["a", "c"], 2: ["b", "d"] };
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should reduce an array of strings to concatenated string", function () {
    const collection = ["w", "o", "r", "d"];
    const iteratee = (result, char) => result + char;
    const expectedResult = "word";
    const result = reduce(collection, iteratee, "");
    expect(result).to.equal(expectedResult);
  });
  it("should sum an empty array with an accumulator", function () {
    const collection = [];
    const iteratee = (sum, n) => sum + n;
    const accumulator = 2;
    const expectedResult = 2;
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.equal(expectedResult);
  });
  it("should sum an empty array with an accumulator", function () {
    const collection = [];
    const iteratee = (sum, n) => sum + n;
    const accumulator = 2;
    const expectedResult = 2;
    const result = reduce(collection, iteratee, accumulator);
    expect(result).to.equal(expectedResult);
  });
});
