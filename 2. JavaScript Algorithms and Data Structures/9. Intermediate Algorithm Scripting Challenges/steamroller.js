const steamrollArray = arr => {
  let flattenedArray = [];

  const flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };

  arr.forEach(flatten);

  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, [2], [3, [[4]]]]));
