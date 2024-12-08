import map from "../src/map.js";
import { expect } from "chai";

function square(n) {
  return n * n;
}
function roundToThreeDecimals(n) {
  return parseFloat(n.toFixed(3));
}

describe("map", function () {
  it("should square array items which are integers", function () {
    const inputArray = [3, 6, 9];
    const functionToInvoke = square;
    const expectedResult = [9, 36, 81];
    const result = map(inputArray, functionToInvoke);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should return a type error when squaring an array which contains an item that is not a number", function () {
    const inputArray = [3, "notNumber", 9];
    const functionToInvoke = square;
    const expectedResult = TypeError;
    const result = map(inputArray, functionToInvoke);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should round array items to 3 decimal places", function () {
    const inputArray = [1.7389262, 4.8472572, 9.7344847];
    const functionToInvoke = roundToThreeDecimals;
    const expectedResult = [1.739, 4.847, 9.734];
    const result = map(inputArray, functionToInvoke);
    expect(result).to.deep.equal(expectedResult);
  });
  it("should parse an array of strings to numbers", function () {
    const inputArray = ["3", "65", "104"];
    const functionToInvoke = parseFloat;
    const expectedResult = [3, 65, 104];
    const result = map(inputArray, functionToInvoke);
    expect(result).to.deep.equal(expectedResult);
  });
});
