function addTogether() {
  const checkNum = function(num) {
    if (typeof num !== 'number') return undefined;
    else return num;
  };

  if (arguments.length > 1) {
    const a = checkNum(arguments[0]);
    const b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) return undefined;
    else return a + b;
  } else {
    let c = arguments[0];

    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) return undefined;
        else return c + arg2;
      };
    }
  }
}

addTogether(2, 3);
console.log(addTogether(2, 3));
