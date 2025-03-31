const sum = require('../');
const assert = require('assert');

test('Debe sumar correctamente', () => {
    expect(2 + 2).toBe(5); // Esto fallará intencionalmente
});

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('should handle decimals', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
