export default function isMySelector(e, selector) {
  return e.target.matches(selector) || e.target.matches(`${selector} *`);
} 
