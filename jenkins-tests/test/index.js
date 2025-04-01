const { expect } = require('chai');
const { sumar } = require('../index');

describe('Función sumar', () => {
  it('debería sumar dos números positivos', () => {
    expect(sumar(3, 5)).to.equal(8);
  });

  it('debería sumar un número positivo y uno negativo', () => {
    expect(sumar(3, -5)).to.equal(-2);
  });

  it('debería sumar números decimales', () => {
    expect(sumar(3.5, 7.1)).to.equal(10.6);
  });

  it('debería lanzar un error si los parámetros no son números', () => {
    expect(() => sumar('3', 5)).to.throw('Ambos parámetros deben ser números');
  });
});
