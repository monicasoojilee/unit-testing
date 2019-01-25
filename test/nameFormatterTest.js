const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const NameFormatter = require('../js/nameFormatter');

describe ('invert name', () => {
    it ("should return an empty string when passed an empty string", () => {
        // (1) create a new instance of `NameFormatter()`
        const nameFormatter = new NameFormatter();
        
        // (2) set up variables to test
        const inputName = "";
        const expectedOutput = "";

        // (3) assert that the instance && invertName(meth) works
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return a single name when passed a single name", () => {
        const nameFormatter = new NameFormatter();
        const inputName = "name";
        const expectedOutput = "name";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

// --------------- E N D  O F  W A L K T H R O U G H -------------- //

    it ("should return a single name when passed a single name with extra spaces", () => {
        const nameFormatter = new NameFormatter();
        const inputName = " name ";
        const expectedOutput = "name";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return a last-name, first-name when passed a first and last-name", () => {
        const nameFormatter = new NameFormatter();
        const inputName = "first last";
        const expectedOutput = "last, first";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return a last-name, first-name when passed a first and last-name with extra spaces around the names (You may want to use regular expressions to detect the whitespace)", () => {
        const nameFormatter = new NameFormatter();
        const inputName = " first last";
        const expectedOutput = "last, first";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return an empty string when passed a single honorific", () => {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. ";
        const expectedOutput = "";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return honorific first-name when passed honorific first-name", () => {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. first";
        const expectedOutput = "Dr. first";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should return a honorific last-name, first-name when passed honorific first-name last-name", () => {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. first-name last-name";
        const expectedOutput = "Dr. last-name, first-name";
        
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", () => {
        const nameFormatter = new NameFormatter();
        const inputName = " Dr. first-name last-name ";
        const expectedOutput = "Dr. last-name, first-name";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    it ("should throw an error when name is undefined", () => {
        const nameFormatter = new NameFormatter();
        const inputName = undefined;
        const expectedOutput = "Error: Invalid name"

        expect(() => nameFormatter.invertName(inputName)).to.throw("Invalid name");
    });
});