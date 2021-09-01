const capitalize = require('./capitalize.js');

test('capitalize first letter', () => {
  expect(capitalize('lilian')).toMatch('Lilian');
});

test('capitalize first letter', () => {
  expect(capitalize('')).toBe(Error);
});
