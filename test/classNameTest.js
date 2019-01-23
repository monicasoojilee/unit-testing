// Uncomment if using Node
const chai = require('chai');
const assert = chai.assert;

const className = require('../js/className.js');
const addClass = className.addClass;

describe ('addClass', function() {
  it ('should add class to element', function() {
// created an element variable...
    let element = { className: '' };

// ...passed as a param with new class name(str) to addClass(fn)
    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it ('should not add class which already exists', function() {
    let element = { className: 'exists' };

    addClass(element, 'exists');

    let numClasses = element.className.split(' ').length;

    assert.equal(numClasses, 1);
  });

  it ('should append new class after existing one', function() {
    let element = { className: 'exists' };

    addClass(element, 'new-class');

    let classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  })
})

// describe('addClass', function() {
//   it('should add class into element', function() {
//     var element = { className: '' };

//     addClass(element, 'test-class');

//     assert.equal(element.className, 'test-class');
//   });

//   it('should not add a class which already exists in element', function() {
//     var element = { className: 'exists' };

//     addClass(element, 'exists');

//     var numClasses = element.className.split(' ').length;
//     assert.equal(numClasses, 1);
//   });

//   it('should append new class after existing one', function() {
//     var element = { className: 'exists' };

//     addClass(element, 'new-class');

//     var classes = element.className.split(' ');
//     assert.equal(classes[1], 'new-class');
//   });
// });
