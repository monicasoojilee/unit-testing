const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const NameFormatter = require('../js/nameFormatter');

describe ('invert name', () => {

    let nameFormatter;
    beforeEach(() => {
        nameFormatter = new NameFormatter();
    });

    it ("should throw an error when name is undefined", () => {
        const nameFormatter = new NameFormatter();
        const inputName = undefined;
        const expectedOutput = "Invalid name"

        expect(() => nameFormatter.invertName(inputName)).to.throw(expectedOutput);
    });

    it ("should return an empty string when passed an empty string", () => {
        const inputName = "";
        const expectedOutput = "";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });

    context ("when passed a single name", () => {
        it ("should return a single name", () => {
        const inputName = "name";
        const expectedOutput = "name";

        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
        });

        context ("with extra spaces", () => {
            it ("should return a single name", () => {
                const inputName = " name ";
                const expectedOutput = "name";
        
                assert.equal(nameFormatter.invertName(inputName), expectedOutput);
            });
        });
    });

    context ("when passed a first and last name", () => {

        it ("should return a last-name, first-name", () => {
            const inputName = "first last";
            const expectedOutput = "last, first";
    
            assert.equal(nameFormatter.invertName(inputName), expectedOutput);
        });

        context ("with extra spaces", () => {
            it ("should return a last-name, first-name", () => {
                const inputName = " first last";
                const expectedOutput = "last, first";
        
                assert.equal(nameFormatter.invertName(inputName), expectedOutput);
            });
        });
    });

    context ("when passed an honorific", () => {
        it ("should return an empty string", () => {
            const inputName = "Dr. ";
            const expectedOutput = "";
    
            assert.equal(nameFormatter.invertName(inputName), expectedOutput);
        });

        context ("and first name", () => {
            it ("should return honorific first-name", () => {
                const inputName = "Dr. first";
                const expectedOutput = "Dr. first";
        
                assert.equal(nameFormatter.invertName(inputName), expectedOutput);
            });

            context ("and last name", () => {
                it ("should return a honorific last-name, first-name", () => {
                    const inputName = "Dr. first-name last-name";
                    const expectedOutput = "Dr. last-name, first-name";
                    
                    assert.equal(nameFormatter.invertName(inputName), expectedOutput);
                });

                context ("with extra spaces", () => {
                    it ("should return a honorific last-name, first-name", () => {
                        const inputName = " Dr. first-name last-name ";
                        const expectedOutput = "Dr. last-name, first-name";
                
                        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
                    });
                });  
            });
        });
    });
});