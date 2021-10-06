import regex from './../index';

test('lineBreaks value should be a regex object.', () => {
  expect(typeof regex.lineBreaks).toBe('object');
});

test('lineBreaks value should return regex string.', () => {
  expect(Object.prototype.toString.call(regex.lineBreaks) === '[object RegExp]').toBe(true);
});

test('replaceLineBreaks should be a function.', () => {
  expect(typeof regex.replaceLineBreaks).toBe('function');
});

test('replaceLineBreaks should replace excessive linebreaks with a maximum of two.', () => {
  const value =
    "The glory of the heavens was ever beyond the grasp of those who never thought to reach for it.\n\n\nBut if I've gained anything from all of this, it is the courage to stretch out my hand. &emdash; Crystal Exarch";
  const expects =
    "The glory of the heavens was ever beyond the grasp of those who never thought to reach for it.\n\nBut if I've gained anything from all of this, it is the courage to stretch out my hand. &emdash; Crystal Exarch";

  expect(regex.replaceLineBreaks(value)).toEqual(expects);
});
