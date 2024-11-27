import isEmpty from "../src/isEmpty.js";
import {expect} from "chai";

describe("isEmpty", function (){
    it("should return true with empty array", function () {
        const input = [];
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return false with non-empty array", function (){
        const input = [1,2,3];
        const result = isEmpty(input);
        expect(result).to.be.false;
    });
    it ("should return true with empty string", function () {
        const input = "";
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return false with non-empty string", function() {
        const input = "product";
        const result = isEmpty(input);
        expect(result).to.be.false;
    });
    it ("shoud return true with empty object", function () {
        const input = {};
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return false with non-empty object", function () {
        const input = {'a': 1}
        const result = isEmpty(input);
        expect(result).to.be.false;
    });
    it ("should return true with empty map", function () {
        const input = new Map();
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return false with non-empty map", function () {
        const input = new Map([['key','value']]);
        const result = isEmpty(input);
        expect(result).to.be.false;
    });
    it ("should return true with empty set", function (){
        const input = new Set();
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return false with non-empty set", function (){
        const input = new Set([1,2]);
        const result = isEmpty(input);
        expect(result).to.be.false;
    });
    it ("should return true with value 'null'", function (){
        const input = null;
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
    it ("should return true with value 'undefined'", function () {
        const input = undefined;
        const result = isEmpty(input);
        expect(result).to.be.true;
    });
});