let assert = require('assert');
let calculator = require('../src/calculator');

describe('Calculator', function() {

  describe('#sum()', function() {
    it('should return 2 when parameters = 1,1', function() {
      let result = calculator.sum(1,1);
      assert.equal(result, 2);
    });
    it('should return NaN when parameters = 1,null', function() {
      let result = calculator.sum(1,null);
      assert.deepStrictEqual(result, NaN);
    });
    it('should return NaN when parameters = 1,""', function() {
      let result = calculator.sum(1,'');
      assert.deepStrictEqual(result, NaN);
    });    
  });
});
