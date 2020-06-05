const assert = require('assert');
const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('#sum()', () => {
    it('should return 2 when parameters = 1,1', () => {
      const result = calculator.sum(1, 1);
      assert.equal(result, 2);
    });
    it('should return NaN when parameters = 1,null', () => {
      const result = calculator.sum(1, null);
      assert.deepStrictEqual(result, NaN);
    });
    it('should return NaN when parameters = 1,""', () => {
      const result = calculator.sum(1, '');
      assert.deepStrictEqual(result, NaN);
    });
  });
});
