/**
 * Return HTMLElement if the element supplied matches the selector,
 * if not it loops through all parents until it find a match.
 *
 * @param {HTMLElement} element Current target.
 * @param {string} selector Selector to check that the element matches.
 * @returns {HTMLElement|Boolean}
 */
const delegate = (element, selector) => {
  // If element matches return element.
  if (element.matches(selector)) {
    return element;
  }

  // While there is a parentElement and the parent element
  // doesn't match the selector loop through parent selector
  while ((element = element.parentElement) && !element.matches(selector));

  // if element then return it.
  if (element) {
    return element;
  }

  // Nothing matches, return false.
  return false;
};

export default delegate;
