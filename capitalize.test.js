const capitalize = require('./capitalize.js');

test('capitalize first letter', () => {
  expect(capitalize('lilian')).toMatch('Lilian');
});

test('show error if empty string', () => {
  expect(() => {capitalize(''); }).toThrow();
})
