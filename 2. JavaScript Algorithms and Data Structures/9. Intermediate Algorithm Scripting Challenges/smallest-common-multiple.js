const smallestCommons = arr => {
  arr.sort(function(a, b) {
    return b - a;
  });

  const newArr = [];

  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  let quot = 0;
  let loop = 1;
  let n;

  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
};

smallestCommons([1, 5]);
console.log(smallestCommons([1, 5]));
