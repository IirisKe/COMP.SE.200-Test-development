import words from "../src/words.js";
import {expect} from 'chai';

describe('words', () => {
    it('TC30: Split a basic ASCII string into words', () => {
        const inputString = 'honey, almond, oat';

        const expectedOutput = ['honey', 'almond', 'oat'];

        const result = words(inputString);

        expect(result).to.deep.equal(expectedOutput);
    });
    it('TC31: Split a string with a custom pattern', () => {
        const inputString = 'honey, almond, & oat';
        const pattern = /[^, ]+/g

        const expectedOutput = ['honey', 'almond', '&', 'oat'];

        const result = words(inputString, pattern);

        expect(result).to.deep.equal(expectedOutput);
    });
    it('TC32: Handle an empty string', ()=> {
        const inputString = '';
        
        const expectedOutput = [];

        const result = words(inputString);

        expect(result).to.deep.equal(expectedOutput);
    });
    it('TC33: Handle a string with numbers and words', ()=> {
        const inputString = 'user123 and data456';

        const expectedOutput = ['user123', 'and', 'data456'];

        const result = words(inputString, pattern);

        expect(result).to.deep.equal(expectedOutput);
    });
    it ('TC34: Handle a string with non-ASCII characters', ()=> {
        const inputString = 'café au lait';

        const expectedOutput = ['café', 'au', 'lait'];

        const result = words(inputString);

        expect(result).to.deep.equal(expectedOutput);
    });
    it ('TC35: Handle numbers as separate words', ()=> {
        const inputString = '123 4567';

        const expectedOutput = ['123', '4567'];

        const result = words(inputString);

        expect(result).to.deep.equal(expectedOutput);
    });
    it('TC36: Custom pattern to include punctuation', ()=> {
        const inputString ='hello, world!';
        const pattern = /[^ ]+/g;

        const expectedOutput = ['hello,', 'world!'];

        const result = words(inputString, pattern);

        expect(result).to.deep.equal(expectedOutput);
    });
    it('TC37: Handle special characters as individual words', ()=> {
        const inputSring = 'abc$#def';
        const pattern = /[^ ]+/g;

        const expectedOutput = ['abc$#def'];

        const result = words(inputSring, pattern);

        expect(result).to.deep.equal(expectedOutput);
    });

})