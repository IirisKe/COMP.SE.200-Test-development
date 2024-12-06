import chunk from "../src/chunk.js";
import {expect} from 'chai';

describe('chunk', function () {
    it('should split the array into two chunks of the same size', function() {
        const inputArray = ['a', 'b', 'c', 'd']
        const chunkSize = 2
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([['a', 'b'], ['c', 'd']])
      })
      it('should split the array into chunks of different sizes', function() {
        const inputArray = ['a', 'b', 'c', 'd']
        const chunkSize = 3
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([['a', 'b', 'c'], ['d']])
      })
      it('should split the array into multiple chunks, where the last chunk is 1 item shorter', function() {
        const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
        const chunkSize = 3
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k']])
      })
      it('should split the array into one chunk when the chunk size is equal to the array length', function() {
        const inputArray = ['a', 'b', 'c', 'd']
        const chunkSize = 4
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([['a', 'b', 'c', 'd']])
      })
      it('should split the array into a single chunk when chunk size is larger than array length', function() {
        const inputArray = ['a', 'b', 'c', 'd']
        const chunkSize = 5
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([['a', 'b', 'c', 'd']])
      })
      it('should return an empty array when chunk size is negative', function() {
        const inputArray = ['a', 'b', 'c', 'd']
        const chunkSize = -2
        const result = chunk(inputArray, chunkSize)
        expect(result).to.deep.equal([])
      })
})