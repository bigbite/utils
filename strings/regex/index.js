const REGEX_LINEBREAKS = /(\n\s*?\n)\s*\n/;

export default {
  isRegex: (value) => Object.prototype.toString.call(value) === '[object RegExp]',
  lineBreaks: REGEX_LINEBREAKS,
  replaceLineBreaks: (string) => string.replace(REGEX_LINEBREAKS, '$1'),
};
