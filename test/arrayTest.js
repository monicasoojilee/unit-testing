//  Uncomment if using Node
const chai = require('chai');
const assert = chai.assert;

describe ('Array', function(){
  it ('should start empty', function(){
    // SYSTEM UNDER TEST (SUT) : something that you're testing
    let arr = [];

    // VALIDATION : (actual value, expected value, message)
    assert.equal(arr.length, 0, 'Array length was not 0');
  });
  
  // additional `it` tests 

});
