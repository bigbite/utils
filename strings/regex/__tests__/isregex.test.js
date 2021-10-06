import regex from './../index';

test('isRegex should be a function.', () => {
  expect(typeof regex.isRegex).toBe('function');
});

test('isRegex should return boolean.', () => {
  expect(regex.isRegex('test')).toBe(false);
  expect(regex.isRegex('/test/')).toBe(false);
  expect(regex.isRegex(/test/)).toBe(true);
});
