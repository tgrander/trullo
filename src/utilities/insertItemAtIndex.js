export default (array, item, index) => ([
  ...array.slice(0, index),
  item,
  ...array.slice(index),
]);
