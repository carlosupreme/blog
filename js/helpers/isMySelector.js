function isMySelector(e, selector) {
  return e.target.matches(selector) || e.target.matches(`${selector} *`);
}
export default isMySelector;
