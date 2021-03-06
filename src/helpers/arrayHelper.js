import arrayOps from '../constants/arrayOperations';

/* function uniq */
// takes an array and returns an array of unique elements of the original
// function don't mutate original array
const uniq = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

/* function objectify */
// takes array and function to form keys
// return object
const objectify = (coll, select) => (
  coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {})
);

/* function similarPropsCount */
// takes list of objects and prop
// calculate what timesthis props is present in list
const similarPropsCount = (list, prop) => {
  const reducer = (acc, item) => {
    const key = item[prop];
    if (Object.prototype.hasOwnProperty.call(acc, key)) {
      acc[key] += 1;
    } else {
      acc[key] = 1;
    }

    return acc;
  };
  return list.reduce(reducer, {});
};

/* function applyOpToCollection */
// takes collesction, operation, index of collection, value of changed element and operations
// apply operation to collection
const applyOpToCollection = (coll, operationName, index, value, ops = arrayOps) => (
  ops.has(operationName) ? ops.get(operationName)(coll, index, value) : coll
);

/* function swapItemsNearIndex */
// takes an array and  an index
// swap left and right elements near the index
const swapItemsNearIndex = (arr, index) => {
  const transformed = arr.slice();
  if (index === 0 || index >= transformed.length - 1) {
    return arr;
  }
  transformed.splice(index - 1, 3, arr[index + 1], arr[index], arr[index - 1]);
  return transformed;
};

const dublicate = (arg) => [arg, arg];
const dublicateItemInArr = (item) => dublicate(item);
const dublicateAllItemsInBinaryArray = (elements) => (
  elements
    .map((i) => i.map(dublicateItemInArr).flat())
    .map(dublicateItemInArr)
    .flat()
);

const summaryRanges = (coll) => {
  const delimeter = '->';
  const reducer = (acc, item) => {
    if (acc.length === 0) {
      return [].concat(acc, item);
    }

    const currentRange = acc.slice().pop();
    if (typeof currentRange === 'number') {
      if (item === Number(currentRange) + 1) {
        const range = `${currentRange}${delimeter}${item}`;
        return [].concat(acc.slice(0, -1), range);
      }
      return [].concat(acc.slice(0, -1), item);
    }

    if (typeof currentRange === 'string') {
      const [rangeStart, rangeEnd] = currentRange.split(delimeter);
      if (item === Number(rangeEnd) + 1) {
        const range = `${rangeStart}${delimeter}${item}`;
        return [].concat(acc.slice(0, -1), range);
      }

      return [].concat(acc, item);
    }
    return acc;
  };
  const checkResult = (item) => (typeof item === 'string');
  return coll.reduce(reducer, []).filter(checkResult);
};


export {
  uniq,
  objectify,
  similarPropsCount,
  applyOpToCollection,
  swapItemsNearIndex,
  dublicate,
  dublicateItemInArr,
  dublicateAllItemsInBinaryArray,
  summaryRanges,
};
