  
const stringReverse = require('./stringreverse.js');

  test('reverse a string (lilian)', () => {
    expect(stringReverse('lilian')).toBe('nailil');
  });

  test('reverse an empty string', () => {
    expect(stringReverse('')).toBe(Error);
  });

  test('reverse a string (proactiveness)', () => {
    expect(stringReverse('proactiveness')).toBe(Error);
  });