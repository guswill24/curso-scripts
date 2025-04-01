/**
 * Calculadora básica
 * -------------------
 * Este módulo exporta funciones matemáticas para practicar pruebas unitarias.
 * Actualmente solo suma, pero se pueden agregar más operaciones.
 */

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la suma
 */
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos parámetros deben ser números');
  }
  return a + b;
}

// Exportamos la función
module.exports = {
  sumar
};
