import filter from "../src/filter.js";
import {expect} from 'chai';

describe('filter', ()=> {
  it('should return filtered array with valid array and predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = (value) => value > 2;
    const result = filter(array, predicate);
    
    // Expect result to match the nested structure
    expect(result).to.deep.equal([3, 4]);
  });
  it('should return empty array with empty input array', () => {
    const array = [];
    const predicate = (value) => value > 0;
    const result = filter(array, predicate);

    // Expect the result to be a nested empty array [[]]
    expect(result).to.deep.equal([[]]);
  });
  it('should return empty array with null as input', () => {
    const array = null;
    const predicate = (value) => value > 0;
    const result = filter(array, predicate);

    // Expect the result to be a nested empty array [[]]
    expect(result).to.deep.equal([[]]);
  });
  it('should return TypeError with undefined predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = undefined;

    // Verify that the function throws an error
    expect(() => filter(array, predicate)).to.throw(TypeError);
  });
  it('should return empty array with numeric input and false as predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = (value) => false; // Predicate that always returns false

    const result = filter(array, predicate);

    // Expect the result to be an empty array
    expect(result).to.deep.equal([[]]);
  });
  it('should return filtered object array with valid input and property predicate', () => {
    const array = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true }
    ];

    const predicate = (obj) => obj.active; // Predicate based on the 'active' property

    const result = filter(array, predicate);

    // Expected output: Only the objects where 'active' is true
    expect(result).to.deep.equal([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true }
    ]);
  });
  it('should throw TypeError with non-function predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = 42; // Non-function predicate

    // Ensure an error is thrown when the predicate is not a function
    expect(() => filter(array, predicate)).to.throw(TypeError, 'predicate is not a function');
  });
  it('should return filtered array with valid mix-type input array and predicate', () => {
    const array = [1, "2", {a: 1}, [1, 2]];
    const predicate = (value) => typeof value === 'number';  // Check for numbers only

    const result = filter(array, predicate);

    // Assert that the filtered result only contains the number 1
    expect(result).to.deep.equal([1]);
  });
  it('should return filtered array with valid large array and predicate', () => {
    // Generate an array with numbers from 1 to 1,000,000
    const array = Array.from({ length: 1000000 }, (_, i) => i + 1);
    
    // Define the predicate to filter even numbers
    const predicate = (value) => value % 2 === 0;

    // Filter the array
    const result = filter(array, predicate);

    // Check the first few values of the result to ensure it's correct
    expect(result[0]).to.equal(2);  // The first even number
    expect(result[result.length - 1]).to.equal(1000000);  // The last even number

    // Check the length of the result array (should be half of the original array length)
    expect(result.length).to.equal(500000);
  });
  

})