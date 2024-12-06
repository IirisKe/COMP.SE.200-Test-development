import get from "../src/get.js"
import {expect} from 'chai';

//Test Suite
describe('get', () => {
    it('should return correct value with valid path', () => {
        const object = {a: [{b: {c: 3}}]};
        const path = 'a[0].b.c';
        const defaultValue = undefined;

        const expectedOutput = 3;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });
    it ('should return correct value with valid array format path', () => {
        const object = {a: [{b: {c: 3}}]};
        const path = ['a','0','b','c'];
        const defaultValue = undefined;

        const expectedOutput = 3;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

    it('should return default value if path does not exist', () => {
        const object = { a: [{ b: { c: 3 } }] };
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it ('should return default value if object is null', () => {
        // Inputs
        const object = null;
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('should return default value if object is undefined', () => {
        // Inputs
        const object = undefined;
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('should return correct value with valid deeply nested path', () => {
        const object = {a: {b: { c: {d: {e: 5}}}}};
        const path = 'a.b.c.d.e';
        const defaultValue = undefined;

        const expectedOutput = 5;

        const result = get(object, path, defaultValue);
        
        expect(result).to.equal(expectedOutput);
    });

    it('should return default value with invalid path format', () => {
        const object = {a: {b: {c: 3}}};
        const path = 12345;
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('should return correct value with valid non-nested path', () => {
        const object = {a: 10};
        const path = 'a';
        const defaultValue = undefined;

        const expectedOutput = 10;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

    it('should return correct value with valid path with special chars', ()=> {
        const object = {'a.b.c': {d: 4}};
        const path = ['a.b.c','d'];
        const defaultValue = 'default';

        const expectedOutput = 4;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

});