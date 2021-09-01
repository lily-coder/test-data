const stringlength = require('./stringlength');

test('if string length is greater than 1 and less than or equal to 10', () => {
    expect(stringlength('Lilian')).toBe(6);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
    expect(stringlength('Proactiveness')).toBe(Error);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
    expect(stringlength('234')).toBe(3);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
    expect(stringlength('')).toBe(Error);
});