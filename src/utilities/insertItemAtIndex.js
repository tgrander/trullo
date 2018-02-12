export default (array, item, index = array.length - 1) => ([
  ...array.slice(0, index),
  item,
  ...array.slice(index),
]);
