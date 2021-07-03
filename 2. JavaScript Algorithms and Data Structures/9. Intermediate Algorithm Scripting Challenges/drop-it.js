const dropElements = (arr, func) => {
  const times = arr.length;

  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
};

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  })
);
