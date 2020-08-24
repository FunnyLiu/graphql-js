/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound]
const find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (const value of list) {
    if (predicate(value)) {
      return value;
    }
  }
};
export default find;
