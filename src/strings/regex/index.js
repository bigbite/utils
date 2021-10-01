const REGEX_LINEBREAKS = /(\n\s*?\n)\s*\n/;

export default {
  lineBreaks: REGEX_LINEBREAKS,
  replaceLineBreaks: (string) => string.replace(REGEX_LINEBREAKS, "$1"),
};
