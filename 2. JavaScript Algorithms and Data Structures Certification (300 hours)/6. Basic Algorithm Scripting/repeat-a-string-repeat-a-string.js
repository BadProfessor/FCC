function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';

  for (num; num > 0; num--) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes('abc', 3);
console.log(repeatStringNumTimes('String', 3));
