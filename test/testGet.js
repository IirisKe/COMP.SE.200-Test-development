import get from "../src/get.js"
import {expect} from 'chai';

//Test Suite
describe('get', () => {
    it('TC01: Get value at a valid path', () => {
        const object = {a: [{b: {c: 3}}]};
        const path = 'a[0].b.c';
        const defaultValue = undefined;

        const expectedOutput = 3;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });
    it ('TC02: Get value with array path format', () => {
        const object = {a: [{b: {c: 3}}]};
        const path = ['a','0','b','c'];
        const defaultValue = undefined;

        const expectedOutput = 3;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

    it('TC03: Get default value when path does not exist', () => {
        const object = { a: [{ b: { c: 3 } }] };
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it ('TC04: Get value when object is null', () => {
        // Inputs
        const object = null;
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('TC05: Get value when object is undefined', () => {
        // Inputs
        const object = undefined;
        const path = 'a.b.c';
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('TC06: Get value at a deeply nested path', () => {
        const object = {a: {b: { c: {d: {e: 5}}}}};
        const path = 'a.b.c.d.e';
        const defaultValue = undefined;

        const expectedOutput = 5;

        const result = get(object, path, defaultValue);
        
        expect(result).to.equal(expectedOutput);
    });

    it('TC07: Get value with invalid path format', () => {
        const object = {a: {b: {c: 3}}};
        const path = 12345;
        const defaultValue = 'default';

        const result = get(object, path, defaultValue);

        expect(result).to.equal(defaultValue);
    });

    it('TC08: Get value at non-nested path', () => {
        const object = {a: 10};
        const path = 'a';
        const defaultValue = undefined;

        const expectedOutput = 10;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

    it('TC09: Get value with special characters in path', ()=> {
        const object = {'a.b.c': {d: 4}};
        const path = ['a.b.c','d'];
        const defaultValue = 'default';

        const expectedOutput = 4;

        const result = get(object, path, defaultValue);

        expect(result).to.equal(expectedOutput);
    });

});